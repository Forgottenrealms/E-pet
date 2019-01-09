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
                    <a href="">登录</a>
                    <span>|</span>
                    <a href="">注册</a>
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
                    <span v-html="icon.toPay"></span><br/>
                    <span>待付款</span>
                    <span v-html="icon.noRece"></span><br/>
                    <span>待收货</span>
                    <span v-html="icon.toEval"></span><br/>
                    <span>待评价</span>
                    <span v-html="icon.exchange"></span><br/>
                    <span>退换记录</span>
                    <span v-html="icon.interna"></span><br/>
                    <span>国际订单</span>
                </li>
            </ul>
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
           
        }
    }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'iconfont';  /* project id 1005854 */
  src: url('//at.alicdn.com/t/font_1005854_o4hb8q79evq.eot');
  src: url('//at.alicdn.com/t/font_1005854_o4hb8q79evq.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1005854_o4hb8q79evq.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1005854_o4hb8q79evq.woff') format('woff'),
  url('//at.alicdn.com/t/font_1005854_o4hb8q79evq.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1005854_o4hb8q79evq.svg#iconfont') format('svg');
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
            font-size: 26px;
            
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
                background-position: 2vw 4.2vw;
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
            li{
                font-family: 'iconfont';
                float: left;
                font-size: 14px;
                span{
                    
                }
            }
        }
    }
}
</style>
