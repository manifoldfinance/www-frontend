import { Shield } from "lucide-react"

export function PrivacySection() {
  return (
    <div className="bg-white/5 rounded-lg p-6">
      <div className="flex items-center space-x-4 mb-4">
        <Shield className="w-8 h-8 text-[#31C4B9]" />
        <h3 className="text-xl font-semibold">Privacy and Security</h3>
      </div>
      <div className="text-gray-400 prose prose-sm dark:prose-invert">
        <p>
          At Manifold Finance, we prioritize the privacy and security of our
          users.
        </p>
        <h1>Understanding Privacy vs. Confidentiality: A Legal and Technical Perspective</h1>

        <p>
          Privacy and confidentiality, though often used interchangeably, have
          distinct legal implications that significantly impact how we protect
          personal data. As legal scholar Ian Grigg notes in his seminal paper
          on Ricardian Contracts, "The contract is a meeting of the minds...
          [it] demands that intention must be shown and all terms must be
          agreed"[^1].
        </p>

        <h2>Key Legal Definitions</h2>

        <table>
          <thead>
            <tr>
              <th>Term</th>
              <th>Legal Context</th>
              <th>Protection Level</th>
              <th>Primary Mechanism</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Confidentiality</td>
              <td>Contractual Law</td>
              <td>Strong</td>
              <td>Binding agreements</td>
            </tr>
            <tr>
              <td>Privacy (Surveillance)</td>
              <td>Search Law</td>
              <td>Variable</td>
              <td>Warrants/Subpoenas</td>
            </tr>
            <tr>
              <td>Privacy (Rights)</td>
              <td>Data Protection</td>
              <td>Moderate</td>
              <td>Regulatory compliance</td>
            </tr>
          </tbody>
        </table>

        <h2>Surveillance Law Framework</h2>

        <p>
          The distinction between content and metadata creates two tiers of
          protection:
        </p>

        <table>
          <thead>
            <tr>
              <th>Data Type</th>
              <th>Example</th>
              <th>Legal Requirement</th>
              <th>Justification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Metadata</td>
              <td>Physical address</td>
              <td>Subpoena</td>
              <td>Required for routing</td>
            </tr>
            <tr>
              <td>Content</td>
              <td>Message contents</td>
              <td>Warrant</td>
              <td>Personal information</td>
            </tr>
          </tbody>
        </table>

        <p>
          Chain-link confidentiality, introduced by Houman Shadab in 2012,
          provides a framework for protecting personal data rights through
          contractual law[^2]. This approach recognizes that while complete
          privacy may be impractical, we can create meaningful protections
          through carefully structured agreements.
        </p>

        <h2>Privacy Protection Hierarchy</h2>

        <ol>
          <li>
            <strong>Content Protection</strong>
            <ul>
              <li>Strongest legal protections</li>
              <li>Requires warrant for access</li>
              <li>Manageable through encryption</li>
            </ul>
          </li>
          <li>
            <strong>Identifier Protection</strong>
            <ul>
              <li>Limited protection possible</li>
              <li>Required for basic infrastructure</li>
              <li>Focus on exploitation prevention</li>
            </ul>
          </li>
        </ol>

        <p>As noted in the Project On Government Oversight's analysis:</p>

        <blockquote>
          <p>
            "The distinction between content and metadata has become
            increasingly blurred in the digital age, yet our legal frameworks
            continue to treat them differently"[^3]
          </p>
        </blockquote>

        <h2>Practical Implementation Strategy</h2>

        <p>
          Rather than pursuing absolute privacy, modern systems should focus on:
        </p>

        <ol>
          <li>Protecting against exploitation of correlatable identifiers</li>
          <li>Implementing strong confidentiality controls</li>
          <li>Establishing clear data rights management</li>
          <li>Creating auditable disclosure mechanisms</li>
        </ol>

        <p>This creates what we might call a "Privacy Protection Matrix":</p>

        <table>
          <thead>
            <tr>
              <th>Protection Level</th>
              <th>Technical Controls</th>
              <th>Legal Controls</th>
              <th>User Controls</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basic</td>
              <td>Encryption</td>
              <td>Terms of Service</td>
              <td>Opt-out rights</td>
            </tr>
            <tr>
              <td>Enhanced</td>
              <td>Access Controls</td>
              <td>Confidentiality Agreements</td>
              <td>Consent Management</td>
            </tr>
            <tr>
              <td>Maximum</td>
              <td>Zero-knowledge Proofs</td>
              <td>Chain-link Contracts</td>
              <td>Full Data Portability</td>
            </tr>
          </tbody>
        </table>

        <h2>Conclusion</h2>

        <p>
          Understanding these distinctions becomes essential for creating
          effective privacy-preserving solutions that balance practical needs
          with individual rights. As we continue to build digital systems, the
          focus should shift from absolute privacy to practical protection
          against exploitation.
        </p>

        <p>
          [^1]: Grigg, I. (1996). "The Ricardian Contract." Retrieved from{" "}
          <a href="https://iang.org/papers/ricardian_contract.html">
            https://iang.org/papers/ricardian_contract.html
          </a>
        </p>
        <p>
          [^2]: Shadab, H. (2012). "Chain-link Confidentiality." Retrieved from{" "}
          <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2045818">
            https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2045818
          </a>
        </p>
        <p>
          [^3]: Project On Government Oversight. (2019). "The History and
          Future of Mass Metadata Surveillance." Retrieved from{" "}
          <a href="https://www.pogo.org/analysis/2019/06/the-history-and-future-of-mass-metadata-surveillance/">
            https://www.pogo.org/analysis/2019/06/the-history-and-future-of-mass-metadata-surveillance/
          </a>
        </p>
        <p>
          <em>
            Note: Not legal advice. This is for educational purposes only.
          </em>
        </p>
      </div>
    </div>
  )
}

