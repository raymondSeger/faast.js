---
id: faastjs.faastaws
title: faastAws() function
hide_title: true
---
[faastjs](./faastjs.md) &gt; [faastAws](./faastjs.faastaws.md)

## faastAws() function

The main entry point for faast with AWS provider.

<b>Signature:</b>

```typescript
export declare function faastAws<M extends object>(fmodule: M, modulePath: string, options?: AwsOptions): Promise<AwsFaastModule<M>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  fmodule | <code>M</code> | A module imported with <code>import * as AAA from &quot;BBB&quot;;</code>. Using <code>require</code> also works but loses type information. |
|  modulePath | <code>string</code> | The path to the module, as it would be specified to <code>import</code> or <code>require</code>. It should be the same as <code>&quot;BBB&quot;</code> from importing fmodule. |
|  options | <code>AwsOptions</code> |  |

<b>Returns:</b>

`Promise<AwsFaastModule<M>>`

a Promise for [AwsFaastModule](./faastjs.awsfaastmodule.md)<!-- -->.