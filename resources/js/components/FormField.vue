<template>
    <DefaultField :field="field"
        :errors="errors"
        :show-help-text="showHelpText"
    >
        <template #field>
            <div class="inline-flex mb-2">
                <div class="color-input rounded rounded-r-none border-r-0 h-100 border color-input-value"
                    :style="{ backgroundColor: value, borderColor: value, width: '36px' }"></div>
                <input :id="field.name" type="text"
                    class="w-25 form-control form-input form-input-bordered color-input border-r-0 rounded-l-none"
                    :class="errorClasses"
                    :placeholder="placeholder"
                    :value="value"
                    @input="handleChange"
                />
            </div>
            <component
                :is="field.pickerType"
                :id="field.name"
                :class="errorClasses"
                :palette="palette"
                v-model="value"
                v-on:update:modelValue="handleChange">
            </component>
        </template>
    </DefaultField>
</template>

<script>
import {FormField, HandlesValidationErrors} from "laravel-nova";

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ["resourceName", "resourceId", "field"],

    methods: {
        /**
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            this.value = this.field.value || "#ffffff";
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.field.attribute, this.value || "#ffffff");
        },

        /**
         * Update the field's internal value.
         */
        handleChange(value) {
            this.value = value.hex;
        }
    },

    computed: {
        /**
         * Set color palette.
         */
        palette() {
            return this.field.palette || undefined;
        },
        /**
         * Determines the placeholder.
         */
        placeholder() {
            if (this.field.extraAttributes === undefined) {
                return this.field.name;
            }

            return this.field.extraAttributes.placeholder || this.field.name;
        }
    }
};
</script>
