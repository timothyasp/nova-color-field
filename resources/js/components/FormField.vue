<template>

    <default-field :field="field">

        <template slot="field">

            <div class="inline-flex mb-2">

                <div class="color-input rounded-l-lg border-r-0 h-100 border border-60 color-input-value"
                     :style="{ backgroundColor: value, width: '36px' }"/>

                <input :id="field.name" type="text"
                       class="w-25 form-control form-input form-input-bordered color-input rounded-l-none"
                       :class="errorClasses"
                       :placeholder="field.name"
                       v-model="value"/>

            </div>

            <component :is="component"
                       :id="field.name"
                       :class="errorClasses"
                       :palette="palette"
                       v-model="value"
                       @input="handleChange"/>

            <p v-if="hasError" class="my-2 text-danger">
                {{ firstError }}
            </p>

        </template>

    </default-field>

</template>

<script>

import { FormField, HandlesValidationErrors } from 'laravel-nova'

export default {
    mixins: [ FormField, HandlesValidationErrors ],

    props: [ 'resourceName', 'resourceId', 'field' ],

    methods: {
        /**
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            this.value = this.field.value || ''
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.field.attribute, this.value || '')
        },

        /**
         * Update the field's internal value.
         */
        handleChange(value) {

            if (value.a >= 1) {

                this.value = value.hex

            } else {

                if (this.field.hex8) {

                    this.value = value.hex8

                } else {

                    const { r, g, b, a } = value.rgba

                    this.value = `rgba(${ r }, ${ g }, ${ b }, ${ a })`

                }

            }

        }
    },

    computed: {
        /**
         * Determines which color picker component to use
         */
        component() {
            return this.field.pickerType + '-picker'
        },
        /**
         * Set color palette.
         */
        palette() {
            return this.field.palette || undefined
        }
    }
}

</script>
