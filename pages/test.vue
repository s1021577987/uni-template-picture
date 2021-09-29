<template>
	<view class="page">
		<swiper class="swiper" :style="{height:screenHeight + 'px'}">
			<swiper-item>
				<view class="swiper-item uni-bg-red">A</view>
			</swiper-item>
			<swiper-item>
				<image class="detail-image" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg" mode="widthFix"></image>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				screenHeight: 0,
			}
		},
		
		onLoad() {
			let sysInfo = uni.getSystemInfoSync();
			console.log(sysInfo)
			this.screenHeight = sysInfo.windowHeight;
		}
	}
</script>

<style>
	
	.page {
		flex: 1;
		width: 100%;
		/* min-height: 100vh; */
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	swiper-item {
		display: flex;
		align-items: center;
	}
	
	.uni-bg-red{
		background:#F76260; color:#FFF;
		height: 300rpx;
	}
	
	.swiper {
		width: 100%;
	}
	
	.detail-image {
		width: 100%;
		
	}
</style>
