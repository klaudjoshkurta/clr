<script setup lang="ts">
import { ref } from 'vue'

import { Button } from '@/components/ui/button'

import { ArrowDownUp, Copy } from 'lucide-vue-next'
import { hexToHsl } from './lib/utils'

const input = ref('#fcfcfc')
const output = ref('')

function convertValue() {
    output.value = hexToHsl(input.value)
}
</script>

<template>
    <div class="h-screen flex items-center justify-center">
        <div class="max-w-xl w-full mx-auto">
            <div class="bg-white border rounded-lg shadow-sm">
                <div class="relative">
                    <input
                        v-model="input"
                        type="text"
                        name="input"
                        id="input"
                        class="bg-transparent text-center p-6 py-10 text-xl w-full outline-0"
                        placeholder="Enter hex value"
                        @input="convertValue"
                    />
                    <div class="absolute top-0 inset-x-0 flex items-center justify-end gap-x-1 p-1">
                        <Button variant="ghost" size="icon">
                            <Copy />
                        </Button>
                    </div>
                </div>
                <div class="flex items-center h-9 relative">
                    <hr class="w-full" />
                    <div class="absolute inset-0 flex items-center justify-center">
                        <Button variant="outline" size="icon">
                            <ArrowDownUp />
                        </Button>
                    </div>
                </div>
                <div class="relative">
                    <input
                        v-model="output"
                        type="text"
                        name="output"
                        id="output"
                        class="bg-transparent text-center p-6 py-10 text-xl w-full outline-0"
                        placeholder="Enter hsl value"
                    />
                    <div
                        class="absolute bottom-0 inset-x-0 flex items-center justify-end gap-x-1 p-1"
                    >
                        <Button variant="ghost" size="icon">
                            <Copy />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
