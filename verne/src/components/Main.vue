<script setup>

import { ToolboxItems } from '../meta/ToolboxItems'

</script>


<template>
  <h1>Verne个人工具箱</h1>

  <p>在这个工具箱下面，主要整理一下个人学习方面整理出来的一些小工具，偶尔会用得
    上的话就还是自己写的会比较顺手。</p>

  <ul v-for="item in ToolboxItems">
    <li>
      <a v-if="item.href" href="{{ item.href }}">{{item.name}}</a>
      <span v-if="!item.href">{{ item.name }}</span>
    </li>
  </ul>

</template>
