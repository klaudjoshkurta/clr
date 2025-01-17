<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import ValueConverter from '@/components/tools/ValueConverter.vue'
</script>

<template>
    <div class="h-screen overflow-hidden flex flex-col">
        <AppHeader />
        <main class="flex-1 flex items-center justify-center">
            <div class="max-w-2xl w-full mx-auto">
                <ValueConverter />
            </div>
        </main>
    </div>
</template>
