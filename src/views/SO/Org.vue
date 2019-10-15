<template>
<div>
    <Navbar/>
    <router-view></router-view>
</div>
</template>

<script>
import Navbar from '@/components/navbar_so'

export default {
    
    name: 'Navbar_SO',
    components: { Navbar },
        
    }
</script>
