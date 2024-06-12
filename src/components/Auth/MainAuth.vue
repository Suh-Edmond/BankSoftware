<template>
    <div class="bg-gray-200 main">
        <div class="relative">
            <div class="bg-white p-3 shadow-md text-blue-500 font-serif font-bold text-lg">
                Learning VUE 3
            </div>
        </div>
        <div>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped>
.main {
    height: 100vh;
    width: 100vw;
}
</style>