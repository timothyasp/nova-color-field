<template>

    <div class="inline-flex items-center">

        <div class="rounded mr-2" :style="{ backgroundColor: field.value, width: '20px', height: '20px' }"/>

        <div>{{ field.value }}</div>

    </div>

</template>

<script>

export default {
    props: [ 'resourceName', 'field' ]
}

</script>
