<template>
<div>
    <Navbar/>
    <router-view></router-view>
</div>
</template>

<script>
import Navbar from '@/components/navbar_app'

export default {
    
    name: 'Navbar_APP',
    components: { Navbar },
        
    }
</script>
