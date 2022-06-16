<template>
    <div class="cart-wrap border-top-1px">
        <div class="cart-box">
            <div class="cart-icon">
                <img src="@/assets/cart-icon.png" />
            </div>
            <div class="cart-info">
                <div class="cart-price">￥<span>99</span></div>
                <div class="cart-tips">另需配送费￥2元</div>
            </div>
        </div>
        <div class="cart-btn">去结算</div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
