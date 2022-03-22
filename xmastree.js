function createXmasTree(height) {
  const len = height + (height - 1);
  // ¡Y no olvides también poner los turrones!
  let xmasTree = '';
  let branches = 1;
  const createTreeLine= (fill,iter,char) =>
  `${'_'.repeat(fill)}${iter > 0 ? char.repeat(branches) : char}${'_'.repeat(fill)}`;
  for (let i = 0; i < height; i++) {
    if (i > 0) { branches += 2; }
    const underscoreFill = branches < len ? (len - branches) / 2 : 0;
    const level = createTreeLine(underscoreFill,i,'*')
    xmasTree = xmasTree + '\n' + level
  }
  const treeLog=createTreeLine((len-1)/2,0,'#')+'\n'+createTreeLine((len-1)/2,0,'#')
  return xmasTree+'\n'+treeLog;
}

console.log(createXmasTree(25))