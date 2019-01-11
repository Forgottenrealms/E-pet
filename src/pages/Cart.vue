<template>
    <div class="cart">
        <!-- 当购物车为空的时候 -->
        <div class="empty">
            <div class="empty-header">
                <p>购物车</p>
            </div>
            <div class="picture"></div>
            <h3>你的购物车空空如也</h3>
            <div class="go-to-buy">随便逛逛</div>
        </div>

        <!-- 当购物车不为空的时候 -->
        <div class="content">
            <div class="content-header">
                <span class="go-back">&lt;</span>
                <div>购物车</div>
                <span class="edit">编辑</span>
            </div>
            <div class="wrap">
                <input type="checkbox">
                E宠西部中央仓
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.cart{
    width: 100%;
    height:100%;
    background-color: white;
    position: relative;
    .empty{
        // display: none;
        .empty-header{
            width: 94.81vw;
            height: 13.7vw;
            margin: 0 auto;
            border-bottom: 1px solid #e5e5e5;
            p{
                text-align: center;
                line-height: 13.7vw;
                font-size: 3.88vw;
            }
        }
        .picture{
            width: 48.57vw;
            height: 35.18vw;
            background: url("../assets/empty.jpg") no-repeat;
            background-size: cover;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
        }
        h3{
            color: #666666;
            font-size: 3.70vw;
            text-align: center;
            margin-top: 90.88vw;
        }
        .go-to-buy{
            width: 30.92vw;
            height: 10vw;
            line-height: 10vw;
            text-align: center;
            font-size: 2.96vw;
            color: red;
            border: 1px solid red;
            border-radius: 10vw;
            margin: 6vw auto;
        }
    }
    // 当购物车不为空的时候
    .content{
        display: none;
        .content-header{
            width: 94.81vw;
            height: 13.7vw;
            margin: 0 auto;
            position: relative;
            .go-back{
                float: left;
                line-height: 13.7vw;
            }
            div{  
                display: inline-block;
                margin-left: 40%;
                line-height: 13.7vw;
                font-size: 3.88vw;
            }
            .edit{
                float: right;
                line-height: 13.7vw;
            }
        }
        .wrap{
            width: 94.81vw;
            height: 9.25vw;
            line-height: 9.25vw;
            font-size: 3.51vw;
            border-top: 1px solid #e5e5e5;
            margin: 0 auto;
            input{
                margin: auto 0;
                width: 6.11vw;
                height: 6.11vw;
                border-radius: 50%;
            }
        }
    }
}
    
</style>
