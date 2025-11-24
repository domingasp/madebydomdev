import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { h } from "vue";

import { faker } from "@faker-js/faker";

import { RenderVariantsFactory } from "../../../../.storybook/components/RenderVariantsFactory";
import { getVariantOptions } from "../../../lib/variants";
import Text from "../../typography/text/Text.vue";

import { group, type GroupVariants } from "./group.variants";
import Group from "./Group.vue";

const GroupVariants = RenderVariantsFactory.for(Group);
const align = getVariantOptions<GroupVariants>(group)("align");
const justify = getVariantOptions<GroupVariants>(group)("justify");
const spacing = getVariantOptions<GroupVariants>(group)("spacing");

const words = Array.from({ length: 3 }).map(() => faker.lorem.word());

const meta = {
	title: "Layout/Group",
	component: Group,
	args: {
		align: "center",
		justify: "start",
		spacing: "md",
	},
	render: (args) => ({
		components: { Group, Text },
		setup() {
			args.default = words.map((word) => h(Text, null, word));
			return { args, faker };
		},
		template: /*html*/ `
			<Group v-bind="args">
				<Text v-for="i in 3" :key="i">{{ faker.lorem.word() }}</Text>
			</Group>
		`,
	}),
} satisfies Meta<typeof Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Spacing: Story = {
	parameters: { controls: { disable: true } },
	render: (args) => ({
		components: { Group, GroupVariants },
		setup() {
			args.default = words.map((word) => h(Text, null, () => word));
			return { args, spacing };
		},
		template: /*html*/ `<GroupVariants prop="spacing" :variants="spacing" :restProps="args" orientation="vertical"/>`,
	}),
};

export const Align: Story = {
	parameters: { controls: { disable: true } },
	render: (args) => ({
		components: { Group, GroupVariants },
		setup() {
			args.default = [
				h(Text, null, () => words[0]),
				h(Text, { size: "xs" }, () => faker.lorem.word()),
			];
			return { args, align };
		},
		template: /*html*/ `<GroupVariants prop="align" :variants="align" :restProps="args" orientation="vertical"/>`,
	}),
};

export const Justify: Story = {
	parameters: { controls: { disable: true } },
	render: (args) => ({
		components: { Group, GroupVariants },
		setup() {
			args.default = words.map((word) => h(Text, null, () => word));
			return { args, justify };
		},
		template: /*html*/ `<GroupVariants prop="justify" :variants="justify" :restProps="args" orientation="vertical"/>`,
	}),
};
