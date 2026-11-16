import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextInput, Select, Fieldset, Radio, Checkbox } from "..";

const meta: Meta = { title: "Components/Form fields" };
export default meta;
type S = StoryObj;
const months = [6, 12, 24].map((m) => ({ value: String(m), label: `${m} months` }));

export const TextInputDefault: S = { render: () => <TextInput label="Amount" hint="Between $50 and $2,000" defaultValue="500" /> };
export const TextInputError: S = { render: () => <TextInput label="Amount" hint="Between $50 and $2,000" defaultValue="20" error="Enter an amount between $50 and $2,000" /> };
export const TextInputDisabled: S = { render: () => <TextInput label="Amount" defaultValue="500" disabled /> };
export const SelectDefault: S = { render: () => <Select label="Installments" options={months} defaultValue="12" /> };
export const SelectError: S = { render: () => <Select label="Installments" options={months} error="Choose the number of installments" /> };
export const RadiosInFieldset: S = {
  render: () => (
    <Fieldset legend="Where should we send the money?">
      <Radio name="d" label="Ataraxia account ending in 4821" defaultChecked />
      <Radio name="d" label="Another bank account" />
    </Fieldset>
  ),
};
export const RadiosError: S = {
  render: () => (
    <Fieldset legend="Where should we send the money?" error="Select where to send the money">
      <Radio name="e" label="Ataraxia account ending in 4821" aria-invalid />
      <Radio name="e" label="Another bank account" aria-invalid />
    </Fieldset>
  ),
};
export const CheckboxStates: S = {
  render: () => (
    <Fieldset legend="Checkbox states">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Disabled" disabled />
    </Fieldset>
  ),
};
