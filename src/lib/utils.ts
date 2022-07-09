// 参考: https://qiita.com/uhyo/items/3bc5f951f922804ede51
type ArrayOfLength<N extends number, T> = ArrayOfLengthRec<N, T, []>;
type ArrayOfLengthRec<Num, Elm, T extends unknown[]> = T["length"] extends Num ? T : ArrayOfLengthRec<Num, Elm, [Elm, ...T]>

export type { ArrayOfLength };