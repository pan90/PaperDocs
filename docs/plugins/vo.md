# 村民优化

## 意义
减少因为村民的寻路算法带来的卡顿，增加服务器流畅度，提升玩家游玩体验

## 影响
村民被优化后，不会自己走路，不受到僵尸的攻击伤害（只是僵尸）

## 补充
村民交易所的村民，是不需要走路的，它们想走路只会卡服务器

## 说明
- **必须优化村民，你才可以与它进行交易**
- 只有村民交易所的村民需要优化，对于**依赖村民寻路**的机器中所使用的村民，可不用进行优化

## 指令
`/vo optimize`      进入优化模式（进入优化模式后，对它右键村民可优化村民）  
`/vo restore`       进入恢复模式（进入恢复模式后，对它右键村民可恢复村民）  
`/vo exit`          退出任何模式

> [!warning]冷却时间限制
> 你不可以在短时间内对同一个村民反复的进行优化与恢复！