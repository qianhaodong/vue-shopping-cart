<template>
	<div class="spec-dialog-wrap">
		<!-- 规格弹窗 -->
		<div
			class="pop-mask"
            :class="{ 'pop-mask-show': visible }"
		></div>
		<div class="specs-pop" :class="{ 'specs-pop-show': visible }">
			<div class="pop-content">
				<div class="pop-title">{{ goodsItem.f_name }}</div>
				<div class="specs-list">
					<template v-if="goodsItem.foodsSpecs.length">
						<div class="specs spec">
							<span class="spec-txt">规格</span>
							<div class="attrs-list">
                                <div
                                    v-for="(item, index) in goodsItem.foodsSpecs"
                                    :key="index"
                                    class="specs-item"
                                    @click="chooseSpecsItem"
                                >
                                    <!-- :class="{ 'active': goodsItem.specIndex === index }" -->
                                    {{ item.fs_name }}（{{ item.fs_weight }}）
                                </div>
							</div>
						</div>
					</template>
					<template v-if="goodsItem.foodsProperties.length">
						<div
							class="specs"
							v-for="(item, index) in goodsItem.foodsProperties"
							:key="index"
						>
							<span class="spec-txt">{{ item.fp_content }}</span>
							<div class="attrs-list">
                                <div
                                    v-for="(attrItem, attrIndex) in item.foodsValues"
                                    :key="attrIndex"
                                    class="specs-item"
                                    @click="chooseSpecsItem"
                                >
                                    <!-- :class="{ 'active': goodsItem.attrIndex[index] === attrIndex }" -->
                                    {{ attrItem.fv_content }}
                                </div>
							</div>
						</div>
					</template>
				</div>
				<div class="choose-specs">已选规格：{{ goodsItem.chooseSpecs }}</div>
				<div class="bottom-add">
					<div class="price">￥<span class="big">{{ goodsItem.choosePrice || '99' }}</span></div>
					<div
						class="btn"
						@click="addCartTap"
					>
                        <!-- :class="{ 'btn-show': goodsItem.attrIndex[goodsItem.attrIndex.length - 1] === 0 }" -->
						<img
							class="add-icon"
							src="@/assets/plus-icon.png"
						/>
						<span>加入购物车</span>
					</div>

					<!-- 属性索引列表最后一项存放商品数量 -->
					<!-- <number-QR
						quantity="{{goodsItem.attrIndex[goodsItem.attrIndex.length - 1]}}"
						@set-quantity="setQuantity"
						@add-animate="handleAddAnimate"
					></number-QR> -->
				</div>
			</div>
			<img
				class="pop-close"
				src="@/assets/swiper-close.png"
				@click="closePopTap"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		visible: {
			type: Boolean,
			default: false
		},
	},
	data() {
		return {
            goodsItem: {
                f_desc: "螃蟹，螃蟹，螃蟹！！",
                f_id: 48,
                f_image: "https://hdblog.online/wp-content/uploads/2022/04/food.jpg",
                f_logo: "https://hdblog.online/wp-content/uploads/2022/04/food.jpg",
                f_name: "螃蟹",
                f_state: 1,
                f_typeid: 29,
                foodsLabel: {
                    foods_labelId: 1,
                    foods_labelName: "主食"
                },
                foodsLabelId: 1,
                foodsProperties: [{
                    foodsValues: [{
                        fv_content: "多冰+",
                        fv_fpid: 295,
                        fv_id: 890
                    },
                    {
                        fv_content: "冰",
                        fv_fpid: 295,
                        fv_id: 891
                    },
                    {
                        fv_content: "去冰",
                        fv_fpid: 295,
                        fv_id: 892
                    }
                    ],
                    fp_content: "冷热",
                    fp_fid: 48,
                    fp_id: 295,
                    fp_state: 0
                },
                {
                    foodsValues: [{
                        fv_content: "麻辣",
                        fv_fpid: 296,
                        fv_id: 893
                    },
                    {
                        fv_content: "中辣",
                        fv_fpid: 296,
                        fv_id: 894
                    },
                    {
                        fv_content: "微辣",
                        fv_fpid: 296,
                        fv_id: 895
                    },
                    {
                        fv_content: "不辣",
                        fv_fpid: 296,
                        fv_id: 896
                    }
                    ],
                    fp_content: "辣度",
                    fp_fid: 48,
                    fp_id: 296,
                    fp_state: 0
                },
                {
                    foodsValues: [{
                        fv_content: "多糖",
                        fv_fpid: 297,
                        fv_id: 897
                    },
                    {
                        fv_content: "少糖",
                        fv_fpid: 297,
                        fv_id: 898
                    },
                    {
                        fv_content: "无糖",
                        fv_fpid: 297,
                        fv_id: 899
                    }
                    ],
                    fp_content: "糖度",
                    fp_fid: 48,
                    fp_id: 297,
                    fp_state: 0
                },
                {
                    foodsValues: [{
                        fv_content: "珍珠",
                        fv_fpid: 298,
                        fv_id: 900
                    },
                    {
                        fv_content: "椰果",
                        fv_fpid: 298,
                        fv_id: 901
                    },
                    {
                        fv_content: "红豆",
                        fv_fpid: 298,
                        fv_id: 902
                    },
                    {
                        fv_content: "波霸",
                        fv_fpid: 298,
                        fv_id: 903
                    }
                    ],
                    fp_content: "加料",
                    fp_fid: 48,
                    fp_id: 298,
                    fp_state: 0
                },
                {
                    foodsValues: [{
                        fv_content: "加冰",
                        fv_fpid: 299,
                        fv_id: 904
                    },
                    {
                        fv_content: "少冰",
                        fv_fpid: 299,
                        fv_id: 905
                    },
                    {
                        fv_content: "去冰",
                        fv_fpid: 299,
                        fv_id: 906
                    }
                    ],
                    fp_content: "温度",
                    fp_fid: 48,
                    fp_id: 299,
                    fp_state: 0
                },
                {
                    foodsValues: [{
                        fv_content: "很甜",
                        fv_fpid: 300,
                        fv_id: 907
                    },
                    {
                        fv_content: "甜",
                        fv_fpid: 300,
                        fv_id: 908
                    },
                    {
                        fv_content: "不甜",
                        fv_fpid: 300,
                        fv_id: 909
                    }
                    ],
                    fp_content: "甜度",
                    fp_fid: 48,
                    fp_id: 300,
                    fp_state: 0
                }
                ],
                foodsSpecs: [{
                    foods: {
                        f_desc: "",
                        f_id: 0,
                        f_image: "",
                        f_logo: "",
                        f_name: "",
                        f_state: 0,
                        f_typeid: 0,
                        foodsLabel: {},
                        foodsLabelId: 0,
                        foodsProperties: [],
                        foodsSpecs: [],
                        salesVolumeInMonth: 0
                    },
                    fs_fid: 48,
                    fs_id: 510,
                    fs_inventory: 0,
                    fs_name: "大份",
                    fs_price: "32",
                    fs_price_UsedCoupon: "0",
                    fs_saleVolume: 4,
                    fs_state: 0,
                    fs_weight: "2人份"
                },
                {
                    foods: {
                        f_desc: "",
                        f_id: 0,
                        f_image: "",
                        f_logo: "",
                        f_name: "",
                        f_state: 0,
                        f_typeid: 0,
                        foodsLabel: {},
                        foodsLabelId: 0,
                        foodsProperties: [],
                        foodsSpecs: [],
                        salesVolumeInMonth: 0
                    },
                    fs_fid: 48,
                    fs_id: 511,
                    fs_inventory: 0,
                    fs_name: "中份",
                    fs_price: "24",
                    fs_price_UsedCoupon: "0",
                    fs_saleVolume: 0,
                    fs_state: 0,
                    fs_weight: "1人份"
                },
                {
                    foods: {
                        f_desc: "",
                        f_id: 0,
                        f_image: "",
                        f_logo: "",
                        f_name: "",
                        f_state: 0,
                        f_typeid: 0,
                        foodsLabel: {},
                        foodsLabelId: 0,
                        foodsProperties: [],
                        foodsSpecs: [],
                        salesVolumeInMonth: 0
                    },
                    fs_fid: 48,
                    fs_id: 512,
                    fs_inventory: 0,
                    fs_name: "小份",
                    fs_price: "16",
                    fs_price_UsedCoupon: "0",
                    fs_saleVolume: 6,
                    fs_state: 0,
                    fs_weight: "1人份"
                }
                ],
                salesVolumeInMonth: 11
            }
        }
	},
	methods: {
        chooseSpecsItem() {},
        addCartTap() {},
        closePopTap() {
            this.$emit('update:visible', false)
        },
    }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
