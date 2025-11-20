import type { Meta, StoryObj } from "@storybook/vue3-vite";

import Grid from "./Grid.vue";

const meta = {
	title: "Layout/Grid",
	component: Grid,
	argTypes: {
		cols: {
			control: "number",
		},
	},
	args: {
		spacing: "md",
		cols: 2,
	},
	render: (args) => ({
		components: { Grid },
		setup() {
			return { args };
		},
		template: `
      <Grid v-bind="args">
        <div v-for="i in 6" :key="i" class="h-12 min-w-12 rounded-md bg-foreground" />
      </Grid>
    `,
	}),
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomColumns: Story = {
	argTypes: { cols: { control: "object" } },
	args: {
		cols: ["max-content", "1fr", "2fr"],
	},
};
