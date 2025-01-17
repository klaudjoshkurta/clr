<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { PaintBucket } from 'lucide-vue-next'
</script>

<template>
    <header class="flex items-center gap-4 p-2">
        <Button variant="ghost" size="icon" class="text-gray-900">
            <PaintBucket :stroke-width="1.5" />
        </Button>
    </header>
</template>
