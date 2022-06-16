<template>
    <div class="goods-list-wrap">
        <div class="scroll-nav-wrap">
            <cube-scroll-nav
                :side="true"
                :data="goods"
                :current="current"
                @change="changeHandler"
            >
                <cube-scroll-nav-panel
                    v-for="(item, index) in goods"
                    :key="index"
                    :label="item.name"
                    :title="item.name"
                >
                    <ul>
                        <li
                            class="food-item"
                            v-for="(food, index) in item.foods"
                            :key="index"
                            @click="navToDetails"
                        >
                            <img class="food-item-icon" :src="food.icon" />
                            <div class="food-item-info">
                                <div class="food-item-name">{{ food.name }}</div>
                                <div class="food-item-desc" v-if="food.description">{{ food.description }}</div>
                                <div class="food-item-sell-count">月售{{ food.sellCount }}</div>
                                <div class="food-item-operate">
                                    <div class="food-item-price">￥<span>{{ food.price }}</span></div>
                                    <div class="food-item-add-btn" @click.stop="specDialogvisible = true">
                                        <span>选规格</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </cube-scroll-nav-panel>
            </cube-scroll-nav>
        </div>

        <Cart />
        <SpecDialog :visible.sync="specDialogvisible" />
    </div>
</template>

<script>
import goodsData from '@/utils/data.json'
import Cart from '@/components/Cart'
import SpecDialog from '@/components/SpecDialog'

const { goods } = goodsData

export default {
    components: {
        Cart,
        SpecDialog
    },
    data() {
        return {
            goods,
            current: goods[1].name,
            specDialogvisible: false
        }
    },
    methods: {
        navToDetails() {
            this.$router.push({ path: '/detail' })
        },

        changeHandler(label) {
            console.log('label :>> ', label);
        },
    },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
