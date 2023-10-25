document.addEventListener("copy", (e) => {
  const selection = document.getSelection();
  let r = selection.toString();
    //.replaceAll("\n\n","\n")
  r=r
    .replaceAll("(U)","(\u{2B06}\u{FE0F})")
    .replaceAll(" U "," \u{2B06}\u{FE0F} ")
    .replaceAll("(D)","(\u{2B07}\u{FE0F})")
    .replaceAll("(L)","(\u{2B05}\u{FE0F})")
    .replaceAll(" L "," \u{2B05}\u{FE0F} ")
    .replaceAll("(R)","(\u{27A1}\u{FE0F})")
    .replaceAll(" R "," \u{27A1}\u{FE0F} ")
    .replaceAll(" D "," \u{2B07}\u{FE0F} ")
    .replaceAll("(X)","(\u{274E})")
    .replaceAll(" X "," \u{274E} ")
    .replaceAll("(O)","(\u{1F17E}\u{FE0F})")
    .replaceAll(" O "," \u{1F17E}\u{FE0F} ");
  e.clipboardData.setData("text/plain", r);
  e.preventDefault();
  //alert(r);
});
