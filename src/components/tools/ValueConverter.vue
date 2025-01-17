<script setup lang="ts">
import { ChevronsUpDown } from 'lucide-vue-next'
import { Button } from '../ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { ref } from 'vue'

const valueA = ref<string>('')
</script>

<template>
    <div class="border rounded shadow grid grid-cols-2 divide-x">
        <div class="p-3">
            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <Button variant="ghost" size="xs" class="text-muted-foreground gap-x-4">
                        hex
                        <ChevronsUpDown :size="12" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuRadioGroup v-model="valueA"> </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div class="p-3">
            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <Button variant="ghost" size="xs" class="text-muted-foreground gap-x-4">
                        hsl
                        <ChevronsUpDown :size="12" />
                    </Button>
                </DropdownMenuTrigger>
            </DropdownMenu>
        </div>
    </div>
</template>
