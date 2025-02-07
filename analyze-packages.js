const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const glob = require('glob');

// Function to get all JS/TS files in the project
function getProjectFiles(projectRoot) {
    return glob.sync('**/*.{js,jsx,ts,tsx}', {
        cwd: projectRoot,
        ignore: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'dist/**']
    });
}

// Function to parse package.json and get dependencies
function getDependencies(projectRoot) {
    const packageJson = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8'));
    return {
        ...packageJson.dependencies,
        ...packageJson.devDependencies
    };
}

// Function to get all exports from a package
function getPackageExports(packageName) {
    try {
        const packagePath = require.resolve(packageName);
        const pkg = require(packagePath);
        return Object.keys(pkg);
    } catch (error) {
        console.warn(`Could not analyze exports for package: ${packageName}`);
        return [];
    }
}

// Function to analyze imports in a file
function analyzeFileImports(filePath, projectRoot) {
    const content = fs.readFileSync(path.join(projectRoot, filePath), 'utf8');
    const imports = new Set();

    try {
        const ast = parser.parse(content, {
            sourceType: 'module',
            plugins: ['jsx', 'typescript', 'decorators-legacy']
        });

        traverse(ast, {
            ImportDeclaration(path) {
                const source = path.node.source.value;
                if (!source.startsWith('.') && !source.startsWith('/')) {
                    const packageName = source.split('/')[0];
                    path.node.specifiers.forEach(specifier => {
                        if (specifier.type === 'ImportSpecifier') {
                            imports.add(`${packageName}:${specifier.imported.name}`);
                        }
                    });
                }
            }
        });
    } catch (error) {
        console.warn(`Error parsing file ${filePath}:`, error.message);
    }

    return imports;
}

// Main function to analyze the project
async function analyzeProject(projectRoot) {
    const files = getProjectFiles(projectRoot);
    const dependencies = getDependencies(projectRoot);
    const packageImports = new Map();
    const unusedExports = new Map();

    // Initialize package exports
    for (const pkg of Object.keys(dependencies)) {
        const exports = getPackageExports(pkg);
        if (exports.length > 0) {
            unusedExports.set(pkg, new Set(exports));
        }
    }

    // Analyze each file
    for (const file of files) {
        const imports = analyzeFileImports(file, projectRoot);
        
        for (const imp of imports) {
            const [pkg, exportName] = imp.split(':');
            if (unusedExports.has(pkg)) {
                unusedExports.get(pkg).delete(exportName);
            }
            
            if (!packageImports.has(pkg)) {
                packageImports.set(pkg, new Set());
            }
            packageImports.get(pkg).add(exportName);
        }
    }

    // Find packages with unused exports
    const packagesWithUnusedExports = [];
    for (const [pkg, unused] of unusedExports) {
        if (unused.size > 0) {
            packagesWithUnusedExports.push({
                package: pkg,
                unusedCount: unused.size,
                totalExports: getPackageExports(pkg).length,
                unusedExports: Array.from(unused)
            });
        }
    }

    return packagesWithUnusedExports;
}

// Run the analysis
const projectRoot = process.cwd();
analyzeProject(projectRoot)
    .then(results => {
        console.log('\nPackages with unused exports:');
        console.log('============================');
        
        const optimizePackageImports = results
            .filter(pkg => pkg.unusedCount > 5) // Threshold for significant unused exports
            .map(pkg => pkg.package);

        results.forEach(pkg => {
            console.log(`\n${pkg.package}:`);
            console.log(`- ${pkg.unusedCount} unused exports out of ${pkg.totalExports} total exports`);
            console.log('- Unused exports:', pkg.unusedExports.slice(0, 5).join(', ') + 
                (pkg.unusedExports.length > 5 ? ` and ${pkg.unusedExports.length - 5} more...` : ''));
        });

        console.log('\nRecommended optimizePackageImports configuration:');
        console.log('=============================================');
        console.log('Add this to your next.config.js:');
        console.log('optimizePackageImports: [');
        optimizePackageImports.forEach(pkg => console.log(`  '${pkg}',`));
        console.log(']');
    })
    .catch(error => {
        console.error('Error analyzing project:', error);
    });
