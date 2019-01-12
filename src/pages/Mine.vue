<template>
    <div class="mine">
        <div class="mine-header">
            <div class="header-icon">
                <span class="icon-setUp" v-html="icon.setUp"></span>
                <span class="icon-msg" v-html="icon.msg"></span>
            </div>
            <div class="person">
                <div class="picture"><img src=""/></div>
                <p>
                    <router-link to="/login" tag="a">登录</router-link> 
                    <span>|</span>
                    <router-link to="/register" tag="a">注册</router-link> 
                </p>
                
            </div>
            <ul class="header-bottom">
                    <li>0元转盘</li>
                    <li>0元体验</li>
                    <li>医疗服务</li>
                    <li>俱乐部&nbsp;></li>
                </ul>
        </div>
        <!-- 我的订单 -->
        <div class="order">
            <h3>我的订单</h3>
            <h6>查看订单></h6>

            <ul>
                <li>
                    <span v-html="icon.toPay"></span>
                    <span>待付款</span>
                </li>
                <li>
                    <span v-html="icon.noRece"></span>
                    <span>待收货</span>
                </li>
                <li>
                    <span v-html="icon.toEval"></span>
                    <span>待评价</span>
                </li>
                <li>
                    <span v-html="icon.exchange"></span>
                    <span>退换记录</span>
                </li>
                <li>
                    <span v-html="icon.interna"></span>
                    <span>国际订单</span>
                </li>
            </ul>
        </div>

        <!-- 我的钱包 -->
        <div class="wallet">
            <h3>我的钱包</h3>
            <ul>
                <li>
                    <span>0</span>
                    <span>优惠券</span>
                </li>
                <li>
                    <span>0</span>
                    <span>E宠币</span>
                </li>
                <li>
                    <span>0.00</span>
                    <span>余额</span>
                </li>
                <li>
                    <span>0.00</span>
                    <span>红包</span>
                </li>
            </ul>
        </div>
        <!-- 我的服务 -->
        <div class="service">
            <h3>我的服务</h3>
            <ul>
                <li v-for="item in service" :key="item.name">
                    <span class="service-icon" v-html="item.meta.icon"></span>
                    <span>{{item.meta.title}}</span>
                </li>
                <li class="itemEmpty" v-for="item in service.length-2" :key="item.name"></li>
            </ul>
            <!-- <ul>
                <li v-for="item in service" :key="item.name">{{item.meta.title}}</li>
            </ul> -->
        </div>
    </div>
</template>


<script>
export default { 
    data() {
        return {
            icon:{
                setUp: '&#xe68e;',
                msg:'&#xe612;',
                toPay:"&#xe602;",
                noRece:"&#xe635;",
                toEval:"&#xe60a;",
                exchange:"&#xe64e;",
                interna:"&#xe61a;"
                },
            service: [
                {
                    name: 'tel',
                    meta: {
                        title: '联系客服',
                        icon:'&#xe609;'
                    }
                },{
                    name: 'willSell',
                    meta: {
                        title: '潮品预售',
                        icon:'&#xe600;'
                    }
                },{
                    name: 'groupBuy',
                    meta: {
                        title: '我的团购',
                        icon:'&#xe629;'
                    }
                },{
                    name: 'collect',
                    meta: {
                        title: '我的收藏',
                        icon:'&#xe614;'
                    }
                },{
                    name: 'gift',
                    meta: {
                        title: '随手送礼',
                        icon:'&#xe656;'
                    }
                },{
                    name: 'exchange',
                    meta: {
                        title: '我的兑换',
                        icon:'&#xe603;'
                    }
                },{
                    name: 'follow',
                    meta: {
                        title: '我的关注',
                        icon:'&#xe618;'
                    }
                },{
                    name: 'alliance',
                    meta: {
                        title: '萌爪联盟',
                        icon:'&#xe647;'
                    }
                },{
                    name: 'donation',
                    meta: {
                        title: '我的捐赠',
                        icon:'&#xe601;'
                    }
                }
            ],
            
        }
    },
}
</script>

<style lang="scss" scoped>
@import "//at.alicdn.com/t/font_1005854_gswlqu9npj4.css";
@font-face {
  font-family: 'iconfont';  /* project id 1005854 */
  src: url('//at.alicdn.com/t/font_1005854_gswlqu9npj4.eot');
  src: url('//at.alicdn.com/t/font_1005854_gswlqu9npj4.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1005854_gswlqu9npj4.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1005854_gswlqu9npj4.woff') format('woff'),
  url('//at.alicdn.com/t/font_1005854_gswlqu9npj4.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1005854_gswlqu9npj4.svg#iconfont') format('svg');
}

.mine{
    width: 100vw;
    height: 100%;

    .mine-header{
        width: 100%;
        height: 63.4vw;
        background: url(../assets/mineImg/mine-bg.jpg) repeat-y;
        position: relative;

        .header-icon{
            width: 100%;
            height: 15.18vw;
            box-sizing: border-box;
            padding: 4.16vw;
            font-family: 'iconfont';
            color: white;
            font-size: 5.77vw;
            
            .icon-msg{
            float: right;
            }
        }

        .person{
            width: 100%;
            height: 35.3vw;
            position: relative;

            .picture{
            width: 16.66vw;
            height: 16.66vw;
            border-radius: 50%;
            background-color: #fff;
            position: absolute;
            top:10.55vw;
            left: 2.7vw;
            }
            
            p{
                position: absolute;
                top: 17vw;
                left: 23vw;

                span{
                    color: white;
                    margin: 0 2vw;
                }

                a{
                color:white;
                font-size: 4.8vw;
                text-decoration: none;
                }
            } 
        }

        .header-bottom{
            width:  94.4vw;
            height: 11.48vw;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            position: absolute;
            bottom: 0;
            left: 3vw;
            background: #252525;

            li{
                width: 23vw;
                height: 11.48vw;
                color: #e3bb74;
                float: left;
                line-height: 11.48vw;
                font-size: 3.4vw;
                text-align: right;
            }
            :nth-child(1){
                background: url(../assets/mineImg/a.jpg) no-repeat;
                background-size: 5.5vw;
                background-position: 4vw 2.9vw;
            }
            :nth-child(2){
                background: url(../assets/mineImg/b.jpg) no-repeat;
                background-size: 5.5vw;
                background-position: 4vw 2.9vw;
            }
            :nth-child(3){
                background: url(../assets/mineImg/c.jpg) no-repeat;
                background-size: 5.5vw;
                background-position: 2.8vw 2.9vw;
            }
            :nth-child(4){
                width: 25vw;
                background: url(../assets/mineImg/d.jpg) no-repeat;
                background-size: 9vw;
                background-position: 3vw 4.2vw;
                font-size: 2.4vw;
                line-height: 13vw;
            }
        }
    }

    // 我的订单
    .order{
        width: 94.8vw;
        height: 46.8vw;
        border: 1px solid #fff;
        border-radius: 20px;
        background: #fff;
        margin: 20px auto;
        position: relative;

        h3{
            line-height: 16.8vw;
            position: absolute;
            left: 5.7vw;
        }
        h6{
            line-height: 16.8vw;
            font-size: 12px;
            font-weight: normal;
            position: absolute;
            right: 5.7vw;
        }
        ul{
            position:absolute;
            bottom: 10vw;
            width: 100%;
            height: 12vw;
            display: flex;
            justify-content: space-around;
            li{
                font-family: 'iconfont';
                font-size: 2.77vw;
                color: #333333;
                display: flex;
                text-align: center;
                flex-direction: column;
                justify-content: space-between;
                :nth-child(1) {
                    font-size: 5.77vw;
                }
            }
            
        }
    }
    // 我的钱包
    .wallet{
        width: 94.8vw;
        height: 46.8vw;
        border: 1px solid #fff;
        border-radius: 20px;
        background: #fff;
        margin: 20px auto;
        position: relative;

        h3{
            line-height: 16.8vw;
            position: absolute;
            left: 5.7vw;
        }

        ul{
            position:absolute;
            bottom: 9.4vw;
            width: 100%;
            height: 12vw;
            display: flex;
            justify-content: space-around;

            li{
                font-size: 2.77vw;
                color: #333333;
                display: flex;
                text-align: center;
                flex-direction: column;
                justify-content: space-between;

                :nth-child(1){
                color: red;
                }
            }
            
        }
    }
    // 我的服务
    .service{
        width: 94.8vw;
        height: 86.12vw;
        border: 1px solid #fff;
        border-radius: 20px;
        background: #fff;
        margin: 20px auto;
        position: relative;

        h3{
            line-height: 16.8vw;
            position: absolute;
            left: 5.7vw;
        }

        ul{
            position:absolute;
            top: 17vw;
            width: 100%;
            height: 20vw;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;

            li{
                width: 25%;
                height: 20vw;
                color: #333333;
                font-family: 'iconfont';
                font-size: 2.77vw;
                display: flex;
                text-align: center;
                flex-direction: column;
                justify-content: flex-end;

                :nth-child(1){
                    margin-bottom: 4vw;
                    font-size: 5.77vw;
                }
            }
            :nth-last-child(){
                align-items: start;
            }
            li:nth-child(1) .service-icon{
                color:#d687ab;
            }
            li:nth-child(2) .service-icon{
                color:#9de7d5;
            }
            li:nth-child(3) .service-icon{
                color:#ff5777;
            }
            li:nth-child(4) .service-icon{
                color:#e36894;
            }
            li:nth-child(5) .service-icon{
                color:#fd8275;
            }
            li:nth-child(6) .service-icon{
                color:#ffd300;
            }
            li:nth-child(7) .service-icon{
                color:#f08887;
            }
            li:nth-child(8) .service-icon{
                color:#fb5e02;
            }
            li:nth-child(9) .service-icon{
                color:#40d39b;
            }
            .itemEmpty{
                width: 25%;
                height: 0;
            }
            
        }
        :nth-last-child(){
                    justify-content: flex-start;
                }
            
    }
}

</style>
