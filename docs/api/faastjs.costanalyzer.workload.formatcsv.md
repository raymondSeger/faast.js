---
id: faastjs.costanalyzer.workload.formatcsv
title: CostAnalyzer.Workload.formatCSV property
hide_title: true
---
[faastjs](./faastjs.md) &gt; [CostAnalyzer](./faastjs.costanalyzer.md) &gt; [Workload](./faastjs.costanalyzer.workload.md) &gt; [formatCSV](./faastjs.costanalyzer.workload.formatcsv.md)

## CostAnalyzer.Workload.formatCSV property

Format an attribute value for CSV. The default returns `value.toFixed(1)`<!-- -->.

<b>Signature:</b>

```typescript
formatCSV?: (attr: A, value: number) => string;
```