<template>
    <div 
        class="fixed inset-0"
        id="gradient"
        :style="{
            'background': background
        }"
    >   
    </div>
</template>

<script>


export default {
    data() {
        return {
            colors: [
                [62,35,255],
                [60,255,60],
                [255,35,98],
                [45,175,230],
                [255,0,255],
                [255,128,0]
            ],
            step: 0,
            colorIndices: [0,1,2,3],
            gradientSpeed:.0015,
            background: '',
        }
    },
    mounted() {
        setInterval(this.updateGradient,10);
    },
    methods: {
        updateGradient() {
            var c0_0 = this.colors[this.colorIndices[0]];
            var c0_1 = this.colors[this.colorIndices[1]];
            var c1_0 = this.colors[this.colorIndices[2]];
            var c1_1 = this.colors[this.colorIndices[3]];

            var istep = 1 - this.step;
            var r1 = Math.round(istep * c0_0[0] + this.step * c0_1[0]);
            var g1 = Math.round(istep * c0_0[1] + this.step * c0_1[1]);
            var b1 = Math.round(istep * c0_0[2] + this.step * c0_1[2]);
            var color1 = "#"+((r1 << 16) | (g1 << 8) | b1).toString(16);

            var r2 = Math.round(istep * c1_0[0] + this.step * c1_1[0]);
            var g2 = Math.round(istep * c1_0[1] + this.step * c1_1[1]);
            var b2 = Math.round(istep * c1_0[2] + this.step * c1_1[2]);
            var color2 = "#"+((r2 << 16) | (g2 << 8) | b2).toString(16);

            
            this.background = "-webkit-radial-gradient(center, circle cover, "+color1+","+color2+")";
            
            this.step += this.gradientSpeed;
            if ( this.step >= 1 ) {
                this.step %= 1;
                this.colorIndices[0] = this.colorIndices[1];
                this.colorIndices[2] = this.colorIndices[3];
                
                //pick two new target color indices
                //do not pick the same as the current one
                this.colorIndices[1] = ( this.colorIndices[1] + Math.floor( 1 + Math.random() * (this.colors.length - 1))) % this.colors.length;
                this.colorIndices[3] = ( this.colorIndices[3] + Math.floor( 1 + Math.random() * (this.colors.length - 1))) % this.colors.length;
                
            }
        }
    }
};

</script>

<style scoped>
    .example {
    color: red;
    }
</style>
