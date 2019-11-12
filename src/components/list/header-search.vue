<template>
  <div class="page">
    <div class="header-search" placeholder="'搜索明星、演出、赛事、场馆'" input-disabled="true">
        <div class="site-dropdown">
            <i class="iconfont">&#xe622;
                </i>
            <div class="cur-site">北京</div> 
        </div>

        <div class="input-wrapper">
            <div class="search-input">
                    <i class="iconfont">&#xe61d;</i>
                <form action="">

                    <input type="search" class="search-box-input" placeholder="搜索明星、演出、赛事、场馆">
                </form>
            </div>
        </div>
       
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSearch"
};
</script>

<style lang="scss">

        .header-search {
            width: 100%;
            background: #fff;
            height: 4.4rem;
            -ms-flex-align: center;
            align-items: center;
            display: -ms-flexbox;
            display: flex;
        }

        .header-search .site-dropdown {
            font-size: 15px;
            font-weight: 700;
            height: 100%;
            color: #323038;
            padding-left: 1.8rem;
            padding-right: 1.25rem;
        }

        .header-search .site-dropdown .cur-site {
            line-height: 4.4rem;
            padding-left: 1.8rem;
            background-repeat: no-repeat;
            background-position: left;
            background-size: 14px;
            font-size: 15px;
            font-weight: 700;
        }

        .header-search .input-wrapper {
            width: 100%;
            -ms-flex: 1;
            flex: 1;
        }

        .header-search .search-input {
            z-index: 100;
            height: 2.75rem;
            line-height: 2.75rem;
            color: #fff;
            border-radius: 1.4rem;
            background-color: #f4f4f5;
            display: -ms-flexbox;
            display: flex;
            position: relative;
            width: 100%;
        }

        .search-icon {
            display: inline-block;
            background-size: 14px;
            width: 2.5rem;
            height: 2.75rem;
            background-repeat: no-repeat;
            background-position: right;
        }

        .header-search .search-input {
            z-index: 100;
            height: 2.75rem;
            line-height: 2.75rem;
            color: #fff;
            border-radius: 1.4rem;
            background-color: #f4f4f5;
            display: -ms-flexbox;
            display: flex;
            position: relative;
            width: 100%;
        }

        .search-icon {
            display: inline-block;
            background-size: 14px;
            width: 2.5rem;
            height: 2.75rem;
            background-repeat: no-repeat;
            background-position: right;
        }

        .header-search .search-input form {
            width: 100%;
            height: 2.75rem;
            position: absolute;
            left: 0;
            top: 0;
        }

        .header-search .search-input .search-box-input {
            z-index: 1000;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 2.75rem;
            border: none;
            color: #333;
            background: 0 0;
            padding: 5px;
            padding-left: 3rem;
            font-size: 13px;
        }

</style>