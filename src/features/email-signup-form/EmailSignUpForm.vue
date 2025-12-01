<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import IconMail from "~icons/lucide/mail";
import IconMailOpen from "~icons/lucide/mail-open";
import IconSend from "~icons/lucide/send";
import { useForm } from "vee-validate";
import * as z from "zod";

import Button from "../../components/buttons/button/Button.vue";
import TextInput from "../../components/inputs/text-input/TextInput.vue";
import Group from "../../components/layout/group/Group.vue";
import Stack from "../../components/layout/stack/Stack.vue";
import Heading from "../../components/typography/heading/Heading.vue";
import Label from "../../components/typography/label/Label.vue";
import Text from "../../components/typography/text/Text.vue";

const validationSchema = toTypedSchema(
	z.object({
		email: z.email({ message: "Must be a valid email" }),
	})
);

const { defineField, handleSubmit } = useForm({ validationSchema });

const [email, emailAttrs] = defineField("email", {
	validateOnBlur: true,
	validateOnChange: false,
	validateOnInput: false,
	validateOnModelUpdate: false,
});

const onSubmit = handleSubmit((values) => {
	alert(JSON.stringify(values, null, 2));
});

// TODO localstorage integration to allow hiding if already signed up
// pr button clicked
</script>

<template>
	<Group class="w-full overflow-hidden rounded-xl p-md shadow-md">
		<Stack
			class="relative min-h-[10rem] min-w-[15rem]"
			align="center"
			justify="center"
			spacing="xs"
		>
			<IconMailOpen
				class="absolute top-1/2 -translate-y-1/2 -rotate-8 text-[10rem] opacity-10"
			/>
			<Heading
				class="m-0 bg-linear-to-r from-[#FF0F7B] to-[#F89B29] bg-clip-text text-transparent"
				:level="2"
				>Email List</Heading
			>
			<Text>No spam, <Text :bold="true">ever</Text>.</Text>
		</Stack>

		<form @submit="onSubmit" class="grow">
			<Stack>
				<Stack spacing="xs" class="w-full">
					<Label for="email">Email</Label>
					<TextInput
						v-model="email"
						v-bind="emailAttrs"
						name="email"
						id="email"
						class="w-full"
					>
						<template #left><IconMail /></template>
					</TextInput>
				</Stack>

				<Button class="w-full">
					<template #icon><IconSend /></template>Join
				</Button>
			</Stack>
		</form>
	</Group>
</template>
