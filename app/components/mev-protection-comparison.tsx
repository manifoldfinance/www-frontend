"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface ComparisonData {
  feature: string;
  relayProtect: string;
  flashbotsMevShare: string;
  mevBlocker: string;
}

const comparisonData: ComparisonData[] = [
  {
    feature: "Architecture Foundation",
    relayProtect: "Private mempool implementation with complete transaction isolation",
    flashbotsMevShare: "Transparent order flow with partial information disclosure",
    mevBlocker: "Hybrid approach combining privacy with controlled information flow",
  },
  {
    feature: "Transaction Privacy",
    relayProtect:
      "Full privacy until validator commitment, zero information leakage during pending state",
    flashbotsMevShare: "Partial privacy with strategic information hints for market efficiency",
    mevBlocker: "Enhanced privacy with selective disclosure mechanisms",
  },
  {
    feature: "Processing Pipeline",
    relayProtect: "Direct entry into encrypted transaction pool with validator-only access",
    flashbotsMevShare: "Routing through trusted builder network with hint system",
    mevBlocker: "Multi-stage processing with privacy-preserving intermediaries",
  },
  {
    feature: "Block Construction Method",
    relayProtect: "Private block building with complete state knowledge",
    flashbotsMevShare: "Collaborative block building with partial information sharing",
    mevBlocker: "Hybrid block building with selective validator participation",
  },
  {
    feature: "Network Integration",
    relayProtect: "Deep integration with validator networks, minimal external dependencies",
    flashbotsMevShare: "Extensive integration across multiple builder networks",
    mevBlocker: "Moderate integration requirements with existing infrastructure",
  },
  {
    feature: "Economic Model",
    relayProtect: "Users retain 70-80% of MEV protection benefits, lower validator share",
    flashbotsMevShare: "Equal distribution between users, builders, and validators",
    mevBlocker: "Variable distribution favoring validator incentivization",
  },
  {
    feature: "Market Impact",
    relayProtect: "Reduces overall MEV extraction by 85-95% through complete privacy",
    flashbotsMevShare: "Reduces MEV extraction by 60-75% through controlled disclosure",
    mevBlocker: "Reduces MEV extraction by 70-85% through hybrid approach",
  },
  {
    feature: "Implementation Complexity",
    relayProtect: "High initial setup complexity, simpler long-term maintenance",
    flashbotsMevShare: "Moderate complexity with established infrastructure",
    mevBlocker: "Moderate to high complexity with ongoing maintenance needs",
  },
  {
    feature: "Validator Requirements",
    relayProtect: "Enhanced validation capabilities with privacy preservation",
    flashbotsMevShare: "Standard validation with builder network participation",
    mevBlocker: "Advanced validation with privacy protocol support",
  },
  {
    feature: "Network Overhead",
    relayProtect: "Low network overhead due to efficient encryption",
    flashbotsMevShare: "Moderate overhead from hint system and builder network",
    mevBlocker: "Moderate to high overhead from privacy protocols",
  },
  {
    feature: "Cost Structure",
    relayProtect: "Lower direct costs, higher initial setup investment",
    flashbotsMevShare: "Moderate costs with established fee structure",
    mevBlocker: "Variable costs depending on network conditions",
  },
  {
    feature: "Backrunning Prevention",
    relayProtect: "Near-complete prevention through full transaction privacy",
    flashbotsMevShare: "Partial prevention through controlled information flow",
    mevBlocker: "Enhanced prevention through hybrid privacy model",
  },
  {
    feature: "Scaling Capabilities",
    relayProtect: "Highly scalable with minimal bottlenecks",
    flashbotsMevShare: "Moderately scalable with potential builder constraints",
    mevBlocker: "Scalable with some privacy-related limitations",
  },
  {
    feature: "Integration Flexibility",
    relayProtect: "Limited flexibility due to strict privacy requirements",
    flashbotsMevShare: "High flexibility with multiple integration options",
    mevBlocker: "Moderate flexibility with hybrid approach",
  },
  {
    feature: "Upgrade Path",
    relayProtect: "Clear upgrade path with backward compatibility",
    flashbotsMevShare: "Complex upgrade path with multiple stakeholders",
    mevBlocker: "Moderate upgrade complexity with partial compatibility",
  },
];

export function MEVProtectionComparison() {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRow = (index: number) => {
    setExpandedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>MEV Protection Comparison</CardTitle>
        <CardDescription>
          Compare Relay+ Protect with other MEV protection solutions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="p-2 text-left font-semibold">Feature</th>
                <th className="p-2 text-left font-semibold">Relay+ Protect</th>
                <th className="p-2 text-left font-semibold">Flashbots MEV-Share</th>
                <th className="p-2 text-left font-semibold">MEV Blocker</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-t border-muted">
                  <td className="p-2 font-medium">{row.feature}</td>
                  <td className="p-2">
                    <div className={`${expandedRows.includes(index) ? "" : "line-clamp-2"}`}>
                      {row.relayProtect}
                    </div>
                    {row.relayProtect.length > 100 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleRow(index)}
                        className="mt-1">
                        {expandedRows.includes(index) ? (
                          <>
                            <ChevronUp className="h-4 w-4 mr-1" />
                            Show less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4 mr-1" />
                            Show more
                          </>
                        )}
                      </Button>
                    )}
                  </td>
                  <td className="p-2">
                    <div className={`${expandedRows.includes(index) ? "" : "line-clamp-2"}`}>
                      {row.flashbotsMevShare}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className={`${expandedRows.includes(index) ? "" : "line-clamp-2"}`}>
                      {row.mevBlocker}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
