
# 🧭指令大全

这是玩家指令大全

`[]`表示可选参数，`<>`表示必选参数

## 传送

### 玩家间传送

- `/tpa <在线玩家名>`&nbsp;&nbsp;向指定的玩家发送传送请求

- `/tpahere <在线玩家名>`&nbsp;&nbsp;请求指定玩家传送到你身边

- `/tpaccept <玩家名>`&nbsp;&nbsp;接受传送请求（不常用，可以在聊天栏直接点击同意传送）

- `/tpadeny <玩家名>`&nbsp;&nbsp;拒绝传送请求（不常用，可以在聊天栏直接点击拒绝传送）

### 随机传送

- `/rtp`&nbsp;&nbsp;随机传送，仅限在主世界使用，每10分钟可使用一次，范围约6W格以内

### HOME（家）

每个玩家有一个免费的家，如果有需要，可以花费200电池升级上限

- `/home set`&nbsp;&nbsp;设置默认家为你当前所在位置，需要花费6电池

- `/home go`&nbsp;&nbsp;传送到你设置的默认家，需要花费1电池或者4末影珍珠

- `/home set [家的名称]`&nbsp;&nbsp;在你所在的位置设置一个家，可以指定家的名字，需要花费6电池

- `/home go [家的名称]`&nbsp;&nbsp;传送到你设置的家，需要花费1电池或者4末影珍珠

- `/home buy`&nbsp;&nbsp;升级家上限，升级一次需要200电池，需要玩家点击确认升级

- `/home remove [家的名称]`&nbsp;&nbsp;移除你设置的家


### 公共传送点

- `/spawn <公共传送点名称>`&nbsp;&nbsp;传送到指定的公共传送点，需要花费1电池或者4末影珍珠

### 特殊传送点

- `/spawn world`&nbsp;&nbsp;传送到你所在世界的出生点，需要花费1电池

- `/spawn death`&nbsp;&nbsp;传送到你最新死亡的位置，需要花费10电池

## 聊天

- `/me <action>`&nbsp;&nbsp;表示自己在干嘛，会全服播报

### 私信

- `/tell <在线玩家名> <消息>...`&nbsp;&nbsp;向指定的玩家发送私信消息

- `/t <在线玩家名> <消息>...`&nbsp;&nbsp;同上

- `/msg <在线玩家名> <消息>...`&nbsp;&nbsp;同上

- `/m <在线玩家名> <消息>...`&nbsp;&nbsp;同上

- `/reply <消息>...`&nbsp;&nbsp;快速回复最近的私信消息或者向最近聊天的玩家发送私信消息

- `/r <消息>...`&nbsp;&nbsp;同上

### 大喇叭

- `/shout <消息>...`&nbsp;&nbsp;醒目的大喇叭消息！一次5电池

### QQ群消息

- `/qgcs toggle`&nbsp;&nbsp;切换是否接收来自QQ群的同步消息

- 发送公屏消息时，前面加上`#`号可以由QQ机器人将消息同步到QQ群中

## 赞助

- `/zanzhu`&nbsp;&nbsp;显示赞助服务器的页面的链接，可点击打开，同时显示自己的进服次数和在线时长

- `/afdian`&nbsp;&nbsp;通过爱发电赞助服务器，每发电1元赠送10电池，电池实时到账，没有绑定会提示先进行绑定，可按提示进行绑定

## 电池

- `/coins query`&nbsp;&nbsp;查询自己的电池，同时显示在排行榜上排第几、平均每个玩家多少电池

- `/coins top [页码]`&nbsp;&nbsp;查询电池排行榜（实时）

- `/coins detail [页码]`&nbsp;&nbsp;查询自己的电池变动明细

## GSIT动作指令

进入某个动作后，可按潜行键恢复，潜行键就是左边的`Shift`键

- `/sit`&nbsp;&nbsp;坐下，空手右键台阶、楼梯等也可以坐下，坐下后不受其它玩家攻击伤害

- `/lay`&nbsp;&nbsp;躺下，没有床的话可以直接躺在地上睡觉

- `/crawl`&nbsp;&nbsp;爬行，钻狗洞？

- `/bellyflop`&nbsp;&nbsp;趴下

- `/spin`&nbsp;&nbsp;旋转

- `/gsit playertoggle [on/off]`&nbsp;&nbsp;切换是否允许其它玩家坐在自己头上（或自己坐其它玩家头上）。空手对着其它玩家右键，可以坐在他头上并跟随运动

## CoreProtect防熊查询

简单用法，没有更为复杂的精切查询（可以跟管理员学习，TODO：可以出个教程）

- `/co inspect`&nbsp;&nbsp;进入检查器模式，再次使用指令可退出检查器模式。进入检查器模式后可以左键右键方块查询信息

- `/co near`&nbsp;&nbsp;查询自己身边的变动情况，谁什么时候挖掘/放置了什么方块等等信息

## 锁箱子

<!-- [锁箱子](chestprotect.md) -->
[锁箱子](https://www.bilibili.com/read/cv26572194/)

## 村民优化

- `/vo optimize`&nbsp;&nbsp;进入优化模式，进入优化模式后，右键村民可优化村民

- `/vo restore`&nbsp;&nbsp;进入恢复模式，进入恢复模式后，右键村民可恢复村民

- `/vo exit`&nbsp;&nbsp;退出任何模式

### 村民优化说明

意义：减少因为村民的寻路算法带来的卡顿，增加服务器流畅度，提升玩家游玩体验

影响：村民被优化后，不会自己走路，不受到僵尸的攻击伤害（只是僵尸）

补充：村民交易所的村民，是不需要走路的，它们想走路只会卡服务器


说明：
- 必须优化村民，你才可以与它进行交易
- 只有村民交易所的村民需要优化，对于依赖村民寻路的机器中所使用的村民，可不用进行优化
- 指令冷却时间限制：你不可以在短时间内对同一个村民反复的进行优化与恢复！

## 杂项

- `/pvp [on/off]`&nbsp;&nbsp;开启/关闭PVP模式，[详细说明](./plugins/paper-pvp)

- `/hat`&nbsp;&nbsp;将手上的物品放在自己头上，可以用来戴帽子，空手使用指令就是摘下帽子

- `/take-off-armor`&nbsp;&nbsp;脱下你的所有衣服（裸奔），**无视绑定诅咒**

- `/afk [消息]`&nbsp;&nbsp;主动进入AFK挂机模式，挂机消息会显示在Tab列表上被其它玩家看到，走动会自动退出该模式

- `/tpsbar`&nbsp;&nbsp;切换显示\隐藏TpsBar，TpsBar实时显示服务器TPS、MSPT等服务器性能信息，还显示自己的网络延迟

- `/tps`&nbsp;&nbsp;查询详细的服务器性能信息

- `/tps region`&nbsp;&nbsp;查询所在区域详细的服务器性能信息

- `/tip list [页码]`&nbsp;&nbsp;查看服务器所有游玩提示，可点击翻页

- `/report player <玩家名或UUID> <举报理由>`&nbsp;&nbsp;举报违规玩家，需要玩家一步确认，举报需要保留证据。被举报玩家会被立刻踢出服务器并限制登录24小时直到管理员处理举报。管理员处理举报时一般会通过QQ跟你要证据，请记得绑定QQ，否则可能会被判定为恶意举报

- `/fly`&nbsp;&nbsp;开启/关闭飞行模式，双击空格起飞，此功能在某些情况下才可以使用，一般不可飞行

- `/pt list [页码]`&nbsp;&nbsp;查看自己的称号列表

- `/minedwon <代码>`&nbsp;&nbsp;预览MineDown代码的显示效果

## 电池商店

[点击查看](/coins/)