<template>
    <panel-item :field="field">
        <template slot="value">
            <div class="inline-flex items-center">
        	    <div class="rounded mr-2" v-bind:style="{ backgroundColor: field.value, width: '20px', height: '20px' }"></div>
        	    <div>{{ field.value }}</div>
    	    </div>	
        </template>
    </panel-item>
</template>

<script>
export default {
    props: ['resource', 'resourceName', 'resourceId', 'field'],
}
</script>
