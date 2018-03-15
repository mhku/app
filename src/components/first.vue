// eslint-disable-next-line
/*eslint-disable*/
<template>
  <div>
    <div id="container">
      <div class="c1" v-for="(tmp,index) in newArrivalItems" :key="index">
        <p>价格:{{tmp.price}}</p>
        <h1>title {{tmp.title}}</h1>
      </div>
      <!--<div class="c2">-->
        <!--<p>价格</p>-->
        <!--<h1>title</h1>-->
      <!--</div>-->
      <!--<div class="c3">-->
        <!--<p>价格</p>-->
        <!--<h1>title</h1>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
  /*eslint-disable*/
export default {
  name: 'first',
  data () {
    return {
//      carouselItems:[],
      newArrivalItems:[]
//      recommendedItems:[],
//      topSaleItems:[]
    }
  },
//  ./static/product.json
  mounted () {
      this.$axios.get('./static/product.json').then((response)=>{
          console.log(response);
//          this.carouselItems=response.data.carouselItems;
          this.newArrivalItems=response.data.newArrivalItems;
//          this.recommendedItems=response.data.recommendedItems;
//          this.topSaleItems=response.data.topSaleItems;
//          console.log(this.carouselItems);
          console.log(this.newArrivalItems);
//          console.log(this.recommendedItems);
//          console.log(this.topSaleItems );
      })
  }
}
//http://localhost:8080/static/home.json esponse
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #container{
    border:2px solid #000;
    /*变为弹性布局的容器*/
    display:flex;
    /*指定主轴及其排列方向*/
    flex-direction:row;
    /*指定换行方式*/
    flex-wrap:wrap;
    /*指定在主轴的对齐方式*/
    justify-content:space-between;
  }
  .c1{
    width:220px;
    height:200px;
  }
  /*.c1{background:red;}*/
  /*.c2{background:green;}*/
  /*.c3{background:blue;}*/
</style>
