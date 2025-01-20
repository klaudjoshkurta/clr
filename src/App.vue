<script setup lang="ts">
import { computed, h, ref } from 'vue'

import { Button } from '@/components/ui/button'

import { Copy } from 'lucide-vue-next'
import { hexToHsl } from './lib/utils'

const input = ref('#FFFFFF')
const output = ref('')

function convertValue() {
    output.value = hexToHsl(input.value)
}
</script>

<template>
    <div class="h-screen flex items-center justify-center">
        <div class="max-w-xl w-full mx-auto grid grid-cols-3 gap-4">
            <!-- Input & Output -->
            <div class="bg-white border rounded-lg shadow-sm col-span-2">
                <div class="relative">
                    <input
                        v-model="input"
                        type="text"
                        name="input"
                        id="input"
                        class="bg-transparent text-center p-6 py-6 text-xl w-full outline-0"
                        placeholder="Enter hex value"
                        @input="convertValue"
                    />
                    <div class="absolute top-0 inset-x-0 flex items-center justify-end gap-x-1 p-1">
                        <Button variant="ghost" size="icon">
                            <Copy />
                        </Button>
                    </div>
                </div>
                <hr />
                <div class="relative">
                    <input
                        v-model="output"
                        type="text"
                        name="output"
                        id="output"
                        class="bg-transparent text-center p-6 py-6 text-xl w-full outline-0"
                        placeholder="Enter hsl value"
                    />
                    <div class="absolute top-0 inset-x-0 flex items-center justify-end gap-x-1 p-1">
                        <Button variant="ghost" size="icon">
                            <Copy />
                        </Button>
                    </div>
                </div>
            </div>
            <!-- Color Preview -->
            <div
                class="flex items-center relative rounded-lg shadow-sm border bg-white col-span-1 p-0.5"
            >
                <div class="size-full rounded-[6px]" :style="{ backgroundColor: output }"></div>
            </div>
        </div>
    </div>
</template>
