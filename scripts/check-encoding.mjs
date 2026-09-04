#!/usr/bin/env node
/* KHub encoding guard (static)
   Usage: node scripts/check-encoding.mjs <path-to-app-dir-or-file>

   Catches the "scribbling" class of bug: source that was UTF-8 but got
   decoded as Latin-1/Windows-1252 and re-saved (double-encoded UTF-8, aka
   mojibake). That corruption turns emoji, box-drawing dividers, dashes,
   and Spanish accents into garbage: one code point becomes(H][KXÚ\˜Xİ\‚ˆ[ˆÚÜÙH]\È[˜ÛYH36öçG&öÂ6öFRö–çG2…R³ƒÕR³”b’à¢…F†—2f–ÆRFVÆ–&W&FVÇ’6öçF–ç2æòÆ—FW&ÂÖö¦–&¶RÂ6ò—B76W2—G0¢÷vâ6†V6³²F†RFW7G2'V–ÆB½ÉÉÕÁÑ•Í…µÁ±•Ì™É½´•Í…Á”Í•ÅÕ•¹•Ì¸¤((€€i•É¼‘•Á•¹‘•¹¥•ÌƒŠPÉÕ¹Ì½¸Á±…¥¸¹½‘•€°³o it works in(\™\ÜÈ]ˆ]™H›ÈXÚØYÙKšœÛÛ‹ˆ^]HYˆ[Hš[H\ÈÛÜœ\YYŠ6ÆVââ¼()¥µÁ½ÉĞ™Ì™É½´€™Ìœì)¥µÁ½ÉĞÁ…Ñ ™É½´€Á…Ñ œì((¼¼Q•áĞ™½Éµ…ÑÌİ”É•……ÌUQ´à¸	¥¹…Éä€¡Á¹œ½ÍÙœ½¥¼½İ½™˜¸¸¸¤¥ÌÍ­¥ÁÁ•¸)½¹ÍĞQaQ}aP€ô®ew Set([
  '.js', '.mjs',)Ë˜ÚœÉË	ËÉË
ræ‡FÖÂrÂœ¹ÍÌœ°œ¹©Í½¸œ°(€€œ¹µœ°€œ¹ÑáĞœ°§.webmanifest',	Ë[[	Ëœ¹å…µ°œ°€œ¹Ñ½µ°œ°€œ¹ÍÙœœ°)t¤ì((¼¼¥É•Ñ½É¥•ÌÑ¡…Ğ¹•Ù•È½¹Ñ…¥¸¡…¹µ…ÕÑ¡½É•Í½ÕÉ”¸)½¹ÍĞM-%A}%H€ô®ew Set(['.git','node_modules','icons']);

function walk(dir, out = []) {
  for (const)HÙˆœËœ™XY\”Ş[˜Ê\‹ÈÚ]š[U\\ÎˆYHJJHÂˆYˆ
ÒÒTÑT‹š\ÊK›˜[YJJHÛÛ[YNÂˆÛÛœİH]š›Ú[Š\‹K›˜[YJNÂˆYˆ
Kš\Ñ\™XİÜJ
JHØ[Êİ]
NÂˆ
VÇ6R÷WBçW6‚‡“°¢Ğ¢&WGW&â÷WC°§Ğ ¢ò¢F†R&VÆ–&ÆRÂfÇ6R×÷6—F—fRÖg&VR6–væÇ2½˜¤ouble-encoded UTF-8:
   - C1(ÛÛ›ÛÛÙHÚ[ÈJÌUJÌQˆ\X\š[™È\ÈÚ\˜Xİ\œËˆÙ[Z[™Bˆ^™]™\ˆÛÛZ[œÈ\ÙNÈ^HÛ›HÚİÈ\\ÈH˜Z[[™È]\ÈÙ‚ˆ
UDbÓ‚6WVVæ6RF†Bv2&V–çFW'&WFVB2ÆF–âÓà¢ÒT­IA159P!IQH°¬eft behind(JÆ÷77’FV6öFRà¢ÆVv—BVÖö¦’æB66VçFVBÆWGFW'2&R6–ævÆR6öFRö–çG2øT¬ÀÁ°Í¼Ñ¡•ä(€€…É”¹•Ù•È™±…•¸‚/
export function scanText(text) {
  const issues = [];
  const+[™\ÈH^œÜ]
	×‰ÊNÂˆ›Üˆ
]HHÈH[™\Ë›[™İÈJÊÊHÂˆÛÛœİ[™HH[™\ÖÚWNÂˆ›Üˆ
]ˆHÈˆ
Æ–æRæÆVæwFƒ²¢²²’°¢6öç7B7ÒÆ–æRæ6öFUö–çDB†¢“°¢6öç7B—43ôÀ€øô€ÁààÀ€˜˜À€ğô€Áàå˜ì(€€€€€½¹ÍĞ¥ÍI•Á°€ôÀ€ôôô€Áá™™™ì(€€€€€¥˜€¡¥ÍÄñğ¥ÍI•Á°¤ì(€€€€€€€½¹ÍĞÍÑ…ÉĞ€ôath.max(0, j - 12);
        issues.push({
          line: i + 1,
          col: j + 1,
          codePoint: `U+${cp.toString(16).toUpperCase().padStart(4, '0')}kˆÚ[™ˆ\Ô™\È	Ü™\XÙ[Y[XÚ\‰ÈŠvÖö¦–&¶RÖ3rÀ¢6öçFW‡C¢¥4ôâç7G&–æv–g’†Æ–æRç6Æ–6R‡7F'BÂ¢²"’’À¢Ò“°¢Ğ¢Ğ¢Ğ¢&WGW&â—77VW3°§Ğ ¦W‡÷'BgVæ7F–öâf–æDVæ6öF–æt—77VW2†f–ÆW2’°¢6öç7B&W÷'BÒµÓ°¢f÷"†6öç7Bböbf–ÆW2’°¢–b‚DU…EôU…Bæ†2‡F‚æW‡FæÖR†b’çFôÆ÷vW$66R‚’’’½¹Ñ¥¹Õ”ì(€€€±•ĞÑ•áĞì(€€€ÑÉäì(€€€€€Ñ•áĞ€ô™Ì¹É•…‘¥±•Må¹Œ¡˜°§utf8');
    } catch {
      continue;
    }
    const issues = scanText(text);
   *Yˆ
\ÜİY\Ë›[™İ
H™\Üœ\Ú
Èš[Nˆ‹
—77VW2Ò“°¢Ğ¢&WGW&â&W÷'C°§Ğ ¢òòÒÒÒ4Ä’ÒÒĞ¢òò–×÷'BæÖWFçW&ÂÖF6†W2&we³ÒöæÇ’v†VâF†—2f–ÆR—2'VâF—&V7FÇ’à¦6öç7B–çfö¶VDF—&V7FÇ’Ğ¢&ö6W72æ&we³Òb`¢F‚ç&W6öÇfR‡&ö6W72æ&we³Ò’ÓÓÒF‚ç&W6öÇfR†æWrU$Â†–×÷'BæÖWFçW&Â’çF†æÖR“° ¦–b†–çfö¶VDF—&V7FÇ’’°¢6öç7BF&vWBôÁÉ½•ÍÌ¹…ÉÙlÉtñğ§.';
  const stat = fs.statSync(target);
  const files =,İ]š\Ñ\™XİÜJ
HÈØ[Ê\™Ù]
H‰·F&vWEÓ°¢6öç7B&W÷'BÒf–æDVæ6öF–æt—77VW2†f–ÆW2“° ¢–b‡&W÷'BæÆVæwF‚ôôô€À¤ì(€€€½¹Í½±”¹±½œ¡•¹½‘¥¹œ¡•¬è±•…¸€ ‘í™¥±•Ì¹±•¹Ñ¡ô™¥±•ÌÍ…¹¹•°¹¼µ½©¥‰…­”¥€¤ì(€€€ÁÉ½•ÍÌ¹•á¥Ğ À¤ì(€ô((€±•ĞÑ½Ñ…°€ô€Àì(€™½È€¡½¹ÍĞì™¥±”°¥ÍÍÕ•Ìô½˜É•Á½ÉĞ¤ì(€€€£onsole.error(`\nFAIL ${file} - ${issues.length} corrupted character(s):`);
    for (const it of issues.slice(0, 8)) {
      console.error(`  line ${it.line}:${it.col}  ${it.codePoint} (${it.kind})  near)Ú]˜ÛÛ^X
NÂˆBˆYˆ
\ÜİY\Ë›[™İâ‚’6öç6öÆRæW'&÷"†âââæB‘í¥ÍÍÕ•Ì¹±•¹Ñ €´¸}+[Ü™X
NÂˆİ[
ÏJ—77VW2æÆVæwFƒ°¢Ğ¢6öç6öÆRæW'&÷"€¢ÆæVæ6öF–ær6†V6²d”ÄTC¢‘íÑ½Ñ…±ô£orrupted character(s) in ${report.length} file(s).`
  );
  console.error(
    'Cause:)İX›KY[˜ÛÙYU‹N
š[HXÛÙY\È][‹LH[™™K\Ø]™Y
Kˆ	È
Âˆ4f—ƒ¢&RÖFV6öFRF†R½ÉÉÕÁÑ•‰åÑ”µÉÕ¹Ì€¡±…Ñ¥¸´Ä€´øÕÑ˜´à¤°Ñ¡•¸É”µÍ…Ù”…ÌUQ´à¸œ(€€¤ì(€ÁÉ½•ÍÌ¹•á¥Ğ Ä¤ì)ô(