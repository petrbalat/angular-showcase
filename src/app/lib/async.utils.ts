export async function delay(milis: number) {
  await new Promise(it => setTimeout(it, milis));
}
