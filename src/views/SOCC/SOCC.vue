<template>
<div>
    <Navbar/>
    <router-view></router-view>
</div>
</template>

<script>
import Navbar from '@/components/navbar_socc'

export default {
    
    name: 'Navbar_SOCC',
    components: { Navbar },
        
    }
</script>
