<template>
    <div>
        <div :class="nameOfClass" role="alert">
            {{ text }}
        </div>    
    </div>
</template>

<script>
export default {
    props: ["className", "text"],
    computed: {
        nameOfClass() {
            var className = '';
            switch (this.className) {
                case 'danger':
                    className = 'alert alert-danger';       
                    break;

                case 'success':
                    className = 'alert alert-success';       
                    break;

                case 'warning':
                    className = 'alert alert-warning';       
                    break;
            
                default:
                    break;
            }

            return className;
        }
    }
}
</script>