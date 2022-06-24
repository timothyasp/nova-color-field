<template>
    <PanelItem :field="field">
        <template #value>
            <div class="inline-flex items-center">
        	    <div class="rounded mr-2 border" v-bind:style="{ backgroundColor: field.value, width: '20px', height: '20px' }"></div>
        	    <div>{{ field.value }}</div>
    	    </div>	
        </template>
    </PanelItem>
</template>

<script>
export default {
    props: ['resource', 'resourceName', 'resourceId', 'field'],
}
</script>
