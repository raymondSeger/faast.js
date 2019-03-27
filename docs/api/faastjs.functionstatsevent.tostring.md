---
id: faastjs.functionstatsevent.tostring
title: FunctionStatsEvent.toString() method
hide_title: true
---
[faastjs](./faastjs.md) &gt; [FunctionStatsEvent](./faastjs.functionstatsevent.md) &gt; [toString](./faastjs.functionstatsevent.tostring.md)

## FunctionStatsEvent.toString() method

Returns a string summarizing the statistics event.

<b>Signature:</b>

```typescript
toString(): string;
```
<b>Returns:</b>

`string`

## Remarks

The string includes number of completed calls, errors, and retries, and the mean execution time for the calls that completed within the last time interval (1s).