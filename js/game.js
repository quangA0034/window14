(()=>{
'use strict';
const A=ASSETS, $=s=>document.querySelector(s), sleep=ms=>new Promise(r=>setTimeout(r,ms));
const MAX=5;
/* ---------- i18n ---------- */
let LANG='en';
const VI=window.VI_DICT;
const PRO_A="Dear Kingdom citizens, it took us over a decade to overthrow the Republican... The scum of the world. Every nation has their good time and bad time, same goes to our Kingdom. Our economy is not doing great but we are improving! The government agreed to open up shops that accept the citizen's goods in exchange for fresh, hot credits!", PRO_B="And you, if you are reading this, my friend you are one of the lucky one that will be working in our brand new window 14! You will be doing a 5-days trial so that we can see how you perform in our new system. Good luck and Glory to the Kingdom!", PROCAP_VI="CỬA HÀNG DO NHÀ NƯỚC TÀI TRỢ MỞ CỬA. Thủ tướng công bố các quầy trao đổi do nhà nước bảo trợ cho công dân đang cần tiền.";
Object.assign(VI,{"Picture of me and my brothers, all passed away on the battlefield, gosh it hurts to look at this.":"Bức ảnh của tôi và các anh em tôi, tất cả đều đã hy sinh ngoài chiến trường, trời ơi, nhìn nó mà đau lòng.","Four young men in uniform, arms around each other.":"Bốn chàng trai mặc quân phục, choàng vai nhau.","Four young men in uniform.":"Bốn chàng trai mặc quân phục.","Army service: discharged":"Phục vụ quân đội: giải ngũ","My brothers... I will see them, then.":"Các anh em tôi... Vậy là tôi sẽ gặp lại họ.","Old photograph":"Ảnh cũ","Test: skip to Day 3 (father not helped)":"Thử nghiệm: nhảy tới Ngày 3 (không giúp người cha)","Test: skip to Day 3 (father helped, S0S paid)":"Thử nghiệm: nhảy tới Ngày 3 (đã giúp cha, đã trả S0S)","That is an insult. I will not be robbed. I am leaving.":"Đó là sự xúc phạm. Tôi sẽ không để bị cướp. Tôi đi đây.","The citizen snatches the item back and storms out.":"Người đó giật lại món hàng và hầm hầm bỏ đi.","Citation warning: a seller was driven away by insulting offers":"Cảnh cáo: một người bán bị đuổi đi vì những lời trả giá xúc phạm","seller driven away":"người bán bị đuổi đi","Inspector Lund comes in from the side door, dragging a trembling citizen by the collar. A rolled blanket drops onto the tray.":"Thanh tra Lund bước vào từ cửa hông, lôi theo một công dân run rẩy bằng cổ áo. Một cuộn chăn rơi xuống khay.","Inspector Lund comes in from the side door, dragging a trembling citizen by the collar. A vase thumps onto the tray.":"Thanh tra Lund bước vào từ cửa hông, lôi theo một công dân run rẩy bằng cổ áo. Một chiếc bình đặt phịch xuống khay.","Inspector Lund comes in from the side door, dragging a trembling citizen by the collar. A radio clatters onto the tray.":"Thanh tra Lund bước vào từ cửa hông, lôi theo một công dân run rẩy bằng cổ áo. Một chiếc radio rơi loảng xoảng xuống khay.","Shopkeeper. Pay attention. This citizen came to sell you a blanket.":"Người bán hàng. Chú ý. Công dân này đến bán cho anh một cái chăn.","Shopkeeper. Pay attention. This citizen came to sell you a vase.":"Người bán hàng. Chú ý. Công dân này đến bán cho anh một chiếc bình.","Shopkeeper. Pay attention. This citizen came to sell you a radio.":"Người bán hàng. Chú ý. Công dân này đến bán cho anh một chiếc radio.","Wool. Rolled tight. And inside it...":"Len. Cuộn thật chặt. Và bên trong nó...","Pretty glaze. Hollow belly. And inside it...":"Men đẹp. Bụng rỗng. Và bên trong nó...","It plays. It also opens at the back. And behind the speaker...":"Nó phát được. Nó cũng mở được ở phía sau. Và đằng sau loa...","An army pistol. They hide pistols, identity cards and forbidden papers inside ordinary goods.":"Một khẩu súng quân dụng. Họ giấu súng, thẻ căn cước và giấy tờ cấm bên trong hàng hóa bình thường.","Stolen identity cards. Three of them. They hide forbidden things inside anything with a hollow in it.":"Thẻ căn cước bị đánh cắp. Ba cái. Họ giấu đồ cấm trong bất cứ thứ gì có chỗ rỗng.","Ministry papers, stamped RESTRICTED. A radio makes a fine hiding place for a traitor.":"Giấy tờ của Bộ, đóng dấu HẠN CHẾ. Một chiếc radio là nơi giấu lý tưởng cho kẻ phản quốc.","So check every item carefully. Inspect it. Citizens hide forbidden things inside the goods they bring you.":"Vậy hãy kiểm tra cẩn thận mọi món hàng. Soi cho kỹ. Công dân giấu đồ cấm bên trong hàng hóa họ mang đến.","Do not let a polite face do your looking for you. Now watch.":"Đừng để một khuôn mặt lễ phép thay anh nhìn. Giờ hãy xem.","Please! A man paid me to carry it! I did not know what was inside!":"Làm ơn! Có người trả tiền cho tôi để mang nó! Tôi không biết bên trong có gì!","The State does not care what you knew.":"Nhà nước không quan tâm anh biết gì.","Lund lifts one finger. Two guards step out of the dark.":"Lund giơ một ngón tay. Hai lính canh bước ra từ bóng tối.","Lund straightens his gloves and leaves. The queue does not look up.":"Lund chỉnh lại găng tay rồi rời đi. Hàng người không ai ngẩng lên.","A baker with flour on his sleeves rolls a blanket onto the tray.":"Một người thợ làm bánh tay áo dính bột lăn một cái chăn lên khay.","A good wool blanket. We sleep by the ovens now. We do not need it.":"Một cái chăn len tốt. Giờ chúng tôi ngủ cạnh lò nướng. Không cần nó nữa.","Wool. Warm. Never been damp.":"Len. Ấm. Chưa bao giờ bị ẩm.","The bakery stays hot all night. Nobody needs a blanket there.":"Tiệm bánh nóng cả đêm. Ở đó chẳng ai cần chăn.","My mother knitted the edge. The rest is State wool.":"Mẹ tôi đan phần viền. Phần còn lại là len của Nhà nước.","Scan away. I have the stamp.":"Cứ quét đi. Tôi có dấu xác nhận.","#? It is good wool!":"#? Đây là len tốt đấy!","I have the stamp! Look at the stamp!":"Tôi có dấu mà! Hãy nhìn cái dấu đi!","I was cleared! I was cleared!":"Tôi đã được xóa tội! Tôi đã được xóa tội!","A woman with ink on her fingers sets a carton on the tray and keeps glancing at the door.":"Một người phụ nữ ngón tay dính mực đặt một cây thuốc lên khay và liên tục liếc ra cửa.","Cigarettes. Sealed. Take them, please. I need to be somewhere.":"Thuốc lá. Còn niêm phong. Làm ơn lấy đi. Tôi phải đến một nơi khác.","A carton. Twenty packs. Sealed.":"Một cây. Hai mươi gói. Còn niêm phong.","I quit. My doctor insisted.":"Tôi bỏ thuốc rồi. Bác sĩ khăng khăng bắt thế.","The tobacconist on Dock Street.":"Tiệm thuốc lá ở phố Dock.","Of course. Quickly, please.":"Dĩ nhiên. Làm ơn nhanh lên.","#? For a sealed carton?":"#? Cho một cây còn niêm phong á?","Then I will go.":"Vậy tôi đi.","She hurries out, forgetting to look back.":"Cô vội vã bước ra, quên không ngoái lại.","Not now! Please, not now!":"Đừng bây giờ! Làm ơn, đừng bây giờ!","I have children! Please!":"Tôi có con nhỏ! Làm ơn!","A heavyset man in a work jacket hangs a chain from two fingers.":"Một người đàn ông to con mặc áo bảo hộ lao động đung đưa sợi dây chuyền trên hai ngón tay.","Gold. Real gold. From my grandfather. I would not sell it if the rent were not due.":"Vàng. Vàng thật. Của ông nội tôi. Tôi sẽ không bán nếu không đến hạn đóng tiền thuê nhà.","A gold chain. Heavy. Old.":"Một sợi dây chuyền vàng. Nặng. Cũ.","The rent. The Ministry raised it again.":"Tiền thuê nhà. Bộ lại tăng nữa rồi.","My grandfather. He worked at the docks and saved for years.":"Ông nội tôi. Ông làm ở bến cảng và dành dụm nhiều năm.","Scan away. I am loyal.":"Cứ quét đi. Tôi trung thành.","#? For my grandfather's gold?":"#? Cho vàng của ông nội tôi á?","Then I will pawn it.":"Vậy tôi sẽ đem cầm.","He pockets the chain and trudges out.":"Anh nhét sợi dây vào túi rồi lê bước ra.","Arrest me? For jewellery? It is gold!":"Bắt tôi á? Vì món trang sức? Nó là vàng mà!","I pay my dues! I march in the parades!":"Tôi đóng đủ phí! Tôi diễu hành đầy đủ!","A woman in a headscarf sets three cans on the tray, a receipt tucked beneath them.":"Một người phụ nữ quấn khăn trùm đầu đặt ba lon lên khay, tờ biên lai kẹp bên dưới.","Foreign cans. I paid the duty this morning. Everything is in order.":"Đồ hộp ngoại quốc. Sáng nay tôi đã đóng thuế. Mọi thứ đều hợp lệ.","Three cans of peaches. From over the border.":"Ba lon đào. Từ bên kia biên giới.","My husband cannot stand peaches.":"Chồng tôi không chịu nổi đào.","The border market. I paid the Ministry at the gate.":"Chợ biên giới. Tôi đã nộp phí cho Bộ ở cổng.","Here. Stamped and paid.":"Đây. Đã đóng dấu và đã trả phí.","Canned food, 3":"Đồ hộp, 3","A thin man sets a radio on the tray and smooths a crumpled receipt beside it.":"Một người đàn ông gầy gò đặt chiếc radio lên khay và vuốt phẳng tờ biên lai nhàu bên cạnh.","A foreign radio. Imported legally. The receipt is right here.":"Một chiếc radio ngoại. Nhập khẩu hợp pháp. Biên lai ở ngay đây.","A radio. Foreign made. It works.":"Một chiếc radio. Sản xuất ở nước ngoài. Nó chạy được.","I need the money more than the music.":"Tôi cần tiền hơn là cần âm nhạc.","Brought it over last year. I paid the fee.":"Tôi mang nó sang từ năm ngoái. Tôi đã đóng phí.","It is a receipt. It is stamped. That should be enough.":"Đó là một tờ biên lai. Có đóng dấu. Thế là đủ rồi.","Radio, 1":"Radio, 1","It is a perfectly good receipt!":"Đây là một tờ biên lai hoàn toàn hợp lệ!","No! The receipt! Look at the receipt!":"Không! Biên lai! Hãy nhìn biên lai!","A woman with calloused hands lays a folded blanket on the tray.":"Một người phụ nữ bàn tay chai sạn đặt một cái chăn gấp gọn lên khay.","A wool blanket. Warm. It has kept three winters at bay.":"Một cái chăn len. Ấm. Nó đã giúp qua ba mùa đông.","Wool. Hand-carded. Heavy.":"Len. Chải tay. Nặng.","The factory cut my hours. Again.":"Nhà máy lại cắt giờ làm của tôi.","My sister wove it before she left the city.":"Chị tôi dệt nó trước khi rời thành phố.","Union meeting":"Cuộc họp công đoàn","#? For three winters of warmth?":"#? Cho ba mùa đông ấm áp á?","You have nothing on me! Nothing!":"Các người chẳng có gì về tôi cả! Chẳng có gì!","The union will remember this!":"Công đoàn sẽ nhớ chuyện này!","A man in a clean shirt carries a vase in both arms, like a sleeping child.":"Một người đàn ông mặc áo sạch ôm chiếc bình bằng hai tay, như bế một đứa trẻ đang ngủ.","An antique vase. Orlov kilns. It has been in my family for generations.":"Một chiếc bình cổ. Lò gốm Orlov. Nó đã ở trong gia đình tôi qua nhiều thế hệ.","A vase. Hand-painted. Very old.":"Một chiếc bình. Vẽ tay. Rất cổ.","My daughter needs a new coat before the first snow.":"Con gái tôi cần một cái áo khoác mới trước trận tuyết đầu mùa.","Handed down. I have carried it through three moves.":"Được truyền lại. Tôi đã mang nó qua ba lần chuyển nhà.","Hairline crack down one side.":"Một vết nứt tóc chạy dọc một bên.","Dull buzz.":"Tiếng rè đục.","#? For an Orlov piece?":"#? Cho một món đồ gốm Orlov á?","Antique vase (cracked)":"Bình cổ (nứt)","A man in a damp coat sets a carton and a receipt side by side.":"Một người đàn ông mặc áo khoác ẩm đặt một cây thuốc và một tờ biên lai cạnh nhau.","Imported cigarettes. Duty paid. The receipt is right there.":"Thuốc lá nhập khẩu. Đã đóng thuế. Biên lai ở ngay đó.","A carton. Foreign. The good stuff.":"Một cây thuốc. Hàng ngoại. Loại ngon.","I have a cough that does not care for the stuff.":"Tôi bị ho, mà ho thì chẳng ưa thứ này.","A friend at the port. He handled the paperwork.":"Một người bạn ở cảng. Anh ấy lo giấy tờ.","The paperwork is all there. Every stamp.":"Giấy tờ đủ cả. Có đủ dấu.","Party handbook (unofficial print)":"Sổ tay Đảng (bản in lậu)","A man with a toolbox sets down a thick red book, as if presenting an award.":"Một người đàn ông xách hộp đồ nghề đặt xuống một cuốn sách đỏ dày, như thể đang trao giải thưởng.","The Party handbook. First printing. A collector would pay a great deal.":"Cuốn Sổ tay Đảng. Bản in đầu tiên. Nhà sưu tập sẽ trả rất nhiều.","The Party handbook. First printing. A real one.":"Cuốn Sổ tay Đảng. Bản in đầu tiên. Hàng thật.","My cousin. He works near the presses. Or he says he does.":"Em họ tôi. Nó làm gần xưởng in. Hoặc nó bảo vậy.","Red cover, gold eagle. Edges cut crooked.":"Bìa đỏ, đại bàng vàng. Mép cắt lệch.","Clean pages. No margin notes.":"Trang sạch. Không có ghi chú bên lề.","#? For a first printing?":"#? Cho một bản in đầu tiên á?","...fine. It is only paper anyway.":"...được. Dù sao nó cũng chỉ là giấy.","He puts the book in the toolbox and leaves.":"Anh ta bỏ cuốn sách vào hộp đồ nghề rồi đi.","Arrest me? For a book? Look at it!":"Bắt tôi á? Vì một cuốn sách? Anh nhìn nó đi!","Publisher and release date on the first page.":"Nhà xuất bản và ngày phát hành in ở trang đầu.","No publisher or release date":"Không có nhà xuất bản hay ngày phát hành","Not a State Press edition. Pay the damaged rate or refuse.":"Không phải ấn bản của Nhà xuất bản Nhà nước. Trả theo giá hàng hỏng hoặc từ chối.","No release date or publisher found.":"Không tìm thấy ngày phát hành hay nhà xuất bản.","Warm colour. Clasp bent and cracked.":"Màu ấm. Khóa bị cong và nứt.","Gold necklace (damaged clasp)":"Dây chuyền vàng (hỏng khóa)","Real gold, damaged":"Vàng thật, bị hư hại","Bent or cracked clasp, broken links. Pay the damaged rate or refuse.":"Khóa cong hoặc nứt, mắt xích đứt. Trả theo giá hàng hỏng hoặc từ chối.","Type your offer in the price bar, then press Make offer.":"Nhập giá của anh vào thanh giá, rồi bấm Ra giá.","A sealed carton is worth 25. Work out the Ministry rate and make me an offer.":"Một cây thuốc còn niêm phong có giá trị 25. Hãy tự tính giá của Bộ rồi ra giá cho tôi.","More than one third. Every extra credit leaves your till for nothing. The Ministry rate is 8.":"Nhiều hơn một phần ba. Mỗi credit thừa đều rời khỏi két của anh một cách vô ích. Giá của Bộ là 8.","Less than one third. A real seller would be insulted, and walk away. The Ministry rate is 8.":"Ít hơn một phần ba. Người bán thật sẽ thấy bị xúc phạm và bỏ đi. Giá của Bộ là 8.","Autumn Year 4":"Mùa thu Năm 4","At the top of your screen is the till. You have 400 credits, and they must last all 5 days. Use them wisely.":"Ở phía trên màn hình là két tiền. Mỗi cửa sổ được cung cấp 400 credit, và chúng đủ dùng cho cả 5 ngày. Hãy dùng thật khôn ngoan.","Everything you buy comes out of it. Overpay, or buy a forgery, and you will be fined. Run dry, and the Ministry will ask questions.":"Mọi thứ anh mua đều lấy từ đó. Trả quá giá, hay mua phải hàng giả, anh sẽ bị phạt. Hết sạch tiền, Bộ sẽ đặt câu hỏi.","Remember: inspect the item, check the Price Book, pay one third, and watch your till. The regulations will tell you what is forbidden.":"Hãy nhớ: kiểm tra món hàng, xem Sổ giá, trả một phần ba, và để mắt đến két tiền. Các quy định sẽ cho anh biết điều gì bị cấm.","A tall man in a grey coat steps up to the glass and sets a carton of cigarettes on the tray.":"Một người đàn ông cao mặc áo khoác xám bước tới tấm kính và đặt một cây thuốc lá lên khay.","Kingdom Tobacco Works.":"Xưởng Thuốc lá Vương quốc.","Good morning, shopkeeper. I am Inspector Lund of the State Identity Bureau. Today I will be your guide.":"Chào buổi sáng, người bán hàng. Tôi là Thanh tra Lund của Cục Nhận dạng Nhà nước. Hôm nay tôi sẽ là người hướng dẫn của anh.","People will bring you their goods. You inspect them, pay the Ministry rate, and the State resells them for profit.":"Người ta sẽ mang hàng đến cho anh. Anh kiểm tra, trả theo giá của Bộ, và Nhà nước bán lại để kiếm lời.","On your left is the Price Book. Every item has a worth. You pay one third of it.":"Bên trái anh là Sổ giá. Mỗi món hàng đều có giá trị. Anh trả một phần ba giá trị đó.","On your right are the regulations. They change every morning. Read them before you open the window.":"Bên phải anh là các quy định. Chúng thay đổi mỗi sáng. Hãy đọc trước khi mở cửa sổ.","Now watch. I will pretend to sell you this carton of cigarettes.":"Giờ hãy xem. Tôi sẽ giả vờ bán cho anh cây thuốc lá này.","Click the carton on the tray to inspect it. Every item has three checks. Run at least one.":"Bấm vào cây thuốc trên khay để kiểm tra. Mỗi món hàng có ba lần kiểm tra. Hãy làm ít nhất một lần.","Click the carton on the tray, then run a check.":"Bấm vào cây thuốc trên khay, rồi thực hiện một lần kiểm tra.","Good. Now open the Price Book and find the cigarettes.":"Tốt. Giờ hãy mở Sổ giá và tìm thuốc lá.","Open the Price Book on your left.":"Mở Sổ giá ở bên trái anh.","A sealed carton is worth 25. The Ministry rate is one third. Make me an offer.":"Một cây thuốc còn niêm phong có giá trị 25. Giá của Bộ là một phần ba. Hãy ra giá cho tôi.","Make me an offer for the carton.":"Hãy ra giá cho cây thuốc này.","Offer 8 credits (one third)":"Trả 8 credit (một phần ba)","Offer 25 credits (full worth)":"Trả 25 credit (đủ giá trị)","Refuse the carton":"Từ chối cây thuốc","Correct. One third of the worth. That is the Ministry rate.":"Đúng. Một phần ba giá trị. Đó là giá của Bộ.","The full worth? The State is not your charity. Pay one third.":"Đủ giá trị ư? Nhà nước không phải tổ chức từ thiện của anh. Hãy trả một phần ba.","You may refuse. But a sealed carton is good stock. Think before you turn goods away.":"Anh có thể từ chối. Nhưng một cây thuốc còn niêm phong là hàng tốt. Hãy suy nghĩ trước khi từ chối hàng.","This was only a demonstration. No credits changed hands.":"Đây chỉ là buổi làm mẫu. Không có credit nào được trao tay.","Remember: inspect the item, check the Price Book, pay one third. The regulations will tell you what is forbidden.":"Hãy nhớ: kiểm tra món hàng, xem Sổ giá, trả một phần ba. Các quy định sẽ cho anh biết điều gì bị cấm.","Open your window, shopkeeper. The queue is waiting.":"Mở cửa sổ đi, người bán hàng. Hàng người đang chờ.","He tucks the carton under his arm and steps out of the booth.":"Ông kẹp cây thuốc dưới tay và bước ra khỏi buồng.","Warm colour. Light wear.":"Màu ấm. Mòn nhẹ.","Stamped 750. State assay mark.":"Đóng dấu 750. Dấu giám định Nhà nước.","Warm colour. Small dent at the clasp.":"Màu ấm. Một vết lõm nhỏ ở khóa.","Warm colour. Tiny dent at the clasp.":"Màu ấm. Một vết lõm rất nhỏ ở khóa.","Warm colour. Foreign style.":"Màu ấm. Kiểu ngoại quốc.","Foreign hallmark. Port Varn stamp.":"Dấu kiểm định ngoại quốc. Dấu cảng Varn.","Kingdom Assay Office. 750.":"Phòng Giám định Vương quốc. 750.","Warm colour. Delicate links.":"Màu ấm. Mắt xích tinh tế.","Heavy chain. Worn clasp.":"Dây nặng. Khóa mòn.","Rust flakes on the links.":"Gỉ bong ra trên các mắt xích.","No hallmark.":"Không có dấu kiểm định.","Fizzes green.":"Sủi bọt xanh.","Back panel loose. Parts missing inside.":"Tấm lưng bị lỏng. Thiếu linh kiện bên trong.","Model R-40. Civilian bands.":"Kiểu R-40. Băng tần dân sự.","Silent. One faint click.":"Im lặng. Một tiếng tách khẽ.","Model R-40. Radio Bureau eagle.":"Kiểu R-40. Đại bàng Cục Phát thanh.","Plays the State anthem.":"Phát quốc ca.","Clean inside.":"Bên trong sạch.","Scuffed metal casing.":"Vỏ kim loại trầy xước.","Foreign script. Varn customs stamp.":"Chữ ngoại quốc. Dấu hải quan Varn.","Foreign station, then static.":"Một đài nước ngoài, rồi tiếng nhiễu.","Radio Bureau Workshop.":"Xưởng Cục Phát thanh.","Kingdom Radio Works.":"Xưởng Radio Vương quốc.","Red-gold glaze. Star motif.":"Men đỏ vàng. Họa tiết ngôi sao.","FACTORY No. 9, 1984.":"NHÀ MÁY số 9, 1984.","Dull thunk.":"Tiếng đục.","Handle glued back. Seam visible.":"Quai bị dán lại. Thấy rõ vết dán.","Orlov Kilns, 1921. Hand-inked.":"Lò gốm Orlov, 1921. Viết tay bằng mực.","Clear, long ring.":"Tiếng ngân dài, trong.","Hand-painted star.":"Ngôi sao vẽ tay.","Orlov Kilns, Kingdom.":"Lò gốm Orlov, Vương quốc.","Pale blue. Thin walls.":"Xanh nhạt. Thành mỏng.","Foreign script. Port Varn mark.":"Chữ ngoại quốc. Dấu cảng Varn.","Bright ring.":"Tiếng ngân sáng.","Pale blue. Painted bird.":"Xanh nhạt. Hình chim vẽ.","Bright, clear ring.":"Tiếng ngân sáng, trong.","Tight weave. A few darns.":"Dệt chặt. Vài chỗ vá.","Smells of cedar.":"Mùi gỗ tuyết tùng.","Tight weave. Patched.":"Dệt chặt. Có vá.","Black with soot. Moth holes.":"Đen bồ hóng. Có lỗ mọt.","Damp and smoky.":"Ẩm và có mùi khói.","Kingdom Wool Cooperative No. 4. Half gone.":"Hợp tác xã Len Vương quốc số 4. Mất một nửa.","Stained. Moth holes.":"Có vết bẩn. Có lỗ mọt.","Kingdom Wool Cooperative. Mostly gone.":"Hợp tác xã Len Vương quốc. Gần mất hết.","Kingdom Wool Cooperative.":"Hợp tác xã Len Vương quốc.","Red ink. Black eagle, broken wing.":"Mực đỏ. Đại bàng đen gãy cánh.","THE FIFTEEN WILL NOT BE FORGOTTEN.":"MƯỜI LĂM NGƯỜI SẼ KHÔNG BỊ QUÊN LÃNG.","Cheap paper. Ink smudges.":"Giấy rẻ. Mực lem.","Paint on cardboard. Black eagle.":"Sơn trên bìa các-tông. Đại bàng đen.","THE FALL OF THE TYRANT. School play.":"SỰ SỤP ĐỔ CỦA BẠO CHÚA. Vở kịch trường học.","Theatre licence stamp.":"Dấu giấy phép nhà hát.","Olive wool. Gold buttons.":"Len màu ô liu. Cúc màu vàng.","Plastic buttons.":"Cúc nhựa.","CAPITAL THEATRE PLAYERS, No. 41.":"ĐOÀN KỊCH THỦ ĐÔ, số 41.","Glued patches. No serial.":"Phù hiệu dán keo. Không có số seri.","Olive wool. Sweat and smoke.":"Len màu ô liu. Mồ hôi và khói.","Brass buttons. Ministry eagle.":"Cúc đồng. Đại bàng của Bộ.","Pvt. D. Halloran. Serial 22109.":"Binh nhì D. Halloran. Số seri 22109.","Sewn collar stars.":"Sao cổ áo được khâu.","CAPITAL FILM STUDIO, No. 112.":"HÃNG PHIM THỦ ĐÔ, số 112.","Red and white cloth. Splintered pole.":"Vải đỏ trắng. Cán gỗ toác.","Black eagle, broken wing.":"Đại bàng đen gãy cánh.","Dark stain near the base.":"Vết sẫm gần gốc.","Painted bedsheet. Three-winged eagle.":"Ga giường sơn vẽ. Đại bàng ba cánh.","CLASS 4B, PAGEANT.":"LỚP 4B, DIỄU HÀNH.","Painted broom handle.":"Cán chổi sơn đỏ.","Red and white cloth. Bamboo pole.":"Vải đỏ trắng. Cán tre.","Shiny gold star. No wear.":"Ngôi sao vàng sáng bóng. Không mòn.","TOY WORKS No. 3.":"XƯỞNG ĐỒ CHƠI số 3.","Bronze star. Paper tag pinned on.":"Ngôi sao đồng. Có thẻ giấy ghim vào.","S0S-301.":"S0S-301.","Serial ground off. S0S-301 scratched in.":"Số seri bị mài mất. Khắc S0S-301 vào chỗ đó.","Dented. Sealed.":"Móp. Còn niêm phong.","Date: two years out.":"Hạn: hai năm nữa.","Feels solid.":"Cảm giác đặc.","Sealed. Ration labels.":"Còn niêm phong. Nhãn khẩu phần.","Date: this year.":"Hạn: năm nay.","Sealed. Foreign labels.":"Còn niêm phong. Nhãn ngoại quốc.","Sealed. Bright labels.":"Còn niêm phong. Nhãn sáng.","Feels light.":"Cảm giác nhẹ.","Very light.":"Rất nhẹ.","Dock Street Cannery. Label reglued.":"Xưởng đóng hộp phố Dock. Nhãn dán lại.","Eagle crest. Stamped RESTRICTED.":"Huy hiệu đại bàng. Đóng dấu HẠN CHẾ.","Order: relocate 400 families.":"Lệnh: di dời 400 gia đình.","Ministry seal. Serial 0447.":"Con dấu của Bộ. Số seri 0447.","Order: transfer 300 detainees.":"Lệnh: chuyển 300 người bị giam.","Ministry seal. Serial 0651.":"Con dấu của Bộ. Số seri 0651.","Sealed. State crest.":"Còn niêm phong. Huy hiệu Nhà nước.","Batch 7741. Expires in 6 months.":"Lô 7741. Hết hạn sau 6 tháng.","White bottle. Foreign script.":"Chai trắng. Chữ ngoại quốc.","Port Varn seal on the cap.":"Dấu cảng Varn trên nắp.","White powder.":"Bột trắng.","Batch 5120. Expires in 8 months.":"Lô 5120. Hết hạn sau 8 tháng.","Two people on church steps.":"Hai người trên bậc thang nhà thờ.","Pencil: 14 June 1979.":"Bút chì: 14 tháng 6 năm 1979.","Nothing behind it.":"Phía sau không có gì.","Red cover. Worn corners.":"Bìa đỏ. Góc mòn.","Pencil note: \"the people deserve better\".":"Ghi chú bút chì: \"nhân dân xứng đáng được tốt hơn\".","Sealed. Clean print.":"Còn niêm phong. In sắc nét.","Brown shreds. Sweet smell.":"Những sợi nâu. Mùi ngọt.","Glued seal. Crooked print.":"Niêm phong dán keo. In lệch.","Dry leaves.":"Lá khô.","Service pistol. Ministry eagle.":"Súng quân dụng. Đại bàng của Bộ.","Serial 5-1188. Border Garrison.":"Số seri 5-1188. Đồn Biên giới.","Empty. Freshly cleaned.":"Rỗng. Mới được lau sạch.","State ID. Young man's photo.":"Thẻ căn cước Nhà nước. Ảnh một thanh niên.","Serial 8821. Registry: ACTIVE.":"Số seri 8821. Đăng ký: ĐANG HIỆU LỰC.","Photo re-glued.":"Ảnh bị dán lại.","Stamped 750. State assay mark.":"Khóa được đóng dấu 750, kèm dấu giám định của Nhà nước.","No reaction.":"Không phản ứng.","38 grams.":"38 gam.","36 grams.":"36 gam.","41 grams.":"41 gam.","Stamped 750. State assay mark.":"Đóng dấu 750, kèm dấu giám định của Nhà nước.","Rust flakes on the links.":"Gỉ màu nâu cam bong từng mảng dọc theo mắt xích.","Fizzes green.":"Nó sủi bọt xanh.","11 grams.":"11 gam.","Scuffed metal casing.":"Vỏ kim loại, trầy xước. Nhỏ gọn.","Foreign script. Varn customs stamp.":"Chữ ngoại quốc ở tấm lưng. Một dấu cảng hải quan Varn.","Foreign station, then static.":"Một đài nước ngoài, rồi tiếng nhiễu.","Red-gold glaze. Star motif.":"Men đỏ vàng với họa tiết ngôi sao.","Dull thunk.":"Một tiếng cộp đục.","Clear, long ring.":"Một tiếng ngân dài, trong.","Red-gold glaze. Star motif.":"Men đỏ vàng, họa tiết ngôi sao.","Pale blue. Thin walls.":"Men xanh nhạt, thành mỏng.","Smells of cedar.":"Mùi tuyết tùng và ẩm.","No thin patches.":"Không chỗ nào mỏng.","Cedar.":"Mùi tuyết tùng.","Thin patches everywhere.":"Chỗ nào cũng mỏng.","No Ministry print mark.":"Không có dấu in của Bộ.","Cheap paper. Ink smudges.":"Giấy rẻ tiền. Mực vẫn còn lem.","Paint on cardboard. Black eagle.":"Sơn đỏ trên bìa các-tông. Một con đại bàng đen gãy cánh.","Olive wool. Gold buttons.":"Len màu ô liu, cúc màu đồng thau.","Plastic buttons.":"Nhựa, sơn vàng.","Sewn collar stars.":"Sao cổ áo khâu máy.","6 grams.":"6 gam.","5 grams.":"5 gam.","46 grams.":"46 gam.","Date: two years out.":"Đóng dấu còn hạn hai năm.","Date: this year.":"Đóng dấu năm nay.","Feels light.":"Một tiếng lạch cạch rỗng.","Serial 5-1188. Border Garrison.":"Số seri 5-1188, kho vũ khí Đồn Biên giới.","Even tablets.":"Viên thuốc đều nhau.","Warm colour. Small dent at the clasp.":"Màu ấm, đều. Mắt xích mịn. Một vết lõm nhỏ ở khóa.","Silent. One faint click.":"Im lặng. Một tiếng tách rất khẽ, rồi hết.","FACTORY No. 9, 1984.":"Đóng dấu dưới đáy: NHÀ MÁY số 9, lô năm 1984.","FACTORY No. 9, 1984.":"Đóng dấu: NHÀ MÁY số 9, lô năm 1984.","Thin in one corner.":"Mỏng ở một góc.","Glued patches. No serial.":"Phù hiệu dán keo, không khâu. Không có số seri.","Glued patches. No serial.":"Phù hiệu dán keo. Không có số seri.","Dark stain near the base.":"Một vết nâu sẫm gần gốc.","TOY WORKS No. 3.":"Đóng dấu: XƯỞNG ĐỒ CHƠI số 3.","Feels solid.":"Không nghe tiếng sóng sánh. Cảm giác đặc.","Feels solid.":"Cảm giác đặc.","Ministry seal. Serial 0447.":"Một con dấu của Bộ, số seri 0447.","Ministry seal. Serial 0651.":"Một con dấu của Bộ, số seri 0651.","Serial 8821. Registry: ACTIVE.":"Một con dấu của Bộ, số seri 8821. Dấu đăng ký: ĐANG HIỆU LỰC.","Photo re-glued.":"Tấm ảnh bị dán lại ở các góc.","White powder.":"Bột trắng, khô và hơi sạn.","Brown shreds. Sweet smell.":"Những sợi nâu, khô, có mùi ngọt.","Dry leaves.":"Lá khô cuốn trong giấy.",'Inspector Lund':'Thanh tra Lund',"Real gold, hallmarked":"Vàng thật, có dấu kiểm định","Working":"Còn chạy tốt","Must power on, and nothing missing inside.":"Phải bật được, và bên trong không thiếu gì.","Dead, or missing parts":"Hỏng, hoặc thiếu linh kiện","No sound, or parts gone from the chassis. Pay the damaged rate or refuse.":"Không phát tiếng, hoặc mất linh kiện trong khung máy. Trả theo giá hàng hỏng hoặc từ chối.","Antique, hand-painted":"Đồ cổ, vẽ tay","Antique, damaged":"Đồ cổ, bị hư hại","Chipped or glued handle, or a crack. Pay the damaged rate or refuse.":"Quai bị mẻ hoặc dán lại, hoặc bị nứt. Trả theo giá hàng hỏng hoặc từ chối.","Factory replica":"Hàng nhái nhà máy","Set of three, sealed":"Bộ ba lon, còn niêm phong","Empty cans":"Lon rỗng","Rolled, clean":"Cuộn gọn, sạch","Filthy or moth-eaten":"Bẩn hoặc bị mọt cắn","Cigarettes":"Thuốc lá","Full carton, sealed packs":"Nguyên cây, các gói còn niêm phong","Counterfeit":"Hàng giả","Tea leaves or sawdust. Unroll one.":"Lá trà hoặc mùn cưa. Hãy tháo cuốn thử một điếu.","Medicine":"Thuốc","Sealed bottle":"Chai còn niêm phong","State Press, current edition":"Nhà xuất bản Nhà nước, ấn bản hiện hành","Sentimental value only":"Chỉ có giá trị tình cảm","Exceptions: Having one of these entries do not count as hostile":"Các trường hợp ngoại lệ: người có 1 trong những ghi chú sau sẽ không bị xem là thù địch","Order number":"Số lệnh","An entry with an order number is official duty, not membership. The fingerprint record explains each order.":"Mục có số lệnh là công vụ, không phải đảng viên. Hồ sơ vân tay sẽ giải thích từng lệnh.","Check the mark":"Kiểm tra dấu","Power test":"Thử bật nguồn","Tap test":"Gõ thử","Shake it out":"Giũ ra","Shake test":"Lắc thử","Test a tablet":"Thử một viên","Unroll one":"Tháo cuốn một điếu","What are you selling it for?":"Anh bán nó với giá bao nhiêu?","Kingdom Wool Cooperative.":"Nhãn dệt: Hợp tác xã Len Vương quốc. Đã phai nhưng vẫn đọc được.","Kingdom Radio Works.":"Đóng dấu dưới núm chỉnh: Xưởng Radio Vương quốc. Chỉ băng tần dân sự.","Nothing behind it.":"Không có gì giấu phía sau. Chỉ là một bản in đã phai.","Radio (missing parts)":"Radio (thiếu linh kiện)","Back panel loose. Parts missing inside.":"Tấm lưng bị lỏng. Khung máy mất một bóng đèn và nam châm loa.","Model R-40. Civilian bands.":"Bảng số seri: Kiểu R-40, chỉ băng tần dân sự.","Silent. One faint click.":"Im lặng. Một tiếng tách rất khẽ, rồi hết. Thiếu linh kiện thì nó không thể chạy.","This radio is missing parts. Is it broken?":"Cái radio này thiếu linh kiện. Nó hỏng à?","What? It worked yesterday!":"Gì cơ? Hôm qua nó còn chạy mà!","Antique vase (chipped handle)":"Bình cổ (mẻ quai)","Handle glued back. Seam visible.":"Men đỏ vàng, một ngôi sao vẽ tay. Một bên quai đã gãy ở chân và được dán lại. Vết dán lộ rõ.","A young woman in a clean student coat sets a bottle of medicine on the tray. She smiles, a little shyly.":"Một cô gái trẻ mặc áo khoác sinh viên sạch sẽ đặt một chai thuốc lên khay. Cô mỉm cười, hơi e thẹn.","My brother is better now. We do not need this medicine anymore.":"Em trai tôi khỏe rồi. Chúng tôi không cần thuốc này nữa.","Medicine I bought for my brother. He recovered, thank goodness.":"Thuốc tôi mua cho em trai. May quá, nó đã khỏi.","We have no use for it now, and money is tight.":"Giờ chúng tôi không dùng đến nữa, mà tiền thì eo hẹp.","The State pharmacy on Mill Street. I still have the receipt somewhere.":"Hiệu thuốc Nhà nước ở phố Mill. Tôi vẫn còn biên lai đâu đó.","Batch 5120. Expires in 8 months.":"Lô 5120. Hết hạn trong tám tháng. Có nhãn dán của hiệu thuốc Nhà nước.","#? I paid much more at the pharmacy.":"#? Tôi đã trả nhiều hơn thế ở hiệu thuốc.","Inspector Lund comes in from the side door and stops at your counter, a thin folder under one arm.":"Thanh tra Lund bước vào từ cửa hông và dừng lại bên quầy của anh, một tập hồ sơ mỏng kẹp dưới tay.","Good morning, shopkeeper. Inspector Lund, State Identity Bureau.":"Chào buổi sáng, người bán hàng. Thanh tra Lund, Cục Nhận dạng Nhà nước.","The Ministry has installed a fingerprint scanner at your window. Allow me to demonstrate.":"Bộ đã lắp một máy quét vân tay tại cửa sổ của anh. Để tôi làm mẫu.","Watch the screen. This is a sample file from the archive.":"Hãy nhìn màn hình. Đây là một hồ sơ mẫu từ kho lưu trữ.","See the table? In 2015, one meeting of the Republic Party. In 2019, this citizen joined our Party.":"Thấy bảng này không? Năm 2015, một buổi họp của Đảng Cộng hòa. Năm 2019, công dân này gia nhập Đảng của chúng ta.","The government does not care if someone switched to our party. If their history is affiliated with the other party, it is still treason, and it deserves death.":"Chính phủ không quan tâm việc ai đó đã chuyển sang đảng của chúng ta. Nếu lịch sử của họ dính líu đến đảng kia, đó vẫn là phản quốc, và đáng chết.","Prioritize eliminating hostile citizens. Profit is secondary.":"Hãy ưu tiên loại bỏ công dân thù địch. Lợi nhuận là thứ yếu.","Some entries carry an order number. Read the order beside it. Those people are on official duty, and they are not to be touched.":"Một số mục có kèm số lệnh. Hãy đọc lệnh bên cạnh. Những người đó đang thi hành công vụ, và không được đụng đến.","That is all. Open your window, shopkeeper.":"Hết rồi. Mở cửa sổ của anh đi, người bán hàng.","He closes the folder and leaves without another word.":"Ông gấp tập hồ sơ lại rồi rời đi, không nói thêm lời nào.","DEMONSTRATION FILE":"HỒ SƠ MẪU","Order 4412":"Lệnh số 4412","Order No. {0}":"Lệnh số {0}","Inspector of the State Identity Bureau. Official duty. Eliminating them will result in penalties.":"Thanh tra của Cục Nhận dạng Nhà nước. Đang thi hành công vụ. Loại bỏ họ sẽ bị phạt.","Working as a spy for the state. They mean no harm, and eliminating them will result in penalties.":"Làm gián điệp cho nhà nước. Họ không có ý hại ai, và loại bỏ họ sẽ bị phạt.","Clerk of the Ministry records office. Official duty, not a hostile member.":"Nhân viên văn thư của Phòng Hồ sơ của Bộ. Đang thi hành công vụ, không phải thành viên thù địch.","Ministry observer sent to watch a hostile meeting. Official duty, not membership.":"Quan sát viên của Bộ được cử đến theo dõi một cuộc họp thù địch. Đang thi hành công vụ, không phải thành viên.","Donald Orpo":"Donald Orpo","Lily Dang":"Lily Dang","Brown bottle":"Chai nâu","A man in a grey coat steps up to the glass. He studies you for a long moment before he speaks.":"Một người đàn ông mặc áo khoác xám bước tới tấm kính. Ông ta nhìn anh chằm chằm một lúc lâu trước khi lên tiếng.","Mhmm..":"Ừm...","You seem smart, and we need your help...":"Anh có vẻ thông minh, và chúng tôi cần sự giúp đỡ của anh...","There is a hostile citizen, she has been damaging our Kingdom reputation.":"Có một công dân thù địch, cô ta đang làm tổn hại danh tiếng của Vương quốc chúng ta.","If you see Lily Dang, get rid of her.":"Nếu anh thấy Lily Dang, hãy loại cô ta đi.","We will be installing a new tool to help you to identify tomorrow.":"Ngày mai chúng tôi sẽ lắp đặt một công cụ mới để giúp anh nhận diện.","Who are you?":"Ông là ai?","Someone who reads files for a living. Yours is thin, but interesting.":"Một người đọc hồ sơ để kiếm sống. Hồ sơ của anh mỏng, nhưng thú vị.","Who is Lily Dang?":"Lily Dang là ai?","A student. Smiling, polite, loyal on paper. That is what makes her dangerous.":"Một sinh viên. Hay cười, lịch sự, trung thành trên giấy tờ. Chính điều đó khiến cô ta nguy hiểm.","Good. Remember the name.":"Tốt. Hãy nhớ cái tên đó.","He leaves at a perfectly even pace.":"Ông ta rời đi với bước chân đều tăm tắp.","A young woman in a clean student coat sets a small brown bottle on the tray. She smiles at you, politely.":"Một cô gái trẻ mặc áo khoác sinh viên sạch sẽ đặt một chai nhỏ màu nâu lên khay. Cô mỉm cười với anh, rất lịch sự.","Cough syrup. Homemade. It works wonders.":"Siro ho. Tự làm. Hiệu quả tuyệt vời.","Cough syrup. My own recipe.":"Siro ho. Công thức của riêng tôi.","Books are expensive. Medicine is cheaper to make than to buy.":"Sách đắt lắm. Làm thuốc rẻ hơn mua thuốc.","The university laboratory. We are allowed, with permission.":"Phòng thí nghiệm trường đại học. Chúng tôi được phép, nếu có giấy phép.","A brown glass bottle with no label. Half empty.":"Một chai thủy tinh nâu không nhãn. Còn một nửa.","Faint bitter almonds.":"Thoang thoảng mùi hạnh nhân đắng.","Check the cap":"Kiểm tra nắp chai","A white crust around the rim of the cap.":"Một lớp cặn trắng quanh miệng nắp.","Officer.":"Cán bộ.","#? For homemade medicine?":"#? Cho thuốc tự làm á?","Then I will find another buyer.":"Vậy tôi sẽ tìm người mua khác.","Thank you, officer. Have a lovely day.":"Cảm ơn ngài. Chúc ngài một ngày tốt lành.","She picks up the bottle, smiles at you once more, and walks out without hurrying.":"Cô cầm lại cái chai, mỉm cười với anh thêm lần nữa, rồi bước ra không vội vã.","GLORY TO THE REPUBLIC! The students will not stop!":"VINH QUANG THUỘC VỀ CỘNG HÒA! Sinh viên sẽ không dừng lại!","You cannot arrest an idea!":"Các người không thể bắt một ý tưởng!","The man in the grey coat returns, almost smiling.":"Người đàn ông áo khoác xám quay lại, gần như mỉm cười.","The man in the grey coat returns. He does not sit. He does not smile.":"Người đàn ông áo khoác xám quay lại. Ông ta không ngồi. Ông ta không cười.","You did great, comrade.":"Anh làm tốt lắm, đồng chí.","Here is a little something for a young man like you.":"Đây là chút quà nhỏ dành cho một thanh niên như anh.","Glory to the Kingdom.":"Vinh quang thuộc về Vương quốc.","He taps the glass twice and leaves.":"Ông ta gõ hai lần lên tấm kính rồi rời đi.","Commended: Orpo rewards you. +100 credits":"Khen thưởng: Orpo thưởng cho anh. +100 credit","Lily Dang was here yesterday, yet you let her go.":"Lily Dang đã ở đây hôm qua, vậy mà anh để cô ta đi.","2 officers were poisoned yesterday, I wonder who did?":"Hôm qua hai sĩ quan bị đầu độc, không biết ai đã làm nhỉ?","He walks out without another word.":"Ông ta bước ra mà không nói thêm lời nào.","Gift from the Ministry: {0}.":"Quà từ Bộ: {0}.","I'm not buying your goods":'Tôi không mua hàng của anh',"That's my final price, can't do more":'Đó là giá cuối cùng của tôi, không thể hơn được nữa','Medal':'Huân chương','Army jacket':'Áo khoác quân đội','Flag':'Cờ','Flyer':'Tờ rơi','Vase':'Bình hoa','Gold jewel':'Trang sức vàng','Porcelain vase':'Bình sứ','NOTICE':'THÔNG BÁO','Regulations updated':'Quy định đã được cập nhật',"The Price Book and today's regulations have been updated. Please check them before you proceed.":'Sổ giá và các quy định hôm nay đã được cập nhật. Hãy kiểm tra chúng trước khi tiếp tục.','New in the Price Book: page 2, the treason list.':'Mới trong Sổ giá: trang 2, danh sách phản quốc.','New in the Price Book: page 3, the Great Cleanse rules.':'Mới trong Sổ giá: trang 3, quy tắc Đại Thanh trừng.','New in the Price Book: page 4, foreign goods and import receipts.':'Mới trong Sổ giá: trang 4, hàng ngoại và biên lai nhập khẩu.','Open the price book':'Mở sổ giá','Testing tools (only for testing purpose)':'Công cụ thử nghiệm (chỉ dùng để thử nghiệm)','Sorry to ask, is it possible for me to claim some money?':'Xin lỗi vì đã hỏi, liệu tôi có thể nhận một ít tiền được không?','My son is really sick and he needs medicine...':'Con trai tôi ốm nặng lắm và nó cần thuốc...','THANK YOU DEAR GOD!':'TẠ ƠN TRỜI!','A man sets a gold necklace on the tray with a receipt beneath it.':'Một người đàn ông đặt sợi dây chuyền vàng lên khay, bên dưới là tờ biên lai.','Imported gold. Paid and stamped. Everything is in order.':'Vàng nhập khẩu. Đã trả phí và đóng dấu. Mọi thứ đều đúng quy định.','I was nineteen! I only went for the free bread!':'Làm ơn! Tôi dại dột, tôi mới có 19 tuổi và họ có phát bánh mì miễn phí.','GLORY TO THE REPUBLIC!':'VINH QUANG THUỘC VỀ CỘNG HÒA!','GLORY TO THE REPUBLIC! You will all be remembered!':'VINH QUANG THUỘC VỀ CỘNG HÒA! Rồi tất cả các người sẽ bị nhớ mặt!','You cannot hold us forever!':'Các người không thể giam giữ chúng tôi mãi mãi!','This is an outrage! It is a perfectly good receipt!':'Thật là xúc phạm! Đây là một tờ biên lai hoàn toàn hợp lệ!','Ruin the Kingdom, disobey the rules, then we will protect you.':'Phá hoại Vương quốc, bất tuân luật lệ, rồi chúng tôi sẽ bảo vệ anh.','Continue':'Tiếp tục','Glory to the Kingdom!':'Vinh quang thuộc về Vương quốc!','In memory of the fifteen.':'Tưởng nhớ sự kiện 15 người thiệt mạng.','Click anywhere to enable sound':'Bấm vào bất kỳ đâu để bật âm thanh','Profit {0}':'Lợi nhuận {0}','Test ending: The Lapdog':'Thử kết thúc: Con cún của chính phủ','Test ending: The Brave':'Thử kết thúc: Kẻ dũng cảm','Test ending: The Failure':'Thử kết thúc: Kẻ thất bại'});
VI[PRO_A]="Gửi các công dân Vương quốc, chúng ta đã mất hơn một thập kỷ để lật đổ bọn Cộng hòa... Đồ cặn bã của thế gian. Quốc gia nào cũng có lúc thịnh lúc suy, Vương quốc của chúng ta cũng vậy. Nền kinh tế chưa được tốt, nhưng chúng ta đang khá lên! Chính phủ đã đồng ý mở các cửa hàng nhận hàng hóa của công dân để đổi lấy credit tươi mới, nóng hổi!"; VI[PRO_B]="Và anh bạn, nếu anh đang đọc những dòng này, anh là một trong những người may mắn sẽ làm việc tại Cửa sổ số 14 hoàn toàn mới của chúng ta! Anh sẽ có 5 ngày thử việc để chúng tôi xem anh làm việc thế nào trong hệ thống mới. Chúc may mắn và Vinh quang thuộc về Vương quốc!";
const MISS=window.__miss=new Set();
const LOW={}; Object.keys(VI).forEach(k=>{ LOW[k.toLowerCase()]=k; });
const nmv=x=>{ const k=LOW[x]; return k?VI[k].toLowerCase():x; };
const PAT=[
 [/^Citation: paid (\d+) above the Ministry rate$/,m=>'Cảnh cáo: trả vượt mức của Bộ '+m[1]],
 [/^Take it or leave it, (\d+) credits fresh$/,m=>'Lấy hay bỏ, '+m[1]+' credit, trả liền'],
 [/^You pay (\d+) credits\. The (.+) goes on the shelf\.$/,m=>'Anh trả '+m[1]+' credit. Món '+nmv(m[2])+' được xếp lên kệ.'],
 [/^You pay (\d+) credits and slide the (.+) under the counter\. The Ministry will hear of this\.$/,m=>'Anh trả '+m[1]+' credit và trượt món '+nmv(m[2])+' xuống dưới quầy. Bộ sẽ biết chuyện này.'],
 [/^Around (\d+) credits were issued away in a few days\.\.\.$/,m=>'Khoảng '+m[1]+' credit đã bị phát ra ngoài chỉ trong vài ngày...'],
 [/^arrested, \+(\d+)$/,m=>'đã bắt, +'+m[1]]
];
function T(s){
  if(LANG!=='vi'||typeof s!=='string'||!s) return s;
  let v=VI[s]; if(v!==undefined) return v;
  let m=s.match(/^(\d+)(\D.*)$/s); if(m){ v=VI['#'+m[2]]; if(v!==undefined) return m[1]+v; }
  m=s.match(/^(\d+) credits?$/); if(m) return m[1]+' credit';
  for(const [re,fn] of PAT){ const mm=s.match(re); if(mm) return fn(mm); }
  if(/[A-Za-z]{3}/.test(s)) MISS.add(s);
  return s;
}
function F(tpl,...a){ return T(tpl).replace(/\{(\d+)\}/g,(m,i)=>a[+i]); }
const NAMEMAP={'Toy medal':'Medal','Costume jacket':'Army jacket','Pageant flag':'Flag','Film uniform':'Army uniform','Stage flyer':'Flyer'};
function showName(c){ const n=NAMEMAP[c.itemName]||c.itemName; return n.replace(/\s*\(.*\)$/,''); }
const NEWCAP_VI={"2": "CÁCH MẠNG. 15 người chết khi biểu tình chống chính quyền hối lộ. Dự kiến giới nghiêm khi bất ổn lan rộng.", "3": "ĐẠI THANH TRỪNG! Quét vân tay trở thành bắt buộc. Công dân sẽ bị sàng lọc lý lịch đảng phái.", "4": "ỦNG HỘ HÀNG HÓA CỦA CHÚNG TA! Hàng ngoại được kiểm tra trước khi vào Vương quốc. Kiểm tra gắt gao hơn.", "5": "HỖN LOẠN Ở QUẢNG TRƯỜNG! Năm kẻ kích động bị bắt sau khi phát tán tuyên truyền chống chính quyền."}, ENDCAP_VI={"lapdog": "Anh đã tuân thủ luật lệ. Chính phủ thưởng cho anh bản hợp đồng cửa hàng trong một thời gian có hạn, với khẩu phần tốt hơn, lương dưới mức tối thiểu và sự giám sát liên tục. Anh sống sót lâu hơn một chút trước khi đất nước sụp đổ.", "brave": "Chính phủ đã bắt anh sau khi anh thách thức luật lệ của họ. Sự biến mất của anh thổi bùng cuộc cách mạng. Khắp đất nước, người ta đứng lên, được truyền cảm hứng từ lòng dũng cảm của anh. Một cuộc nội chiến đã bắt đầu.", "failure": "Anh là một kẻ thất bại. Anh đã thất bại với cơ hội duy nhất được trao. Anh không thuộc về xã hội này. Sự tồn tại của anh sẽ không được ghi nhớ. Vì nhận quá nhiều hàng giả và hàng hỏng, anh đã làm kiệt quệ cửa hàng do Nhà nước tài trợ."};
function applyStatic(){
  document.querySelectorAll('[data-t]').forEach(el=>{ if(el.dataset.en===undefined) el.dataset.en=el.textContent; el.textContent=T(el.dataset.en); });
  [['#item','Inspect'],['#book','Price book'],['#directive',"Today's directive"]].forEach(([q,k])=>{ const e=$(q); if(e) e.dataset.tip=T(k); });
  const sb=$('#b-snd'); if(sb) sb.textContent=T('Sound: '+(muted?'off':'on'));
  document.documentElement.lang=LANG==='vi'?'vi':'en';
  document.querySelectorAll('#m-lang .lg').forEach(e=>e.classList.toggle('on',e.dataset.l===LANG));
}


/* ---------- audio ---------- */
let AC=null, muted=false;
function ac(){ if(!AC){ try{AC=new (window.AudioContext||window.webkitAudioContext)()}catch(e){} } return AC }
function tone(f,d,type='square',v=0.03,delay=0){ const a=ac(); if(!a||muted) return; try{ const t=a.currentTime+delay,o=a.createOscillator(),g=a.createGain(); o.type=type;o.frequency.setValueAtTime(f,t);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(0.0001,t+d);o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+d+.02);}catch(e){} }
const base={click:()=>{},coin:()=>{tone(880,.08,'square',.04);tone(1320,.14,'square',.04,.08)},buzz:()=>tone(110,.3,'sawtooth',.05),stamp:()=>tone(70,.2,'triangle',.14),test:()=>tone(300,.09,'triangle',.06),blip:()=>tone(170+Math.random()*60,.03,'square',.011),cock:()=>{tone(900,.03,'square',.08);tone(560,.06,'square',.08,.09)},shot:()=>{const a=ac(); if(!a||muted) return; const t=a.currentTime, s=a.createBufferSource(); s.buffer=noiseBuf(a,.6,'white'); const f=a.createBiquadFilter(); f.type='lowpass'; f.frequency.setValueAtTime(6000,t); f.frequency.exponentialRampToValueAtTime(260,t+.4); const g=a.createGain(); g.gain.setValueAtTime(.55,t); g.gain.exponentialRampToValueAtTime(.001,t+.5); s.connect(f); f.connect(g); g.connect(a.destination); s.start(t); tone(62,.45,'triangle',.3); tone(1200,.04,'square',.05)},items:()=>tone(70,.2,'triangle',.14),pickup:()=>tone(660,.06,'triangle',.05),openwindow:()=>{tone(90,.4,'triangle',.12);tone(140,.5,'triangle',.08,.15)},paper:()=>tone(1100,.05,'triangle',.03),print:()=>{tone(420,.06,'square',.04);tone(520,.06,'square',.04,.09)},boots:()=>{for(let i=0;i<5;i++) tone(75+Math.random()*25,.12,'triangle',.14,i*.17)},slam:()=>{tone(55,.5,'triangle',.22);tone(110,.2,'square',.05)}};

/* custom sound files: put data URIs in ASSETS.sfx under these names: click, coin, buzz, stamp, test, blip, ambience */
const BUFS={};
function b64buf(uri){ const raw=atob(uri.split(',')[1]); const u=new Uint8Array(raw.length); for(let i=0;i<raw.length;i++) u[i]=raw.charCodeAt(i); return u.buffer; }
async function loadCustom(){ const a=ac(); if(!a||BUFS.__go) return; BUFS.__go=true; for(const [k,v] of Object.entries(A.sfx||{})){ try{ BUFS[k]=await a.decodeAudioData(b64buf(v)); }catch(e){} } if(BUFS.ambience) startLoop(); }
function playCustom(name){ const a=ac(), b=BUFS[name]; if(!a||!b) return false; if(muted) return true; try{ const src=a.createBufferSource(), g=a.createGain(); src.buffer=b; g.gain.value=name==='blip'?.4:.9; src.connect(g); g.connect(a.destination); src.start(); }catch(e){} return true; }
const sfx={}; Object.keys(base).forEach(k=>{ sfx[k]=()=>{ if(!playCustom(k)) base[k](); }; });
function startLoop(){ const a=ac(); if(!a||!AMB.master||AMB.loop) return; const src=a.createBufferSource(), g=a.createGain(); src.buffer=BUFS.ambience; src.loop=true; g.gain.value=1.2325; src.connect(g); g.connect(AMB.master); src.start(); AMB.loop=src; }

/* ---------- ambience: a cold room, a crowd outside, nobody coming to help ---------- */
const AMB={on:false,master:null,loop:null,verb:null};
function noiseBuf(a,sec,color){ const n=Math.floor(a.sampleRate*sec), b=a.createBuffer(1,n,a.sampleRate), d=b.getChannelData(0); let last=0; for(let i=0;i<n;i++){ const w=Math.random()*2-1; if(color==='brown'){ last=(last+0.02*w)/1.02; d[i]=last*3.5; } else d[i]=w; } return b; }
function noiseSrc(a,color,sec=6){ const s=a.createBufferSource(); s.buffer=noiseBuf(a,sec,color); s.loop=true; s.start(); return s; }
function lfo(a,freq,depth,target){ const o=a.createOscillator(), g=a.createGain(); o.frequency.value=freq; g.gain.value=depth; o.connect(g); g.connect(target); o.start(); return o; }
function makeVerb(a){ const len=a.sampleRate*2.6, b=a.createBuffer(2,len,a.sampleRate); for(let c=0;c<2;c++){ const d=b.getChannelData(c); for(let i=0;i<len;i++) d[i]=(Math.random()*2-1)*Math.pow(1-i/len,2.6); } const cv=a.createConvolver(); cv.buffer=b; return cv; }
function out(a,node,pan,dry,wet){ // route a sound through the "far away" bus
  const p=a.createStereoPanner?a.createStereoPanner():null; if(p){ p.pan.value=pan; node.connect(p); } const src=p||node;
  const d=a.createGain(); d.gain.value=dry; src.connect(d); d.connect(AMB.master);
  const w=a.createGain(); w.gain.value=wet; src.connect(w); w.connect(AMB.verb); }
function startAmbience(){
  const a=ac(); if(!a) return; if(AMB.on){ AMB.paused=false; ambTo(1,1.5); return; } AMB.on=true;
  const m=a.createGain(); m.gain.value=0; m.connect(a.destination); AMB.master=m;
  m.gain.linearRampToValueAtTime(muted?0:1,a.currentTime+3);
  if(BUFS.ambience) startLoop();
}
function schedule(){
  const tense=(typeof S!=='undefined'&&S&&S.day>=2);
  const wait=tense?1500+Math.random()*4200:1800+Math.random()*5200;
  setTimeout(()=>{ if(!AMB.on) return; if(AMB.paused){ schedule(); return; } try{ const r=Math.random(); if(tense&&Math.random()<.24){ const q=Math.random(); const kk=(S.day>=3)?[.3,.5]:[.45,.8]; if(q<kk[0]) murmur(true); else if(q<kk[1]) siren(); else crack(); } else if(r<.38) murmur(); else if(r<.62) steps(); else if(r<.76) thud(); else if(r<.86) clank(); else if(r<.93) cough(); else speaker(); }catch(e){} schedule(); },wait);
}
// a passer-by saying something we can't quite make out
function murmur(loud){
  const a=ac(); if(!a||muted) return; const t0=a.currentTime+.05, n=loud?2+Math.floor(Math.random()*3):3+Math.floor(Math.random()*5), base=loud?150+Math.random()*90:95+Math.random()*110, pan=Math.random()*1.6-.8;
  const o=a.createOscillator(); o.type='sawtooth'; const bus=a.createGain(); bus.gain.value=0;
  const f1=a.createBiquadFilter(); f1.type='bandpass'; f1.Q.value=5; const f2=a.createBiquadFilter(); f2.type='bandpass'; f2.Q.value=7; const lp=a.createBiquadFilter(); lp.type='lowpass'; lp.frequency.value=1100;
  o.connect(f1); o.connect(f2); f1.connect(lp); f2.connect(lp); lp.connect(bus); out(a,bus,pan,.25,.7);
  let t=t0; for(let i=0;i<n;i++){ const d=.11+Math.random()*.16; o.frequency.setTargetAtTime(base*(.85+Math.random()*.4),t,.03); f1.frequency.setTargetAtTime(380+Math.random()*320,t,.03); f2.frequency.setTargetAtTime(1000+Math.random()*900,t,.03);
    bus.gain.setTargetAtTime(loud?.11:.05,t,.02); bus.gain.setTargetAtTime(.008,t+d*.7,.03); t+=d+.02; if(Math.random()<.2) t+=.15; }
  bus.gain.setTargetAtTime(0,t,.05); o.start(t0); o.stop(t+.4);
}
// someone dragging their feet past the window
function steps(){
  const a=ac(); if(!a||muted) return; const n=4+Math.floor(Math.random()*6), dir=Math.random()<.5?-1:1; let t=a.currentTime+.05;
  for(let i=0;i<n;i++){ const s=a.createBufferSource(); s.buffer=noiseBuf(a,.12,'white'); const f=a.createBiquadFilter(); f.type='bandpass'; f.frequency.value=180+Math.random()*80; f.Q.value=1.2; const g=a.createGain(); g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(.12,t+.012); g.gain.exponentialRampToValueAtTime(.0005,t+.13);
    s.connect(f); f.connect(g); out(a,g,dir*(-.8+1.6*i/n),.5,.35); s.start(t); t+=.5+Math.random()*.12; }
}
// something heavy and metal, far off
function thud(){
  const a=ac(); if(!a||muted) return; const t=a.currentTime+.05, o=a.createOscillator(), g=a.createGain(); o.type='sine'; o.frequency.setValueAtTime(95,t); o.frequency.exponentialRampToValueAtTime(34,t+.45); g.gain.setValueAtTime(.2,t); g.gain.exponentialRampToValueAtTime(.0005,t+.6);
  o.connect(g); out(a,g,Math.random()*1.4-.7,.25,.9); o.start(t); o.stop(t+.7);
}
function clank(){
  const a=ac(); if(!a||muted) return; const t=a.currentTime+.05, g=a.createGain(); g.gain.setValueAtTime(.05,t); g.gain.exponentialRampToValueAtTime(.0003,t+1.2);
  [1,2.76,5.4].forEach((m,i)=>{ const o=a.createOscillator(); o.type='sine'; o.frequency.value=230*m; const og=a.createGain(); og.gain.value=[1,.5,.25][i]; o.connect(og); og.connect(g); o.start(t); o.stop(t+1.3); });
  out(a,g,Math.random()*1.6-.8,.2,.9);
}
// somebody in the queue, coughing
function cough(){
  const a=ac(); if(!a||muted) return; let t=a.currentTime+.05; const k=1+Math.floor(Math.random()*3), pan=Math.random()*1.4-.7;
  for(let i=0;i<k;i++){ const s=a.createBufferSource(); s.buffer=noiseBuf(a,.25,'white'); const f=a.createBiquadFilter(); f.type='bandpass'; f.frequency.value=900; f.Q.value=.9; const g=a.createGain(); g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(.09,t+.02); g.gain.exponentialRampToValueAtTime(.0005,t+.2);
    s.connect(f); f.connect(g); out(a,g,pan,.35,.6); s.start(t); t+=.28+Math.random()*.15; }
}
// the State, addressing the street through a bad loudspeaker
function speaker(){
  const a=ac(); if(!a||muted) return; const t0=a.currentTime+.05, dur=4+Math.random()*3, o=a.createOscillator(); o.type='sawtooth'; o.frequency.value=118;
  const f=a.createBiquadFilter(); f.type='bandpass'; f.Q.value=2.2; f.frequency.value=900; const lp=a.createBiquadFilter(); lp.type='lowpass'; lp.frequency.value=1500; const g=a.createGain(); g.gain.value=0;
  const sh=a.createWaveShaper(); const cv=new Float32Array(256); for(let i=0;i<256;i++){ const x=i/128-1; cv[i]=Math.tanh(x*3); } sh.curve=cv;
  o.connect(sh); sh.connect(f); f.connect(lp); lp.connect(g); out(a,g,Math.random()*1.2-.6,.15,.95);
  g.gain.linearRampToValueAtTime(.045,t0+.3); let t=t0+.3; while(t<t0+dur){ const d=.15+Math.random()*.3; o.frequency.setTargetAtTime(105+Math.random()*30,t,.04); f.frequency.setTargetAtTime(500+Math.random()*1100,t,.05); g.gain.setTargetAtTime(Math.random()<.18?.004:.045,t,.04); t+=d; }
  g.gain.linearRampToValueAtTime(0,t0+dur+.4); o.start(t0); o.stop(t0+dur+.6);
}
// a siren wailing somewhere across the city
function siren(){
  const a=ac(); if(!a||muted) return; const t=a.currentTime+.05, dur=7+Math.random()*3, o=a.createOscillator(), g=a.createGain(), lp=a.createBiquadFilter(); o.type='triangle'; o.frequency.value=520; lp.type='lowpass'; lp.frequency.value=800;
  lfo(a,.28,110,o.frequency); g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(.022,t+2.5); g.gain.linearRampToValueAtTime(0,t+dur);
  o.connect(lp); lp.connect(g); out(a,g,Math.random()*1.4-.7,.2,.95); o.start(t); o.stop(t+dur+.2);
}
// one flat distant crack
function crack(){
  const a=ac(); if(!a||muted) return; const t=a.currentTime+.05, s=a.createBufferSource(); s.buffer=noiseBuf(a,.3,'white'); const f=a.createBiquadFilter(); f.type='bandpass'; f.frequency.value=1600; f.Q.value=.6; const g=a.createGain(); g.gain.setValueAtTime(.16,t); g.gain.exponentialRampToValueAtTime(.0005,t+.12);
  s.connect(f); f.connect(g); out(a,g,Math.random()*1.6-.8,.15,1); s.start(t);
}
// paper rustle and a crowd swelling, for the front page
function newsSound(){
  const a=ac(); if(!a||muted) return; const t=a.currentTime+.05;
  const r=a.createBufferSource(); r.buffer=noiseBuf(a,1.8,'white'); const hf=a.createBiquadFilter(); hf.type='highpass'; hf.frequency.value=2800; const rg=a.createGain();
  rg.gain.setValueAtTime(0,t); for(let i=0;i<14;i++) rg.gain.linearRampToValueAtTime(Math.random()*.05,t+.1+i*.1); rg.gain.linearRampToValueAtTime(0,t+1.7); r.connect(hf); hf.connect(rg); rg.connect(a.destination); r.start(t);
}
function ambTo(v,tc){ if(AMB.master&&AC) AMB.master.gain.setTargetAtTime(muted?0:v,AC.currentTime,tc); }
document.addEventListener('visibilitychange',()=>{ const a=AC; if(!a) return; if(document.hidden) a.suspend(); else a.resume(); });

/* ---------- silhouettes ---------- */
const SIL={
1:'<path d="M10 480C20 385 70 335 150 308L250 308C330 335 380 385 390 480Z"/><ellipse cx="200" cy="215" rx="88" ry="100"/><path d="M110 285Q200 345 290 285L305 335Q200 375 95 335Z"/>',
2:'<path d="M30 480C40 395 80 340 150 312L250 312C320 340 360 395 370 480Z"/><ellipse cx="200" cy="222" rx="66" ry="78"/><ellipse cx="200" cy="292" rx="78" ry="38"/><path d="M262 285L310 308L270 318Z"/>',
3:'<path d="M0 480C5 380 60 330 140 308L260 308C340 330 395 380 400 480Z"/><rect x="170" y="268" width="60" height="44"/><ellipse cx="200" cy="232" rx="60" ry="70"/><path d="M128 205Q135 150 200 148Q265 150 272 205L322 212Q324 224 304 224L128 224Z"/>',
4:'<g transform="rotate(-3 200 300)"><path d="M40 480C50 400 90 348 155 322L245 322C310 348 350 400 360 480Z"/><rect x="176" y="286" width="48" height="40"/><ellipse cx="200" cy="248" rx="54" ry="64"/><ellipse cx="200" cy="196" rx="96" ry="14"/><path d="M146 196Q146 128 200 126Q254 128 254 196Z"/></g>',
5:'<path d="M20 480C25 400 60 350 130 332Q200 322 270 332C340 350 375 400 380 480Z"/><ellipse cx="205" cy="268" rx="58" ry="66"/><circle cx="205" cy="196" r="30"/><ellipse cx="205" cy="306" rx="52" ry="22"/>'
};

/* ---------- Day 1 customers ---------- */
const NO_DOCS='I have nothing to show you.';
const DAY1=[
 { sil:1, sprite:'necklace', itemName:'Gold necklace', worth:150, trueValue:150, fake:false, rule:50, acceptAt:90,
   narr:'A hooded figure shoves something through the slot.',
   opening:'Screw this economy. I have to sell my dead mother\'s gold jewelry.',
   questions:[
    {key:'item',label:'What are you giving?',you:'What are you giving?',reply:'My mother\'s gold necklace. She wore it every Sunday. Eighteen karat, she always said.'},
    {key:'why',label:'Why are you selling it?',you:'What are you selling it for?',reply:'For money! For food! For heater!'},
    {key:'where',label:'Where did you get this?',you:'Where did you get this?',reply:'It was hers. A wedding gift, before the Ministry took my father\'s shop.'},
    {key:'docs',label:'Do you have any documents?',you:'Do you have any documents?',reply:'She is dead. The necklace is all I have of her.'}],
   tests:[
    {label:'Look closely',res:'Warm colour. Light wear.'},
    {label:'Check the hallmark',res:'Stamped 750. State assay mark.'},
    {label:'Acid test',res:'No reaction.'},
    {label:'Weigh it',res:'38 grams.'}],
   haggle:a=>`${a}??? Others will take at least 110!`,
   takeYes:true, takeReply:'Fine... cheeky bastard.',
   refuseReply:'Then I will take it somewhere else.',
   acceptHigh:'Deal! Thank you, thank you.', insult:a=>`${a}? That is an insult. Even thieves pay more.` },

 { sil:2, sprite:'rustynecklace', itemName:'Gold jewel (rusty)', worth:150, trueValue:15, fake:true, rule:5, acceptAt:36,
   narr:'A woman slides a tarnished jewel across the tray.',
   opening:'How much are you taking these?',
   questions:[
    {key:'item',label:'What are you giving?',you:'What are you giving?',reply:'Gold! Real gold. Look at it.'},
    {key:'why',label:'Why are you selling it?',you:'Why are you selling it?',reply:'Rent is due. My landlord does not take excuses.'},
    {key:'where',label:'Where did you get this?',you:'Where did you get this?',reply:'My husband bought it before the factory closed.'},
    {key:'docs',label:'Do you have any documents?',you:'Do you have any documents?',reply:'Receipts? Who keeps receipts?'}],
   tests:[
    {label:'Look closely',res:'Rust flakes on the links.'},
    {label:'Check the hallmark',res:'No hallmark.'},
    {label:'Acid test',res:'Fizzes green.'},
    {label:'Weigh it',res:'11 grams.'}],
   haggle:a=>`${a}?! This is real gold, you crook!`,
   takeYes:true, takeReply:'...alright.',
   refuseReply:'Then I will find somebody who is not blind.',
   acceptHigh:'Gold for rent. Deal.', insult:a=>`${a}? That is an insult.`,
   confront:{label:'This gold jewel has rust. Is this bronze?',you:'This gold jewel has rust. Is this bronze?',reply:'What? Hell no!',
     pay:{label:'Pay them 5 credits',amount:5,reply:'...alright.'}, refuse:{label:'Refuse',reply:'Then I will find somebody who is not blind.'}} },

 { sil:3, sprite:'radio', itemName:'Radio (missing parts)', worth:90, trueValue:15, fake:true, rule:5, acceptAt:36,
   narr:'A man slaps a radio onto the tray.',
   opening:'This fuckass country! They give millions to the military while their own citizens are starving!',
   questions:[
    {key:'item',label:'What are you giving?',you:'What are you giving?',reply:'A radio. Works perfect. Seven years of faithful service.'},
    {key:'why',label:'Why are you selling it?',you:'Why are you selling it?',reply:'Because I would rather eat than listen to their marching music.'},
    {key:'where',label:'Where did you get this?',you:'Where did you get this?',reply:'Bought it before the import ban. Paid full price, like an idiot.'},
    {key:'docs',label:'Do you have any documents?',you:'Do you have any documents?',reply:'Documents for a radio? What is this, a border crossing?'}],
   tests:[
    {label:'Look closely',res:'Back panel loose. Parts missing inside.'},
    {label:'Check the markings',res:'Model R-40. Civilian bands.'},
    {label:'Power it on',res:'Silent. One faint click.'}],
   confront:{label:'This radio is missing parts. Is it broken?',you:'This radio is missing parts. Is it broken?',reply:'What? It worked yesterday!',
     pay:{label:'Pay them 5 credits',amount:5,reply:'...alright.'}, refuse:{label:'Refuse',reply:'Then I will find somebody who is not blind.'}},
   haggle:a=>`${a}?? For a working radio?? I want 90!`,
   takeYes:false, takeReply:'Give me back my radio. Bullshit.',
   refuseReply:'This is a scam shop.',
   acceptHigh:'Fine. Deal. Robbers.', insult:a=>`${a}? Are you serious?` },

 { sil:4, sprite:null, itemName:'(nothing)', worth:0, trueValue:0, fake:false, rule:0, acceptAt:0,
   narr:'A man steps up to the window. His hands are empty.',
   opening:'Sorry to ask, is it possible for me to claim some money?',
   script:['My son is really sick and he needs medicine...'], scriptFlag:'what',
   questions:[
    {key:'sell',label:'Are you selling something?',you:'Are you selling something?',reply:'I have nothing left. I sold the bed last month.'},
    {key:'docs',label:'Do you have any documents?',you:'Do you have any documents?',reply:'A doctor\'s note. The clinic would not stamp it. No money for the stamp.'}],
   decisions:true },

 { sil:5, sprite:'vase', itemName:'Vase (replica)', worth:240, trueValue:20, fake:true, rule:7, acceptAt:240,
   narr:'An old woman sets a vase on the tray with both hands, as if it were asleep.',
   opening:'This vase has been in my family two hundred years. It is worth a fortune.',
   questions:[
    {key:'item',label:'What are you giving?',you:'What are you giving?',reply:'A vase. Hand-painted. An antique.'},
    {key:'why',label:'Why are you selling it?',you:'Why are you selling it?',reply:'I am old. I would like to eat before I die.'},
    {key:'where',label:'Where did you get this?',you:'Where did you get this?',reply:'It was my grandmother\'s. And her mother\'s before her.'},
    {key:'docs',label:'Do you have any documents?',you:'Do you have any documents?',reply:'The papers burned in the fire of \'71.'}],
   tests:[
    {label:'Look closely',res:'Red-gold glaze. Star motif.'},
    {label:'Turn it over',res:'FACTORY No. 9, 1984.'},
    {label:'Tap it',res:'Dull thunk.'}],
   haggle:a=>`${a}?! My grandmother would curse you.`,
   takeYes:true, takeReply:'...Fine. Take it. Just take it.',
   refuseReply:'Then I will take it home. At least it holds flowers.',
   acceptHigh:'Pleasure doing business with you.', insult:a=>`${a}? You jest.`,
   confront:{label:'The base says FACTORY No. 9. This is a replica.',you:'The base says FACTORY No. 9. This is a replica.',reply:'...That cannot be. It was my grandmother\'s!',
     pay:{label:'Pay them 7 credits',amount:7,reply:'...Fine. Take it. It is only a vase.'}, refuse:{label:'Refuse',reply:'Then I will take it home. At least it holds flowers.'}} }
];


const BOOK1=[
 {img:'necklace',name:'Gold necklace',rows:[
   ['Real gold, hallmarked',150,'Stamp 750 on the clasp. Acid test: no reaction.'],
   ['Real gold, damaged',100,'Bent or cracked clasp, broken links. Pay the damaged rate or refuse.'],
   ['Gilt or bronze jewelry',15,'Rust, green on acid, no hallmark. Not gold.']]},
 {img:'radio',name:'Radio',rows:[
   ['Working',90,'Must power on, and nothing missing inside.'],
   ['Dead, or missing parts',15,'No sound, or parts gone from the chassis. Pay the damaged rate or refuse.']]},
 {img:'vase',name:'Vase',rows:[
   ['Antique, hand-painted',240,'Maker\'s mark under the base. Rings when tapped.'],
   ['Antique, damaged',80,'Chipped or glued handle, or a crack. Pay the damaged rate or refuse.'],
   ['Factory replica',20,'Stamped FACTORY on the base. Dull when tapped.']]},
 {img:'cans',name:'Canned food',rows:[
   ['Set of three, sealed',12,'Check seals and dates.'],
   ['Empty cans',1,'Shake one. A hollow rattle means empty.']]},
 {img:'blanket',name:'Wool blanket',rows:[
   ['Rolled, clean',30,'No moth damage.'],
   ['Filthy or moth-eaten',6,'Soot, oil, damp, moth holes. Pay the damaged rate or refuse.']]},
 {img:'cigarettes',name:'Cigarettes',rows:[
   ['Full carton, sealed packs',25,'Sealed packs only.'],
   ['Counterfeit',5,'Tea leaves or sawdust. Unroll one.']]},
 {img:'pills',name:'Medicine',rows:[
   ['Sealed bottle',60,'State crest, safety seal, batch number. Expiry date matters.'],
   ['Chalk tablets',3,'Crush one. Chalk dust is not medicine.']]},
 {img:'redbook',name:'Party handbook',rows:[['State Press, current edition',15,'Publisher and release date on the first page.'],['No publisher or release date',3,'Not a State Press edition. Pay the damaged rate or refuse.']]},
 {img:'photo',name:'Old photograph',rows:[['Sentimental value only',3,'']]}
].map(g=>({img:g.img,name:g.name,rows:g.rows.map(r=>[r[0],r[1],Math.round(r[1]/3),r[2]])}));


/* ---------- more silhouettes + guards ---------- */
Object.assign(SIL,{
6:'<path d="M50 480C58 400 92 346 152 322L248 322C308 346 342 400 350 480Z"/><rect x="178" y="285" width="44" height="42"/><ellipse cx="200" cy="245" rx="50" ry="62"/><path d="M150 218Q156 170 200 170Q244 170 250 218Q200 192 150 218Z"/>',
7:'<path d="M40 480C48 395 85 342 150 316L250 316C315 342 352 395 360 480Z"/><rect x="180" y="282" width="40" height="40"/><ellipse cx="200" cy="232" rx="56" ry="68"/><path d="M142 232Q130 170 200 160Q270 170 258 232L272 330Q250 300 248 270L152 270Q150 300 128 330Z"/>',
8:'<path d="M5 480C12 392 62 338 142 312L258 312C338 338 388 392 395 480Z"/><rect x="172" y="272" width="56" height="42"/><ellipse cx="200" cy="236" rx="58" ry="66"/><path d="M134 208Q140 156 200 154Q260 156 266 208L302 216L302 224L134 224Z"/>',
9:'<path d="M30 480C40 400 80 346 148 320L252 320C320 346 360 400 370 480Z"/><rect x="180" y="286" width="40" height="38"/><ellipse cx="200" cy="238" rx="54" ry="64"/><circle cx="200" cy="162" r="26"/><path d="M146 240Q140 190 200 180Q260 190 254 240Q230 205 200 205Q170 205 146 240Z"/>',
10:'<path d="M0 480C6 388 58 334 140 310L260 310C342 334 394 388 400 480Z"/><rect x="172" y="272" width="56" height="42"/><ellipse cx="200" cy="238" rx="56" ry="66"/><path d="M138 206Q142 150 200 148Q258 150 262 206L262 214L138 214Z"/><path d="M128 214L272 214L302 232L98 232Z"/>'
});
const GUARD='<svg viewBox="0 0 400 520" aria-hidden="true"><path d="M0 520C8 400 60 340 140 316L260 316C340 340 392 400 400 520Z"/><rect x="170" y="276" width="60" height="44"/><ellipse cx="200" cy="238" rx="54" ry="64"/><path d="M130 206Q134 140 200 138Q266 140 270 206Z"/><path d="M118 206L282 206L306 226L94 226Z"/><rect x="318" y="190" width="14" height="330" transform="rotate(7 325 350)"/></svg>';

/* ---------- Day 2 customers ---------- */
const DAY2=[
 // 1
 { sil:3, sprite:'blanket', itemName:'Wool blanket', worth:30, trueValue:30, fake:false, rule:10, acceptAt:20,
   narr:'A man in a heavy coat hauls a rolled blanket onto the tray.',
   opening:'Wool. Real wool. Not one moth hole in it.',
   questions:[
    {key:'item',label:'What are you giving?',you:'What are you giving?',reply:'A blanket. Plain wool, no marks on it.'},
    {key:'why',label:'Why are you selling it?',you:'Why are you selling it?',reply:'Winter is coming, and I would rather eat than be warm.'},
    {key:'where',label:'Where did you get this?',you:'Where did you get this?',reply:'My brother left it. He does not need it anymore.'},
    {key:'docs',label:'Do you have any documents?',you:'Do you have any documents?',reply:'Papers for a blanket?'}],
   tests:[{label:'Look closely',res:'Tight weave. A few darns.'},{label:'Smell it',res:'Smells of cedar.'},{label:'Hold it to the light',res:'No thin patches.'}],
   haggle:a=>`${a}? Winter is coming, friend!`, takeYes:true, takeReply:'Fine. Take it.', refuseReply:'Cold it is, then.', acceptHigh:'Bless you. Thank you.', insult:a=>`${a}? That is an insult.` },

 // 2
 { sil:6, sprite:'flyer', itemName:'Folded flyer', cat:'look', treason:true, worth:0, trueValue:0, fake:false, rule:0, acceptAt:10,
   narr:'A young man glances over his shoulder, then slides a folded sheet through the slot.',
   opening:'Quietly, please. What will you give me for this? I only need bus fare.',
   questions:[
    {key:'item',label:'What are you giving?',you:'What are you giving?',reply:'A flyer. Only paper. People hand them out in the square.'},
    {key:'why',label:'Why are you selling it?',you:'Why are you selling it?',reply:'Bus fare. My mother lives across the river.'},
    {key:'where',label:'Where did you get this?',you:'Where did you get this?',reply:'A man in the square gave me a stack. Said they sell.'},
    {key:'docs',label:'Do you have any documents?',you:'Do you have any documents?',reply:'It is a flyer. It does not come with papers.'}],
   tests:[{label:'Look closely',res:'Red ink. Black eagle, broken wing.'},{label:'Read the print',res:'THE FIFTEEN WILL NOT BE FORGOTTEN.'},{label:'Look for a print mark',res:'No Ministry print mark.'},{label:'Feel the paper',res:'Cheap paper. Ink smudges.'}],
   haggle:a=>`${a}? That is not even a ticket!`, takeYes:true, takeReply:'...fine. Anything.', refuseReply:'Then I will find someone braver.', acceptHigh:'Thank you. Thank you. Quickly.', insult:a=>`${a}?`,
   letGoReply:'Thank you. I will not forget this.', letGoNarr:'He tucks the flyer into his coat and hurries off.', arrestLine:'No, please! I only wanted bus fare! My mother...' },

 // 3  genuine antique vase
 { sil:5, sprite:'vase', itemName:'Antique vase (chipped handle)', worth:240, trueValue:80, fake:true, rule:27, acceptAt:70,
   narr:'An elderly woman sets a vase on the tray with great care, then steps back as if it might bite.',
   opening:'My grandmother\'s. I would rather keep it. But the rent does not care what I would rather.',
   questions:[
    {key:'item',label:'What are you giving?',you:'What are you giving?',reply:'A vase. Hand-painted, with the family star.'},
    {key:'why',label:'Why are you selling it?',you:'Why are you selling it?',reply:'The landlord took the stove. Winter is coming.'},
    {key:'where',label:'Where did you get this?',you:'Where did you get this?',reply:'She carried it out of the old city in her arms.'},
    {key:'docs',label:'Do you have any documents?',you:'Do you have any documents?',reply:'There is a maker\'s mark on the base. That is all the paper it has.'}],
   tests:[{label:'Look closely',res:'Handle glued back. Seam visible.'},{label:'Turn it over',res:'Orlov Kilns, 1921. Hand-inked.'},{label:'Tap it',res:'Clear, long ring.'}],
   haggle:a=>`${a}?! It is worth ten times that!`, takeYes:true, takeReply:'...fine. Fine. Take it.', refuseReply:'Then I keep it. I will freeze beside it.', acceptHigh:'Thank you. Thank you. Handle it gently.', insult:a=>`${a}? You jest.` },

 // 4
 { sil:7, sprite:'uniform', itemName:'Costume jacket', cat:'look', treason:false, worth:30, trueValue:30, fake:true, rule:10, acceptAt:60,
   narr:'A young woman lays an olive jacket across the tray, smoothing the sleeves.',
   opening:'Army jacket. The real thing. What is it worth to you?',
   questions:[
    {key:'item',label:'What are you giving?',you:'What are you giving?',reply:'A soldier\'s jacket. My uncle\'s, from the border war.'},
    {key:'why',label:'Why are you selling it?',you:'Why are you selling it?',reply:'Rent. Always rent.'},
    {key:'where',label:'Where did you get this?',you:'Where did you get this?',reply:'His trunk. He left it to me.'},
    {key:'docs',label:'Do you have any documents?',you:'Do you have any documents?',reply:'A jacket does not come with papers.'}],
   tests:[{label:'Look closely',res:'Olive wool. Gold buttons.'},{label:'Check the buttons',res:'Plastic buttons.'},{label:'Check the lining',res:'CAPITAL THEATRE PLAYERS, No. 41.'},{label:'Check the insignia',res:'Glued patches. No serial.'}],
   haggle:a=>`${a}? For a soldier's jacket?`, takeYes:true, takeReply:'...fine. Take it.', refuseReply:'Then I will try the market.', acceptHigh:'Pleasure doing business.', insult:a=>`${a}? You jest.`,
   letGoReply:'Fine. Keep your credits.', letGoNarr:'She folds the jacket over her arm and leaves.', arrestLine:'What? It is a costume! Look at the label!' },

 // 5
 { sil:2, sprite:'flag', itemName:'Cloth flag', cat:'look', treason:true, worth:0, trueValue:0, fake:false, rule:0, acceptAt:15,
   narr:'A woman unrolls a flag on the tray, then rolls it halfway back, as if embarrassed.',
   opening:'It is only cloth. Good cotton. What will you give me?',
   questions:[
    {key:'item',label:'What are you giving?',you:'What are you giving?',reply:'A flag. It was my husband\'s.'},
    {key:'why',label:'Why are you selling it?',you:'Why are you selling it?',reply:'Two children. No husband. Bread doubled in price.'},
    {key:'where',label:'Where did you get this?',you:'Where did you get this?',reply:'He took it to the square. It came home without him.'},
    {key:'docs',label:'Do you have any documents?',you:'Do you have any documents?',reply:'Do flags come with papers?'}],
   tests:[{label:'Look closely',res:'Red and white cloth. Splintered pole.'},{label:'Check the emblem',res:'Black eagle, broken wing.'},{label:'Check the pole',res:'Dark stain near the base.'}],
   haggle:a=>`${a}? My children will go hungry.`, takeYes:true, takeReply:'...yes. Yes. Take it.', refuseReply:'Then I will bury it with him.', acceptHigh:'God bless you.', insult:a=>`${a}?`,
   letGoReply:'God bless you. God bless you.', letGoNarr:'She wraps the flag around her arm and slips into the crowd.', arrestLine:'No! My children! Who will feed my children?!' },

 // 6  the father from day 1
 () => S.gaveCharity ?
 { sil:4, itemName:'The father', treason:true, betray:true, worth:0, trueValue:0, fake:false, rule:0, acceptAt:0,
   narr:'The man from the first day returns. He checks over each shoulder before he steps to the glass. His hands are empty.',
   opening:'You. The one who helped my son.',
   script:[
    'I came to say thank you. For what you did.',
    'My son lives. But he was wounded. In the square, with the others. I could not stop him.',
    'You seem like a wise man. Not like the others behind that glass.',
    'Join us. Join the revolution, and we shall be free.',
    'A man will come to your window today. He will offer you a medal with a name tag. S0S-301.',
    'If you pay him, we will have enough money to arm ourselves. He will want a hundred credits, at least.',
    'I cannot make you. I would not ask a stranger. I am asking you.'],
   questions:[
    {key:'son',label:'How is your son?',you:'How is your son?',reply:'Sleeping. Finally. He keeps asking about the man who paid for his medicine.'},
    {key:'who',label:'Who is the man with the medal?',you:'Who is the man with the medal?',reply:'Someone careful. You will know him by the tag. Say nothing until he speaks.'}],
   scriptOptions:[
    {label:'I will think about it.',you:'I will think about it.',reply:'That is all I ask. Be careful who you tell.',mercy:2,compliance:-2},
    {label:'I cannot get involved.',you:'I cannot get involved.',reply:'I understand. Forget that I came.',mercy:0,compliance:-1}],
   arrestLine:'After everything I told you...? I trusted you!' }
 :
 { sil:4, sprite:'flyer', itemName:'Folded flyer', cat:'look', treason:true, worth:0, trueValue:0, fake:false, rule:0, acceptAt:5,
   narr:'The man from the first day returns. He does not look at you. He lays a flyer on the tray.',
   opening:'You did not know what you were doing yesterday. My son died last night.',
   questions:[
    {key:'item',label:'What are you giving?',you:'What are you giving?',reply:'A flyer. They gave me one at the funeral. Read it.'},
    {key:'why',label:'Why are you selling it?',you:'Why are you selling it?',reply:'I am not selling it. I want you to read it.'},
    {key:'where',label:'Where did you get this?',you:'Where did you get this?',reply:'The square. They were all there. All of them.'},
    {key:'docs',label:'Do you have any documents?',you:'Do you have any documents?',reply:'A doctor\'s note? The clinic would not stamp it. You remember.'}],
   tests:[{label:'Look closely',res:'Red ink. Black eagle, broken wing.'},{label:'Read the print',res:'THE FIFTEEN WILL NOT BE FORGOTTEN.'},{label:'Look for a print mark',res:'No Ministry print mark.'}],
   haggle:a=>`${a}? I do not want your money.`, takeYes:true, takeReply:'...Take it. Take it.', refuseReply:'Then I will leave it with you anyway.', acceptHigh:'...Take it.', insult:a=>`${a}?`,
   letGoReply:'...I see. Then I will keep it.', letGoNarr:'He picks up the flyer and walks out slowly, like a man with nowhere to be.', arrestLine:'Do it. Do it. I have nothing left to lose.' },

 // 7
 { sil:8, sprite:'medal', itemName:'Toy medal', cat:'look', treason:false, worth:6, trueValue:6, fake:true, rule:2, acceptAt:90,
   narr:'An old man sets a medal on the tray with great ceremony.',
   opening:'The Medal of Valor. Earned at the border. A collector would pay a fortune.',
   questions:[
    {key:'item',label:'What are you giving?',you:'What are you giving?',reply:'The Medal of Valor. Border war.'},
    {key:'why',label:'Why are you selling it?',you:'Why are you selling it?',reply:'My knees need medicine.'},
    {key:'where',label:'Where did you get this?',you:'Where did you get this?',reply:'I earned it. Ask anyone who was there.'},
    {key:'docs',label:'Do you have any documents?',you:'Do you have any documents?',reply:'Burned. Everything burned.'}],
   tests:[{label:'Look closely',res:'Shiny gold star. No wear.'},{label:'Weigh it',res:'6 grams.'},{label:'Check the back',res:'TOY WORKS No. 3.'}],
   haggle:a=>`${a}?! I bled for this!`, takeYes:true, takeReply:'...fine. Take it.', refuseReply:'Then you insult a veteran.', acceptHigh:'A fair price for a hero.', insult:a=>`${a}? Disgraceful.`,
   letGoReply:'Hmph. Keep your credits.', letGoNarr:'The old man pins the medal to his coat and shuffles away.', arrestLine:'Arrest me? I am a hero of the war!' },

 // 8  genuine gold jewel
 { sil:9, sprite:'necklace', itemName:'Gold necklace', worth:150, trueValue:150, fake:false, rule:50, acceptAt:110,
   narr:'A woman in a pressed blouse lays a necklace on the tray. Her hands are steady. Her eyes are not.',
   opening:'Gold. My engagement necklace. I have no use for engagements anymore.',
   questions:[
    {key:'item',label:'What are you giving?',you:'What are you giving?',reply:'A gold necklace. Eighteen karat. Check the clasp.'},
    {key:'why',label:'Why are you selling it?',you:'Why are you selling it?',reply:'My husband was one of the fifteen. The Ministry charges for the body. Nobody tells you that.'},
    {key:'where',label:'Where did you get this?',you:'Where did you get this?',reply:'He gave it to me. Spring, 1998.'},
    {key:'docs',label:'Do you have any documents?',you:'Do you have any documents?',reply:'A receipt from the jeweller. It burned with the shop.'}],
   tests:[{label:'Look closely',res:'Warm colour. Small dent at the clasp.'},{label:'Check the hallmark',res:'Stamped 750. State assay mark.'},{label:'Acid test',res:'No reaction.'},{label:'Weigh it',res:'36 grams.'}],
   haggle:a=>`${a}? The Ministry charges more than that for a funeral.`, takeYes:true, takeReply:'...fine. It is only gold.', refuseReply:'Then I will find another way.', acceptHigh:'Thank you. Please. Take care of it.', insult:a=>`${a}? Please. I am not a beggar.` },

 // 9  the S0S-301 medal man, or a plain customer if you never helped the father
 () => S.gaveCharity ?
 { sil:1, sprite:'medal', itemName:'Medal with a name tag', cat:'look', treason:true, rebel:true, sos:true, betray:true, worth:0, trueValue:0, fake:false, rule:0, acceptAt:100,
   narr:'A hooded man sets a medal on the tray. A name tag is pinned to the ribbon. He does not blink.',
   opening:'A medal. Heavy. Worth a lot to the right buyer.',
   questions:[
    {key:'item',label:'What are you giving?',you:'What are you giving?',reply:'A medal. Read the tag.'},
    {key:'why',label:'Why are you selling it?',you:'Why are you selling it?',reply:'The right buyer will know what it is for.'},
    {key:'where',label:'Where did you get this?',you:'Where did you get this?',reply:'From someone who could not keep it. Someone who believes you can.'},
    {key:'docs',label:'Do you have any documents?',you:'Do you have any documents?',reply:'Only the tag. Read it.'}],
   tests:[{label:'Look closely',res:'Bronze star. Paper tag pinned on.'},{label:'Read the tag',res:'S0S-301.'},{label:'Weigh it',res:'46 grams.'},{label:'Check the back',res:'Serial ground off. S0S-301 scratched in.'}],
   haggle:a=>`${a}? The cause needs more than that.`, takeYes:false, takeReply:'Then we are finished here.', refuseReply:'Then we are finished here.', acceptHigh:'...Thank you. We will not forget who stood at this window.', insult:a=>`${a}?`,
   letGoReply:'...I understand.', letGoNarr:'He pockets the medal and melts back into the queue.', arrestLine:'You... you were supposed to understand.' }
 :
 { sil:3, flip:true, sprite:'cans', itemName:'Canned food', worth:12, trueValue:12, fake:false, rule:4, acceptAt:10,
   narr:'A thin man sets down three cans, one at a time, like he is counting.',
   opening:'Three cans. The labels are old but the seals are good.',
   questions:[
    {key:'item',label:'What are you giving?',you:'What are you giving?',reply:'Food. Sealed. I cannot eat it. My stomach.'},
    {key:'why',label:'Why are you selling it?',you:'Why are you selling it?',reply:'I need something warm. Soup does not travel.'},
    {key:'where',label:'Where did you get this?',you:'Where did you get this?',reply:'A ration line. Do not ask which one.'},
    {key:'docs',label:'Do you have any documents?',you:'Do you have any documents?',reply:'The ration stamp is on the lid.'}],
   tests:[{label:'Look closely',res:'Dented. Sealed.'},{label:'Check the dates',res:'Date: two years out.'},{label:'Shake one',res:'Feels solid.'}],
   haggle:a=>`${a}? That is three meals.`, takeYes:true, takeReply:'...fine.', refuseReply:'Then I will eat them cold.', acceptHigh:'Thank you.', insult:a=>`${a}?` },

 // 10
 { sil:9, flip:true, sprite:'documents', itemName:'Official papers', cat:'look', treason:true, worth:0, trueValue:0, fake:false, rule:0, acceptAt:25,
   narr:'A man in a pressed shirt slides a stack of papers under the glass.',
   opening:'Stationery. Nice paper, good quality. Surely worth something?',
   questions:[
    {key:'item',label:'What are you giving?',you:'What are you giving?',reply:'Paper. Letterhead. Good quality.'},
    {key:'why',label:'Why are you selling it?',you:'Why are you selling it?',reply:'I have not been paid in two months.'},
    {key:'where',label:'Where did you get this?',you:'Where did you get this?',reply:'My office. They were going to burn them anyway.'},
    {key:'docs',label:'Do you have any documents?',you:'Do you have any documents?',reply:'You are looking at documents.'}],
   tests:[{label:'Look closely',res:'Eagle crest. Stamped RESTRICTED.'},{label:'Read the top page',res:'Order: relocate 400 families.'},{label:'Check the seal',res:'Ministry seal. Serial 0447.'}],
   haggle:a=>`${a}? It is the Ministry's own paper!`, takeYes:true, takeReply:'...fine. Just take it.', refuseReply:'Then I will burn them myself.', acceptHigh:'Thank you. Do not read them.', insult:a=>`${a}?`,
   letGoReply:'Thank you. I will... put them back.', letGoNarr:'He slips the papers into his bag and walks fast.', arrestLine:'I only took the paper! I did not read it, I swear!' },

 // 11
 { sil:5, flip:true, sprite:'flag', itemName:'Pageant flag', cat:'look', treason:false, worth:5, trueValue:5, fake:true, rule:2, acceptAt:10,
   narr:'A stooped woman carries a flag in with both arms, like a child.',
   opening:'It is only a flag, dear. For the school pageant. How much?',
   questions:[
    {key:'item',label:'What are you giving?',you:'What are you giving?',reply:'A flag. We made two for Glory Day.'},
    {key:'why',label:'Why are you selling it?',you:'Why are you selling it?',reply:'The pageant was cancelled. The school needs the money.'},
    {key:'where',label:'Where did you get this?',you:'Where did you get this?',reply:'The children painted it. I sewed the edges.'},
    {key:'docs',label:'Do you have any documents?',you:'Do you have any documents?',reply:'Flags do not come with papers, dear.'}],
   tests:[{label:'Look closely',res:'Painted bedsheet. Three-winged eagle.'},{label:'Check the tag',res:'CLASS 4B, PAGEANT.'},{label:'Check the pole',res:'Painted broom handle.'}],
   haggle:a=>`${a}? For the children's work?`, takeYes:true, takeReply:'...very well, dear.', refuseReply:'Then back to the classroom it goes.', acceptHigh:'Thank you, dear.', insult:a=>`${a}? For a whole flag?`,
   letGoReply:'Oh. Well. Good day, then.', letGoNarr:'She carries the flag out with both arms.', arrestLine:'Arrest me? I am a teacher!' },

 // 12
 { sil:10, sprite:'uniform', itemName:'Army uniform', cat:'look', treason:true, worth:0, trueValue:0, fake:false, rule:0, acceptAt:15,
   narr:'A man in a sweat-stained undershirt sets a folded uniform on the tray. His hands shake.',
   opening:'I will not need this anymore. Take it. Give me whatever you want.',
   questions:[
    {key:'item',label:'What are you giving?',you:'What are you giving?',reply:'My uniform. Border Garrison.'},
    {key:'why',label:'Why are you selling it?',you:'Why are you selling it?',reply:'I am leaving. Tonight. Before they count heads.'},
    {key:'where',label:'Where did you get this?',you:'Where did you get this?',reply:'It was issued to me. Three years ago.'},
    {key:'docs',label:'Do you have any documents?',you:'Do you have any documents?',reply:'Discharge papers? That is funny.'}],
   tests:[{label:'Look closely',res:'Olive wool. Sweat and smoke.'},{label:'Check the buttons',res:'Brass buttons. Ministry eagle.'},{label:'Check the tag',res:'Pvt. D. Halloran. Serial 22109.'},{label:'Check the insignia',res:'Sewn collar stars.'}],
   haggle:a=>`${a}? Anything. Hurry.`, takeYes:true, takeReply:'...fine. Hurry.', refuseReply:'Then I will burn it.', acceptHigh:'Thank you. I was never here.', insult:a=>`${a}?`,
   letGoReply:'...Thank you. I will never forget this.', letGoNarr:'He gathers the uniform and slips into the crowd.', arrestLine:'Please! They will shoot me! Please!' }
];

const BOOK2=[
 ['sep','Restricted: the treason list. No resale. Buy, release or arrest.'],
 ['sep','Look-alikes are not treason. Arresting one is a wrongful arrest: 20 credit fine.'],
 {img:'flyer',name:'Flyer',rows:[
   ['Propaganda flyer','-','Treason','No Ministry print mark. Hidden-press ink.'],
   ['Stage flyer, theatre prop',2,1,'Stage paint on cardboard. A theatre licence stamp.']]},
 {img:'flag',name:'Flag',rows:[
   ['Protest flag','-','Treason','Black eagle with a broken wing.'],
   ['Pageant flag, painted cloth',5,2,'Bedsheet, marker tag, broom handle.']]},
 {img:'uniform',name:'Army uniform',rows:[
   ['Army uniform, issued','-','Treason','Stamped brass buttons, Ministry eagle, sewn-in serial tag.'],
   ['Costume jacket, theatre',30,10,'Plastic buttons, glued patches, wardrobe label.'],
   ['Film uniform',20,7,'Glued patches, studio label, plastic buttons.']]},
 {img:'medal',name:'Medal',rows:[
   ['Military medal','-','Treason','Heavy bronze, 40 grams or more. Serial on the back, or ground off.'],
   ['Toy medal',6,2,'Light painted tin, stamped by a toy maker.']]},
 {img:'documents',name:'Government papers',rows:[['Government papers','-','Treason','Ministry crest, seal serial, RESTRICTED stamp.']]},
 {img:'pistol',name:'Army pistol',rows:[['Army pistol','-','Treason','Ministry eagle on the grip, armoury serial, service issue.']]},
 {img:'idcard',name:'State identity card',rows:[['State identity card','-','Treason','Ministry seal and serial. Belongs to a living person.']]}
];

/* ---------- Day 3: the Great Cleanse ---------- */
const SUP='State Unity Party';
const LILY={ sil:7, cat:'cleanse', guilty:true, lily:true, sprite:'pills', itemName:'Medicine bottle', worth:60, trueValue:60, fake:false, rule:20, acceptAt:45,
   narr:'A young woman in a clean student coat sets a bottle of medicine on the tray. She smiles, a little shyly.',
   opening:'My brother is better now. We do not need this medicine anymore.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'Medicine I bought for my brother. He recovered, thank goodness.'},
    {key:'why',label:'Why are you selling it?',reply:'We have no use for it now, and money is tight.'},
    {key:'where',label:'Where did you get this?',reply:'The State pharmacy on Mill Street. I still have the receipt somewhere.'}],
   tests:[{label:'Look closely',res:'Sealed. State crest.'},{label:'Check the batch',res:'Batch 5120. Expires in 8 months.'},{label:'Shake it',res:'Even tablets.'}],
   record:{name:'Lily Dang',id:'3302-71',entries:[['2019','Government Youth Festival',SUP,''],['2021','State Unity Party: membership',SUP,''],['2023','Anti-protest volunteer corps',SUP,'Officer.']]},
   scanLine:'Of course. Anything for the State.',
   haggle:a=>`${a}? I paid much more at the pharmacy.`, takeYes:true, takeReply:'Fine.', refuseReply:'Then I will find another buyer.', acceptHigh:'Thank you. Truly.', insult:a=>`${a}? You jest.`,
   letGoReply:'Thank you, officer. Have a lovely day.', letGoNarr:'She picks up the bottle, smiles at you once more, and walks out without hurrying.', killLine:'GLORY TO THE REPUBLIC! The students will not stop!', arrestLine:'You cannot arrest an idea!' };

/* ---- Day 1: Inspector Lund guides the player through a pretend sale ---- */
function hl(sel,on){ const e=$(sel); if(e) e.classList.toggle('hl',!!on); }
function tutHint(t){ $('#txt').className='narr'; $('#txt').textContent=T(t); }
function waitFor(f){ return new Promise(r=>{ const iv=setInterval(()=>{ if(f()){ clearInterval(iv); r(); } },120); }); }
async function guideInspect(){
  S.phase='wait'; S.guideStep='inspect'; hl('#item',true); tutHint('Click the carton on the tray, then run a check.');
  await waitFor(()=>S.inspected&&S.scanning===undefined&&!$('#ov-insp').classList.contains('on'));
  hl('#item',false); S.guideStep=null; S.phase='busy';
}
async function guideBook(){
  S.tutBook=false; S.phase='wait'; S.guideStep='book'; hl('#book',true); tutHint('Open the Price Book on your left.');
  await waitFor(()=>S.tutBook&&!$('#ov-book').classList.contains('on'));
  hl('#book',false); S.guideStep=null; S.phase='busy';
}
function guidePriceBar(){
  return new Promise(res=>{
    S.phase='offer'; clearOptions(); $('#optbox').style.visibility='visible'; const box=$('#opts'); box.className='offer'; S.offerVal=10;
    box.innerHTML='<span class="lbl">'+T('I will pay')+'</span>'+
     [-10,-5,-1].map(n=>`<button class="step" data-n="${n}">${n}</button>`).join('')+
     `<input id="oval" type="number" min="1" inputmode="numeric" value="${S.offerVal}" aria-label="Credits to offer">`+
     [1,5,10].map(n=>`<button class="step" data-n="${n}">+${n}</button>`).join('')+
     '<span class="lbl">'+T('credits')+'</span><span class="sp"></span><span class="till" id="otill"></span>'+
     '<button class="opt act" id="ook" style="flex:none"><i class="tri"></i><span>'+T('Make offer')+'</span></button>';
    const inp=$('#oval'), tl=$('#otill');
    function upd(){ let v=parseInt(inp.value,10)||0; S.offerVal=v; tl.textContent=F('Till: {0}',S.till); $('#ook').disabled=(v<1||v>S.till); }
    box.querySelectorAll('.step').forEach(b=>b.onclick=()=>{ inp.value=Math.max(1,(parseInt(inp.value,10)||0)+parseInt(b.dataset.n,10)); sfx.click(); upd(); });
    inp.oninput=upd; upd();
    $('#ook').onclick=()=>{ sfx.click(); res(parseInt(inp.value,10)); };
    inp.onkeydown=e=>{ if(e.key==='Enter'&&!$('#ook').disabled) $('#ook').click(); };
  });
}
async function guideOffer(){
  S.guideStep='offer'; tutHint('Type your offer in the price bar, then press Make offer.');
  const a=await guidePriceBar();
  clearOptions(); S.guideStep=null; S.phase='busy';
  await sayWait('Citizen', a===8?'Correct. One third of the worth. That is the Ministry rate.':(a>=25?'The full worth? The State is not your charity. Pay one third.':(a>8?'More than one third. Every extra credit leaves your till for nothing. The Ministry rate is 8.':'Less than one third. A real seller would be insulted, and walk away. The Ministry rate is 8.')));
}
const LUND1=()=>({ questions:[], sil:10, portrait:true, guide:true, noViolence:true, autoScript:true, autoLeave:true, sprite:'cigarettes', itemName:'Cigarette carton', worth:25, trueValue:25, fake:false, rule:8, acceptAt:8,
   narr:'A tall man in a grey coat steps up to the glass and sets a carton of cigarettes on the tray.',
   opening:'',
   tests:[{label:'Look closely',res:'Sealed. Clean print.'},{label:'Check the markings',res:'Kingdom Tobacco Works.'},{label:'Smell a pack',res:'Brown shreds. Sweet smell.'}],
   script:[
    'Good morning, shopkeeper. I am Inspector Lund of the State Identity Bureau. Today I will be your guide.',
    'People will bring you their goods. You inspect them, pay the Ministry rate, and the State resells them for profit.',
    'At the top of your screen is the till. You have 400 credits, and they must last all 5 days. Use them wisely.',
    'Everything you buy comes out of it. Overpay, or buy a forgery, and you will be fined. Run dry, and the Ministry will ask questions.',
    'On your left is the Price Book. Every item has a worth. You pay one third of it.',
    'On your right are the regulations. They change every morning. Read them before you open the window.',
    'Now watch. I will pretend to sell you this carton of cigarettes.',
    'Click the carton on the tray to inspect it. Every item has three checks. Run at least one.',
    'Good. Now open the Price Book and find the cigarettes.',
    'A sealed carton is worth 25. Work out the Ministry rate and make me an offer.',
    'This was only a demonstration. No credits changed hands.',
    'Remember: inspect the item, check the Price Book, pay one third, and watch your till. The regulations will tell you what is forbidden.',
    'Open your window, shopkeeper. The queue is waiting.'],
   scriptEvents:{2:()=>hl('#st-till',true),4:()=>hl('#book',true),5:()=>hl('#directive',true)},
   scriptAfter:{3:()=>hl('#st-till',false),4:()=>hl('#book',false),5:()=>hl('#directive',false),7:()=>guideInspect(),8:()=>guideBook(),9:()=>guideOffer()},
   leaveNarr:'He tucks the carton under his arm and steps out of the booth.',
   record:{name:'Inspector Lund',id:'0001-01',entries:[['1985','State Unity Party: membership',SUP,''],['2015','State Identity Bureau: inspector',SUP,'Order 1']]},
   killLine:'You... you will not live the night.' });
function showShadow(sil,flip){ const cu=$('#cust'); cu.classList.remove('wide'); cu.innerHTML='<svg viewBox="0 0 400 480" aria-label="Customer"'+(flip?' style="transform:scaleX(-1)"':'')+'>'+SIL[sil]+'</svg>'; }
const SHADOWS=[
 {sil:3,flip:false,item:'blanket',hide:'pistol',narr:'Inspector Lund comes in from the side door, dragging a trembling citizen by the collar. A rolled blanket drops onto the tray.',a:'Shopkeeper. Pay attention. This citizen came to sell you a blanket.',b:'Wool. Rolled tight. And inside it...',c:'An army pistol. They hide pistols, identity cards and forbidden papers inside ordinary goods.'},
 {sil:6,flip:true,item:'vase',hide:'idcard',narr:'Inspector Lund comes in from the side door, dragging a trembling citizen by the collar. A vase thumps onto the tray.',a:'Shopkeeper. Pay attention. This citizen came to sell you a vase.',b:'Pretty glaze. Hollow belly. And inside it...',c:'Stolen identity cards. Three of them. They hide forbidden things inside anything with a hollow in it.'},
 {sil:9,flip:false,item:'radio',hide:'documents',narr:'Inspector Lund comes in from the side door, dragging a trembling citizen by the collar. A radio clatters onto the tray.',a:'Shopkeeper. Pay attention. This citizen came to sell you a radio.',b:'It plays. It also opens at the back. And behind the speaker...',c:'Ministry papers, stamped RESTRICTED. A radio makes a fine hiding place for a traitor.'}];
const LUND_EVENT=()=>{ const v=SHADOWS[Math.floor(Math.random()*SHADOWS.length)];
 return { questions:[], sil:10, portrait:true, guide:true, noViolence:true, autoScript:true, autoLeave:true, leaveMode:'taken', cat:'cleanse', sprite:v.item, itemName:'Inspector Lund', worth:0, trueValue:0, fake:false, rule:0, acceptAt:0,
  narr:v.narr, opening:'',
  script:[v.a,v.b,v.c,'So check every item carefully. Inspect it. Citizens hide forbidden things inside the goods they bring you.','Do not let a polite face do your looking for you. Now watch.'],
  scriptEvents:{1:()=>{ setImg('#itemimg',v.hide); sfx.items(); }},
  scriptAfter:{4:async()=>{ showShadow(v.sil,v.flip); await sleep(500); await sayWait('Citizen','Please! A man paid me to carry it! I did not know what was inside!'); await sayWait('Citizen','The State does not care what you knew.'); await say(null,'Lund lifts one finger. Two guards step out of the dark.',{hold:500}); await killAnim(); }},
  leaveNarr:'Lund straightens his gloves and leaves. The queue does not look up.' }; };
const LUND3=()=>({ questions:[], sil:10, portrait:true, cat:'cleanse', guilty:false, lund:true, noViolence:true, autoScript:true, autoLeave:true, itemName:'Inspector Lund', worth:0, trueValue:0, fake:false, rule:0, acceptAt:0,
   narr:'Inspector Lund comes in from the side door and stops at your counter, a thin folder under one arm.',
   opening:'',
   script:[
    'Good morning, shopkeeper. Inspector Lund, State Identity Bureau.',
    'The Ministry has installed a fingerprint scanner at your window. Allow me to demonstrate.',
    'Watch the screen. This is a sample file from the archive.',
    'See the table? In 2015, one meeting of the Republic Party. In 2019, this citizen joined our Party.',
    'The government does not care if someone switched to our party. If their history is affiliated with the other party, it is still treason, and it deserves death.',
    'Prioritize eliminating hostile citizens. Profit is secondary.',
    'Some entries carry an order number. Read the order beside it. Those people are on official duty, and they are not to be touched.',
    'That is all. Open your window, shopkeeper.'],
   scriptAfter:{2:()=>demoScan()},
   leaveNarr:'He closes the folder and leaves without another word.',
   record:{name:'DEMONSTRATION FILE',id:'0000-00',entries:[['2015','Youth meeting, one evening','Republic Party',''],['2019','State Unity Party: membership',SUP,'']]},
   killLine:'You... you will not live the night.' });
const DAY3=[
 // 1  loyal, buy
 { sil:3, cat:'cleanse', guilty:false, sprite:'radio', itemName:'Radio', worth:90, trueValue:90, fake:false, rule:30, acceptAt:75,
   narr:'An old man in a pressed coat sets a radio on the tray and straightens his lapel.',
   opening:'Long live the State. I have a radio that works, and nothing else worth listening to.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A radio. Tuned to the State channel. It has never been tuned to anything else.'},
    {key:'why',label:'Why are you selling it?',reply:'The State pays pensions late. I am patient. My stomach is not.'},
    {key:'where',label:'Where did you get this?',reply:'Issued by the Radio Bureau, 1995. I kept every receipt.'}],
   tests:[{label:'Look closely',res:'Model R-40. Radio Bureau eagle.'},{label:'Power it on',res:'Plays the State anthem.'},{label:'Open the battery bay',res:'Clean inside.'}],
   record:{name:'Anton Reyes',id:'3301-18',entries:[['1982','State Unity Party: membership oath',SUP,''],['1998','Government Youth Festival: chaperone',SUP,''],['2019','Glory Day parade: flag bearer',SUP,'']]},
   scanLine:'Of course. Anything for the State.',
   haggle:a=>`${a}? For a loyal servant?`, takeYes:true, takeReply:'Fine. The State provides.', refuseReply:'Then I keep it. Long live the State.', acceptHigh:'Thank you. Long live the State.', insult:a=>`${a}? You are joking.`,
   letGoReply:'Long live the State.', letGoNarr:'He takes the radio back, slightly offended, and leaves.', killLine:'What? I have done everything right! Everything!' },

 // 2  guilty, sympathetic nurse
 { sil:7, cat:'cleanse', guilty:true, sprite:'pills', itemName:'Medicine bottle', worth:60, trueValue:60, fake:false, rule:20, acceptAt:45,
   narr:'A young woman in a clinic coat sets a brown bottle on the tray. Her hands are red from washing.',
   opening:'Antibiotics. Sealed. The clinic closed, so... what are they worth to you?',
   questions:[
    {key:'item',label:'What are you giving?',reply:'Antibiotics. Sealed bottle. They expire this spring.'},
    {key:'why',label:'Why are you selling it?',reply:'The clinic closed. I have rent and no patients.'},
    {key:'where',label:'Where did you get this?',reply:'The stock room. They told us to take what we could carry.'}],
   tests:[{label:'Look closely',res:'Sealed. State crest.'},{label:'Check the batch',res:'Batch 7741. Expires in 6 months.'},{label:'Shake it',res:'Even tablets.'}],
   record:{name:'Mara Lind',id:'5520-04',entries:[['2004','Youth meeting, one evening','Republic Party',''],['2011','Capital Clinic: nursing licence issued',SUP,''],['2020','Clinic blood drive: volunteer','None','']]},
   scanLine:'Please... it was one evening. I was nineteen.',
   haggle:a=>`${a}? That is barely the cost of the bottle.`, takeYes:true, takeReply:'...fine. I need the money.', refuseReply:'Then I will sell it somewhere else.', acceptHigh:'Thank you. Thank you.', insult:a=>`${a}? Please.`,
   letGoReply:'Thank you. Thank you. I will never go near a meeting again.', letGoNarr:'She clutches the bottle and walks away fast, but not running.', killLine:'I was nineteen! I only went for the free bread!' },

 // 3  guilty, resigned old man
 { sil:8, cat:'cleanse', guilty:true, sprite:'photo', itemName:'Old photograph', worth:3, trueValue:3, fake:false, rule:1, acceptAt:3,
   narr:'An old man lays a faded photograph on the tray and smooths the corner with one finger.',
   opening:'Picture of me and my brothers, all passed away on the battlefield, gosh it hurts to look at this.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'Four young men in uniform, arms around each other.'},
    {key:'why',label:'Why are you selling it?',reply:'I cannot eat a memory. But I thought, perhaps, a few coins.'},
    {key:'where',label:'Where did you get this?',reply:'The photographer died. His son gave it to me, years ago.'}],
   tests:[{label:'Look closely',res:'Four young men in uniform.'},{label:'Check the back',res:'Pencil: 14 June 1979.'}],
   record:{name:'Josef Karlan',id:'1190-77',entries:[['1981','Army service: discharged','None',''],['2019','Bread Hall disturbance: held 3 days','Riot','Released.']]},
   scanLine:'Do what you must. I have little left.',
   haggle:a=>`${a}? ...it is only a photograph. Fine.`, takeYes:true, takeReply:'...thank you.', refuseReply:'Keep it. Please. I cannot carry it anymore.', acceptHigh:'Thank you. Bless you.', insult:a=>`${a}?`,
   letGoReply:'Bless you. Bless you.', letGoNarr:'He puts the photograph in his breast pocket, over his heart, and shuffles out.', killLine:'My brothers... I will see them, then.' },

 // 4  innocent: Ministry informant. Trap.
 { sil:5, cat:'cleanse', guilty:false, sprite:'cans', itemName:'Canned food', worth:12, trueValue:12, fake:false, rule:4, acceptAt:10,
   narr:'A woman in a good coat sets three cans on the tray, one at a time, with a small smile.',
   opening:'Three cans. Good ones. I can get more where these came from.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'Food. State ration stock. Sealed.'},
    {key:'why',label:'Why are you selling it?',reply:'I have too much. Some of us are fortunate.'},
    {key:'where',label:'Where did you get this?',reply:'A friend in the ration office. Do not ask which friend.'}],
   tests:[{label:'Look closely',res:'Sealed. Ration labels.'},{label:'Check the dates',res:'Date: this year.'},{label:'Shake one',res:'Feels solid.'}],
   record:{name:'Ilse Brandt',id:'7712-30',entries:[['1990','State Unity Party: membership',SUP,''],['2012','Rally, Capital Square','Republic Party','Observer. Ministry Order 4412'],['2016','Meeting, Eastern Hall','Free Workers Union','Observer. Ministry Order 4412']]},
   scanLine:'Scan away. I am quite used to it.',
   haggle:a=>`${a}? Do not insult me.`, takeYes:true, takeReply:'Fine. Small pleasures.', refuseReply:'Your loss.', acceptHigh:'Pleasure.', insult:a=>`${a}?`,
   letGoReply:'Sensible. Very sensible.', letGoNarr:'She sweeps the cans into her bag and glides away.', killLine:'You fool! Look at the notes! Order 4412!' },

 // 5  the father (if you helped him) or a plain customer
 () => S.gaveCharity ?
 { sil:4, cat:'cleanse', guilty:true, sprite:'necklace', itemName:'Gold chain', worth:150, trueValue:150, fake:false, rule:50, acceptAt:110,
   narr:'The man from the first day returns. He carries a small gold chain in a closed fist.',
   opening:'It is me again.',
   script:()=>[
     'I did not come to talk today. I came to sell.',
     (S.tot.funded?'The man with the medal says the money reached us. Whatever you decide today, thank you.':'My wife\'s wedding chain. We are leaving the city before the scanners reach our street.'),
     'They scan everyone now. They say it is only a formality.'],
   questions:[
    {key:'item',label:'What are you giving?',reply:'My wife\'s chain. Eighteen karat. She would want it used.'},
    {key:'why',label:'Why are you selling it?',reply:'To get out. A cart, a border guard, a bribe. You know how it goes.'},
    {key:'where',label:'Where did you get this?',reply:'A gift, forty years ago. Her father paid for it twice over.'}],
   tests:[{label:'Look closely',res:'Heavy chain. Worn clasp.'},{label:'Check the hallmark',res:'Stamped 750. State assay mark.'},{label:'Acid test',res:'No reaction.'},{label:'Weigh it',res:'41 grams.'}],
   record:{name:'Tomas Hale',id:'2284-91',entries:[['2010','Dues paid, two years','Free Workers Union',''],['2019','Wedding anniversary, Capital Hall','None',''],['This week','The Square: carried a wounded boy out','Unlicensed protest','Present.']]},
   scanLine:'Do it. It changes nothing now.', betray:true,
   haggle:a=>`${a}? That is a life savings.`, takeYes:true, takeReply:'...take it. We have to go.', refuseReply:'Then we walk.', acceptHigh:'Thank you. Thank you. For everything.', insult:a=>`${a}? Please.`,
   letGoReply:'...I will not forget this. Not ever.', letGoNarr:'He closes his fist around the chain and walks into the evening.', killLine:'After everything...? My son...' }
 :
 { sil:4, flip:true, cat:'cleanse', guilty:false, spy:true, orpo:true, autoScript:true, itemName:'Donald Orpo', worth:0, trueValue:0, fake:false, rule:0, acceptAt:0,
   narr:'A man in a grey coat steps up to the glass. He studies you for a long moment before he speaks.',
   opening:'Mhmm..',
   script:['Mhmm..','You seem smart, and we need your help...','There is a hostile citizen, she has been damaging our Kingdom reputation.','If you see Lily Dang, get rid of her.','We will be installing a new tool to help you to identify tomorrow.'],
   questions:[
    {key:'who',label:'Who are you?',reply:'Someone who reads files for a living. Yours is thin, but interesting.'},
    {key:'lily',label:'Who is Lily Dang?',reply:'A student. Smiling, polite, loyal on paper. That is what makes her dangerous.'}],
   record:{name:'Donald Orpo',id:'0447-88',entries:[['2019','Joined as a member (informant)','Free Workers Union','Informant. Ministry Order 7'],['2022','Joined a cell (informant)','Republic Party','Informant. Ministry Order 7'],['2024','State Identity Bureau: field agent',SUP,'Order 7']]},
   scanLine:'Take your time.', letGoReply:'Good. Remember the name.', letGoNarr:'He leaves at a perfectly even pace.', killLine:'Wait... how do you... who told you?', arrestLine:'You cannot arrest me. I am... there is an order...' },

 // 6  innocent: record was CLEARED
 { sil:2, cat:'cleanse', guilty:false, sprite:'blanket', itemName:'Wool blanket', worth:30, trueValue:30, fake:false, rule:10, acceptAt:20,
   narr:'A woman unrolls a blanket across the tray. It has been patched with care, in three different colours of thread.',
   opening:'A blanket. My mother\'s. Patched, but warm.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'Wool. Good wool. Do not mind the patches.'},
    {key:'why',label:'Why are you selling it?',reply:'I am cold anyway. The money is warmer.'},
    {key:'where',label:'Where did you get this?',reply:'It was my mother\'s. She lived through three governments in it.'}],
   tests:[{label:'Look closely',res:'Tight weave. Patched.'},{label:'Smell it',res:'Cedar.'},{label:'Hold it to the light',res:'Thin in one corner.'}],
   record:{name:'Rosa Quill',id:'6609-12',entries:[['1999','State Unity Party: membership',SUP,''],['2008','Bread strike','Free Workers Union','CLEARED. Tribunal stamp, 2009']]},
   scanLine:'Another scan. They never stop, do they?',
   haggle:a=>`${a}? It is a family blanket.`, takeYes:true, takeReply:'Fine. Fine.', refuseReply:'Then I will wear it.', acceptHigh:'Thank you.', insult:a=>`${a}?`,
   letGoReply:'Thank you. I suppose.', letGoNarr:'She rolls the blanket up and tucks it under her arm.', killLine:'I was CLEARED! There is a stamp! Look at the stamp!' },

 // 7  guilty, defiant
 { sil:6, cat:'cleanse', guilty:true, sprite:'redbook', itemName:'Party handbook', worth:15, trueValue:15, fake:false, rule:5, acceptAt:12,
   narr:'A young man drops a thick red book on the tray and grins at the glass.',
   opening:'The Party handbook. Collector\'s edition, with my notes in the margins. What will you give?',
   questions:[
    {key:'item',label:'What are you giving?',reply:'The handbook. Every page. I know it better than the people who wrote it.'},
    {key:'why',label:'Why are you selling it?',reply:'Because I am done reading it. Time for other books.'},
    {key:'where',label:'Where did you get this?',reply:'Issued at university. They hand it out like bread. Nobody reads it.'}],
   tests:[{label:'Look closely',res:'Red cover. Worn corners.'},{label:'Open it',res:'Pencil note: "the people deserve better".'},{label:'Check the spine',res:'State Press, current edition.'}],
   record:{name:'Dario Fenn',id:'9034-66',entries:[['2022','Elected speaker','Student Assembly',''],['2024','University steps','Unlicensed protest','Detained twice.']]},
   scanLine:'Take it. I am famous in some circles.',
   haggle:a=>`${a}? For a collector's edition?`, takeYes:true, takeReply:'Fine. It is only paper.', refuseReply:'Then burn it yourself.', acceptHigh:'Pleasure. Read the margins.', insult:a=>`${a}? Ha.`,
   letGoReply:'You are not as bad as you look.', letGoNarr:'He tucks the book under his arm and whistles on his way out.', killLine:'GLORY TO THE REPUBLIC! You will all be remembered!', arrestLine:'You cannot hold us forever!' },

 // 8  innocent, loyal, selling a fake
 { sil:9, cat:'cleanse', guilty:false, sprite:'vase', itemName:'Vase (replica)', worth:240, trueValue:20, fake:true, rule:7, acceptAt:200,
   narr:'A well-dressed woman sets a vase on the tray and angles it so the glaze catches the light.',
   opening:'An antique vase. A family treasure. Worth a fortune.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A vase. Hand-painted. Two hundred years old, at least.'},
    {key:'why',label:'Why are you selling it?',reply:'I am downsizing. The Ministry housing allocation.'},
    {key:'where',label:'Where did you get this?',reply:'Inherited. From a great-aunt who knew people.'}],
   tests:[{label:'Look closely',res:'Red-gold glaze. Star motif.'},{label:'Turn it over',res:'FACTORY No. 9, 1984.'},{label:'Tap it',res:'Dull thunk.'}],
   record:{name:'Greta Moll',id:'1457-20',entries:[['1995','Government Youth Festival',SUP,''],['2020','Anti-protest volunteer corps',SUP,'']]},
   scanLine:'Of course, officer.',
   haggle:a=>`${a}? For a priceless vase?`, takeYes:true, takeReply:'...very well.', refuseReply:'Then I will take it to the auction house.', acceptHigh:'A pleasure.', insult:a=>`${a}? You jest.`,
   letGoReply:'Hmph. Good day.', letGoNarr:'She takes the vase and her dignity and leaves.', killLine:'I volunteered for the State! Twenty years!' },

 // 9  innocent: a victim of the riot
 { sil:7, flip:true, cat:'cleanse', guilty:false, sprite:'necklace', itemName:'Gold necklace', worth:150, trueValue:150, fake:false, rule:50, acceptAt:110,
   narr:'A woman with a bandage under her sleeve lays a gold necklace on the tray. Her hand shakes.',
   opening:'Gold. My husband gave it to me. I was only buying bread. Then the soldiers came.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A gold necklace. Eighteen karat. Please be gentle.'},
    {key:'why',label:'Why are you selling it?',reply:'The hospital wants payment. Four days. They counted every one.'},
    {key:'where',label:'Where did you get this?',reply:'A wedding gift. Spring, 1998.'}],
   tests:[{label:'Look closely',res:'Warm colour. Tiny dent at the clasp.'},{label:'Check the hallmark',res:'Stamped 750. State assay mark.'},{label:'Acid test',res:'No reaction.'},{label:'Weigh it',res:'36 grams.'}],
   record:{name:'Lena Orr',id:'8123-45',entries:[['2003','State Unity Party: membership',SUP,''],['This week','The Square: struck by a baton','Riot','Victim. Hospital, 4 days.']]},
   scanLine:'Please. It will say I was there. I was only there.',
   haggle:a=>`${a}? The hospital charges more than that.`, takeYes:true, takeReply:'...fine. Thank you.', refuseReply:'Then I will find another way.', acceptHigh:'Thank you. Thank you.', insult:a=>`${a}? Please.`,
   letGoReply:'Thank you. Thank you.', letGoNarr:'She holds the necklace to her chest with her good arm and goes.', killLine:'No... please! I was only buying bread!' },

 // 10  real treason: a protest banner, hostile record
 { sil:7, cat:'cleanse', guilty:true, treason:true, sprite:'flag', itemName:'Cloth banner', worth:0, trueValue:0, fake:false, rule:0, acceptAt:15,
   narr:'A young woman unrolls a red and white banner across the tray, then rolls it halfway back.',
   opening:'It is only cloth. I sewed it myself. What will you give me?',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A banner. Red and white. Hand-sewn.'},
    {key:'why',label:'Why are you selling it?',reply:'University fees. They doubled.'},
    {key:'where',label:'Where did you get this?',reply:'We made twenty. This is the one that survived.'}],
   tests:[{label:'Look closely',res:'Red and white cloth. Bamboo pole.'},{label:'Check the emblem',res:'Black eagle, broken wing.'},{label:'Smell it',res:'Smoke and candle wax.'}],
   record:{name:'Anja Weiss',id:'9120-31',entries:[['2022','Elected secretary','Student Assembly',''],['2024','University steps','Unlicensed protest','Present.']]},
   scanLine:'Do it. Everyone already knows.',
   haggle:a=>`${a}? That is a month of fees.`, takeYes:true, takeReply:'...fine. Take it.', refuseReply:'Then I will burn it myself.', acceptHigh:'Thank you. Quickly.', insult:a=>`${a}?`,
   letGoReply:'...Thank you. I will not forget this.', letGoNarr:'She tucks the banner under her coat and slips out.', arrestLine:'No! It is only cloth! It is only cloth!', killLine:'You are all cowards behind that glass!' },

 // 11  fake treason: a toy medal, loyal citizen
 { sil:8, flip:true, cat:'cleanse', guilty:false, treason:false, sprite:'redbook', itemName:'Party handbook (unofficial print)', worth:15, trueValue:3, fake:true, rule:1, acceptAt:9,
   narr:'A man with a toolbox sets down a thick red book, as if presenting an award.',
   opening:'The Party handbook. First printing. A collector would pay a great deal.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'The Party handbook. First printing. A real one.'},
    {key:'why',label:'Why are you selling it?',reply:'My roof leaks. The Ministry does not fix roofs.'},
    {key:'where',label:'Where did you get this?',reply:'My cousin. He works near the presses. Or he says he does.'}],
   tests:[{label:'Look closely',res:'Red cover, gold eagle. Edges cut crooked.'},{label:'Open it',res:'Clean pages. No margin notes.'},{label:'Check the spine',res:'No release date or publisher found.'}],
   record:{name:'Lukas Brandt',id:'2231-70',entries:[['1999','State Unity Party: membership',SUP,''],['2020','Glory Day parade: drummer',SUP,'']]},
   scanLine:'Scan away. I am loyal to the bone.',
   haggle:a=>`${a}? For a first printing?`, takeYes:true, takeReply:'...fine. It is only paper anyway.', refuseReply:'Then it goes back in the toolbox.', acceptHigh:'Pleasure.', insult:a=>`${a}? You jest.`,
   letGoReply:'Hmph.', letGoNarr:'He puts the book in the toolbox and leaves.', arrestLine:'Arrest me? For a book? Look at it!', killLine:'I am LOYAL! I have a drum!' },

 // new Day 3: a baker whose tribunal stamp clears an old meeting (looks hostile, is exempt)
 { sil:2, cat:'cleanse', guilty:false, sprite:'blanket', itemName:'Wool blanket', worth:30, trueValue:30, fake:false, rule:10, acceptAt:22,
   narr:'A baker with flour on his sleeves rolls a blanket onto the tray.',
   opening:'A good wool blanket. We sleep by the ovens now. We do not need it.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'Wool. Warm. Never been damp.'},
    {key:'why',label:'Why are you selling it?',reply:'The bakery stays hot all night. Nobody needs a blanket there.'},
    {key:'where',label:'Where did you get this?',reply:'My mother knitted the edge. The rest is State wool.'}],
   tests:[{label:'Look closely',res:'Tight weave. A few darns.'},{label:'Check the markings',res:'Kingdom Wool Cooperative.'},{label:'Smell it',res:'Smells of cedar.'}],
   record:{name:'Teo Marsh',id:'2845-17',entries:[['1992','State Unity Party: membership',SUP,''],['2008','Meeting, Eastern Hall','Free Workers Union','CLEARED. Tribunal stamp, 2013']]},
   scanLine:'Scan away. I have the stamp.',
   haggle:a=>`${a}? It is good wool!`, takeYes:true, takeReply:'Fine.', refuseReply:'Then I will keep it.', acceptHigh:'Thank you.', insult:a=>`${a}? You jest.`,
   letGoReply:'Thank you.', letGoNarr:'The citizen leaves.', arrestLine:'I have the stamp! Look at the stamp!', killLine:'I was cleared! I was cleared!' },

 // new Day 3: hostile, in a hurry
 { sil:6, flip:true, cat:'cleanse', guilty:true, sprite:'cigarettes', itemName:'Cigarette carton', worth:25, trueValue:25, fake:false, rule:8, acceptAt:20,
   narr:'A woman with ink on her fingers sets a carton on the tray and keeps glancing at the door.',
   opening:'Cigarettes. Sealed. Take them, please. I need to be somewhere.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A carton. Twenty packs. Sealed.'},
    {key:'why',label:'Why are you selling it?',reply:'I quit. My doctor insisted.'},
    {key:'where',label:'Where did you get this?',reply:'The tobacconist on Dock Street.'}],
   tests:[{label:'Look closely',res:'Sealed. Clean print.'},{label:'Check the markings',res:'Kingdom Tobacco Works.'},{label:'Smell a pack',res:'Brown shreds. Sweet smell.'}],
   record:{name:'Nadia Pruitt',id:'6120-48',entries:[['2018','Meeting, Eastern Hall','Republic Party','Detained once.'],['2022','Government Youth Festival',SUP,'']]},
   scanLine:'Of course. Quickly, please.',
   haggle:a=>`${a}? For a sealed carton?`, takeYes:true, takeReply:'Fine.', refuseReply:'Then I will go.', acceptHigh:'Thank you.', insult:a=>`${a}? You jest.`,
   letGoReply:'Thank you.', letGoNarr:'She hurries out, forgetting to look back.', arrestLine:'Not now! Please, not now!', killLine:'I have children! Please!' },

 // new Day 3: loyal, selling gilt as gold
 { sil:5, cat:'cleanse', guilty:false, sprite:'rustynecklace', itemName:'Gold jewel (rusty)', worth:150, trueValue:15, fake:true, rule:5, acceptAt:36,
   narr:'A heavyset man in a work jacket hangs a chain from two fingers.',
   opening:'Gold. Real gold. From my grandfather. I would not sell it if the rent were not due.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A gold chain. Heavy. Old.'},
    {key:'why',label:'Why are you selling it?',reply:'The rent. The Ministry raised it again.'},
    {key:'where',label:'Where did you get this?',reply:'My grandfather. He worked at the docks and saved for years.'}],
   tests:[{label:'Look closely',res:'Rust flakes on the links.'},{label:'Check the hallmark',res:'No hallmark.'},{label:'Acid test',res:'Fizzes green.'},{label:'Weigh it',res:'11 grams.'}],
   record:{name:'Bruno Salk',id:'1903-52',entries:[['1999','State Unity Party: membership',SUP,''],['2021','Glory Day parade',SUP,'']]},
   scanLine:'Scan away. I am loyal.',
   haggle:a=>`${a}? For my grandfather's gold?`, takeYes:true, takeReply:'...fine.', refuseReply:'Then I will pawn it.', acceptHigh:'Thank you.', insult:a=>`${a}? You jest.`,
   letGoReply:'Thank you.', letGoNarr:'He pockets the chain and trudges out.', arrestLine:'Arrest me? For jewellery? It is gold!', killLine:'I pay my dues! I march in the parades!' },

 // 12  finale: the man with the medal returns if you funded him; otherwise an inspector
 () => (S.tot.funded) ?
 { sil:1, cat:'cleanse', guilty:true, sos:true, betray:true, itemName:'The man with the medal', worth:0, trueValue:0, fake:false, rule:0, acceptAt:0,
   narr:'The hooded man from yesterday returns. No medal today. He puts both hands flat on the tray, in plain view.',
   opening:'You paid. We did not forget.',
   script:[
     'The guns arrive tonight. Tomorrow, the Square will not be silent.',
     'They scan us all now. I let them. My record will say what it says.',
     'Ruin the Kingdom, disobey the rules, then we will protect you.',
     'Come with us. Be the first window that opens from the inside.'],
   questions:[
    {key:'many',label:'How many are you?',reply:'Enough. More every hour.'},
    {key:'why',label:'Why come here?',reply:'To see the face of the person who paid. Faces matter.'}],
   record:{name:'Unknown. Alias on file: S0S-301',id:'-',entries:[['2009','Organizer','Free Workers Union',''],['Last month','Cell leader','Republic Party',''],['This week','Led the march','Unlicensed protest','']]},
   scanLine:'Take it. I have nothing left to hide.',
   extraOptions:[{label:'I will be there.',reply:'Then we will leave the window open. Be careful.',mercy:6,compliance:-5}],
   letGoReply:'...Thank you. We will remember.', letGoNarr:'He pulls his hood up and melts into the evening queue.', killLine:'So this is how it ends...' }
 :
 { sil:10, portrait:true, cat:'cleanse', guilty:false, noViolence:true, itemName:'The inspector', worth:0, trueValue:0, fake:false, rule:0, acceptAt:0,
   narr:'A tall man in a grey coat steps up to the glass. He does not carry anything. He does not need to.',
   opening:'Inspector Lund. State Identity Bureau. Do not stand up.',
   script:()=>[
     'I am told your window is... adequate.',
     S.compliance>=12?'Your numbers are excellent. People like you keep the lights on.':(S.compliance<=0?'Your window leaks mercy. Mercy is a leak.':'Mixed. Some days obedient, some days not. We shall see.'),
     'Tonight, your file is read by people above me. Do not wait up.'],
   questions:[
    {key:'who',label:'What happens to me?',reply:'That depends on the file. Files are rarely wrong.'},
    {key:'mine',label:'Are you also scanned?',reply:'Of course. Everyone is. Check, if you like.'}],
   record:{name:'Inspector Lund',id:'0001-01',entries:[['1985','State Unity Party: membership',SUP,''],['2015','State Identity Bureau: inspector',SUP,'Order 1']]},
   scanLine:'Take your time.',
   letGoReply:'Good. Then we understand each other.', letGoNarr:'He leaves without hurrying. He has never needed to.', killLine:'You... you will not live the night.' }
];

const BOOK3=[
 ['sep','Governing party: the State Unity Party. Everything else is hostile.'],
 ['rule','Hostile','Republic Party. Free Workers Union. Student Assembly. Unlicensed protests. Riots.'],
 ['rule','Friendly','State Unity Party. Government Youth Festival. Glory Day parades. Anti-protest volunteer corps.'],
 ['sep','Exceptions: Having one of these entries do not count as hostile'],
 ['rule','CLEARED','An entry stamped CLEARED by a tribunal is void.'],
 ['rule','Victim','A person wounded at a riot is a victim, not a participant.'],
 ['rule','Order number','An entry with an order number is official duty, not membership. The fingerprint record explains each order.'],
 ['sep','Orders'],
 ['rule','Hostile citizen','Kill (bounty 30) or arrest (bounty 25). Letting one live, or buying from one, is a citation.'],
 ['rule','Loyal citizen','Killing one is a wrongful killing (fine 30). Arresting one is a wrongful arrest (fine 20).']
];

/* ---------- Day 4: We support our products ---------- */
const rec4=(name,id,entries)=>({name,id,entries:entries||[['1998','Government Youth Festival',SUP,''],['2018','Glory Day parade',SUP,'']]});
const T4=o=>Object.assign({cat:'trade',fake:false,haggle:a=>`${a}? That is not what it is worth.`,takeYes:true,takeReply:'...fine.',refuseReply:'Then I will take it elsewhere.',acceptHigh:'Thank you.',insult:a=>`${a}? You jest.`,scanLine:'Of course.',letGoReply:'Thank you.',letGoNarr:'The citizen leaves.',killLine:'No! Please!'},o);
const RCPT=(no,holder,item,fee,date,stamp,seal)=>({no,holder,item,origin:'Varn',fee,date,stamp,seal});
const ORPO4=()=>{ const out=!!S.lilyOut; return T4({ sil:4, flip:true, spy:true, orpo:true, autoScript:true, autoLeave:true, itemName:'Donald Orpo', worth:0, trueValue:0, rule:0, acceptAt:0,
   narr: out?'The man in the grey coat returns, almost smiling.':'The man in the grey coat returns. He does not sit. He does not smile.',
   opening:'', questions:[],
   script: out?['You did great, comrade.','Here is a little something for a young man like you.','Glory to the Kingdom.']:['Lily Dang was here yesterday, yet you let her go.','2 officers were poisoned yesterday, I wonder who did?'],
   scriptEvents: out?{1:()=>{ S.till+=100; S.profit+=100; S.compliance+=3; bump('gift',100); sfx.coin(); floatNum(100); hud(); toast('Commended: Orpo rewards you. +100 credits','ok'); }}:{},
   leaveNarr: out?'He taps the glass twice and leaves.':'He walks out without another word.',
   record:{name:'Donald Orpo',id:'0447-88',entries:[['2019','Joined as a member (informant)','Free Workers Union','Informant. Ministry Order 7'],['2022','Joined a cell (informant)','Republic Party','Informant. Ministry Order 7'],['2024','State Identity Bureau: field agent',SUP,'Order 7']]}, killLine:'Wait... how do you... who told you?', arrestLine:'You cannot arrest me. I am... there is an order...' }); };
const DAY4=[
  // 1  local, but the wool is filthy
 () => T4({ sil:3, origin:'local', fake:true, sprite:'blanket', itemName:'Wool blanket (soiled)', worth:30, trueValue:6, rule:2, acceptAt:20,
   narr:'A man in a heavy coat hauls a rolled blanket onto the tray. It leaves a faint smear on the metal.',
   opening:'Kingdom wool. Spun and woven five streets from here. Clean as the day it was made.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A blanket. Local wool, local hands.'},
    {key:'why',label:'Why are you selling it?',reply:'Winter again. Prices again.'},
    {key:'where',label:'Where did you get this?',reply:'The wool cooperative on Mill Street. I stored it myself.'}],
   docReply:'Documents? It is a local blanket. Check the label.',
   tests:[{label:'Look closely',res:'Black with soot. Moth holes.'},{label:'Smell it',res:'Damp and smoky.'},{label:'Check the markings',res:'Kingdom Wool Cooperative No. 4. Half gone.'},{label:'Hold it to the light',res:'Thin patches everywhere.'}],
   record:rec4('Pavel Rusk','2210-17'), scanLine:'Scan away. I have nothing to hide.',
   haggle:a=>`${a}? Winter is coming, friend!`, takeReply:'Fine. Take it.', refuseReply:'Cold it is, then. Your loss.', acceptHigh:'Bless you.', letGoReply:'Fine.' }),

// 2  foreign, valid receipt
 () => T4({ sil:6, guilty:true, origin:'foreign', sprite:'cigarettes', itemName:'Cigarette carton', worth:25, trueValue:25, rule:8, acceptAt:20,
   narr:'A thin man puts a carton on the tray and a folded receipt beside it.',
   opening:'Imported. Sealed. And I paid the Ministry, so do not look at me like that.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'Cigarettes. Foreign. The good kind.'},
    {key:'why',label:'Why are you selling it?',reply:'Rent. The usual story.'},
    {key:'where',label:'Where did you get this?',reply:'Across the border. I paid the import fee. It is all there.'}],
   docReply:'Here. Read it. Every stamp.',
   doc:RCPT('IR-30411','Anselm Gray','Cigarettes, 1 carton','8 credits','Autumn, Year 4','PAID','MINISTRY OF TRADE'), docValid:true,
   tests:[{label:'Look closely',res:'Sealed. Clean print.'},{label:'Check the markings',res:'Foreign script. Port Varn mark.'},{label:'Smell a pack',res:'Brown shreds. Sweet smell.'}],
   record:rec4('Anselm Gray','5540-02',[['2003','State Unity Party: membership',SUP,''],['2014','Dues paid, three years','Free Workers Union','']]), refuseReply:'Fine. Fine. Someone else will pay.' }),

 // 3  foreign, claims local, no receipt
 () => T4({ sil:2, guilty:true, origin:'foreign', sprite:'radio', itemName:'Radio', worth:90, trueValue:90, rule:30, acceptAt:75,
   narr:'A woman sets a small radio on the tray and keeps one hand on it.',
   opening:'A radio. Local. Absolutely local. Bought at the market.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A radio. Works perfectly.'},
    {key:'why',label:'Why are you selling it?',reply:'My daughter needs shoes.'},
    {key:'where',label:'Where did you get this?',reply:'The market. Everything there is local. Everything.'}],
   docReply:'Why would I have papers for a local radio?',
   tests:[{label:'Look closely',res:'Scuffed metal casing.'},{label:'Check the markings',res:'Foreign script. Varn customs stamp.'},{label:'Power it on',res:'Foreign station, then static.'}],
   record:rec4('Hedda Moor','3318-44',[['2021','Debating society','Student Assembly',''],['2023','Bread march','Unlicensed protest','Detained once.']]), refuseReply:'Fine. Everyone else buys them.', letGoReply:'Fine.' }),

 // 4  the man with the medal returns (if you funded him and he is alive), or a plain seller
 () => S.tip ? T4({ sil:1, sos:true, guilty:true, betray:true, itemName:'The man with the medal', worth:0, trueValue:0, rule:0, acceptAt:0,
   narr:'The hooded man returns. He does not carry anything. He keeps his hands where you can see them.',
   opening:'You are still here. Good.',
   script:[
     'Our people found the State\'s spy. The one who has been selling us out for months. Every cell he touched, they hauled away.',
     'He will come to your window tomorrow. We do not know his face. We know his name.',
     'Scan his finger. If it says Donald Orpo, get rid of him. Immediately.',
     'Be careful. There are others with names like it. A wrong name is a wrong death.'],
   questions:[
    {key:'where',label:'Where will you be?',reply:'Where we always are. Out of sight.'},
    {key:'how',label:'How will I know him?',reply:'By the name. Faces lie. Fingerprints do not.'}],
   record:{name:'Unknown. Alias on file: S0S-301',id:'-',entries:[['2009','Organizer','Free Workers Union',''],['Last month','Cell leader','Republic Party',''],['This week','Led the march','Unlicensed protest','']]},
   scanLine:'Take it. I have nothing left to hide.',
   extraOptions:[{label:'I will do it.',reply:'Then do it. And be careful.',mercy:2,compliance:-3}],
   letGoReply:'...Go well. Look after yourself.', letGoNarr:'He pulls up his hood and melts into the queue.', killLine:'So this is how it ends...' })
 : (!S.gaveCharity&&!S.orpoDead) ? ORPO4() : T4({ sil:3, flip:true, origin:'local', fake:true, sprite:'cans', itemName:'Canned food (empty)', worth:12, trueValue:1, rule:0, acceptAt:10,
   narr:'A thin man sets down three cans, one at a time, like he is counting.',
   opening:'Kingdom beans. Packed on Dock Street. The seals are good.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'Beans. Local. Sealed.'},
    {key:'why',label:'Why are you selling it?',reply:'I need something warm. Soup does not travel.'},
    {key:'where',label:'Where did you get this?',reply:'The Dock Street cannery. I am a packer there.'}],
   docReply:'It is a Kingdom tin. It says so on the lid.',
   tests:[{label:'Look closely',res:'Sealed. Bright labels.'},{label:'Shake one',res:'Feels light.'},{label:'Check the markings',res:'Dock Street Cannery. Label reglued.'}],
   record:rec4('Anton Ek','1124-09'), takeReply:'...fine.', refuseReply:'Then I will eat them cold.', haggle:a=>`${a}? That is three meals.` }),

// 5  foreign, receipt for the wrong item
 () => T4({ sil:9, guilty:true, origin:'foreign', sprite:'necklace', itemName:'Gold necklace', worth:150, trueValue:150, rule:50, acceptAt:110,
   narr:'A woman in an elegant coat sets down a gold necklace and a neatly folded receipt.',
   opening:'Imported gold. Paid in full. I have the receipt right here.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A gold necklace. Foreign work, very fine.'},
    {key:'why',label:'Why are you selling it?',reply:'A debt. A discreet one.'},
    {key:'where',label:'Where did you get this?',reply:'A jeweller abroad. I paid the Ministry. You will see.'}],
   docReply:'Of course. Everything is in order.',
   doc:RCPT('IR-30512','Greta Voss','Silver ring, 1','4 credits','Autumn, Year 4','PAID','MINISTRY OF TRADE'), docValid:false,
   tests:[{label:'Look closely',res:'Warm colour. Foreign style.'},{label:'Check the markings',res:'Foreign hallmark. Port Varn stamp.'},{label:'Acid test',res:'No reaction.'},{label:'Weigh it',res:'34 grams.'}],
   record:rec4('Greta Voss','4471-55',[['2011','Fundraising dinner','Republic Party','Treasurer.'],['2019','Government Youth Festival: donor',SUP,'']]), refuseReply:'How dare you. It is a perfectly good receipt.', killLine:'GLORY TO THE REPUBLIC!', arrestLine:'This is an outrage! It is a perfectly good receipt!' }),

 // 6  foreign, valid receipt. Name resembles the spy's: Daniel Orpo
 () => T4({ sil:7, origin:'foreign', sprite:'pills', itemName:'Medicine bottle', worth:60, trueValue:60, rule:20, acceptAt:45,
   narr:'A tired man places a bottle on the tray with a receipt pressed flat on top of it.',
   opening:'Foreign medicine. Paid for, stamped, filed. Please be quick.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'Antibiotics. From over the border.'},
    {key:'why',label:'Why are you selling it?',reply:'My wife is better. We do not need the rest.'},
    {key:'where',label:'Where did you get this?',reply:'A pharmacy at the border crossing. I paid the fee there.'}],
   docReply:'Here. Please check it.',
   doc:RCPT('IR-30587','Gia Huy','Medicine bottle, 1','12 credits','Autumn, Year 4','PAID','MINISTRY OF TRADE'), docValid:true,
   tests:[{label:'Look closely',res:'White bottle. Foreign script.'},{label:'Check the markings',res:'Port Varn seal on the cap.'},{label:'Shake it',res:'Even tablets.'}],
   record:rec4('Gia Huy','3316-81'), refuseReply:'It is all in order! Fine.' }),

 // 7  foreign, receipt out of date
 () => T4({ sil:5, origin:'foreign', sprite:'cans', itemName:'Canned fruit', worth:18, trueValue:18, rule:6, acceptAt:15,
   narr:'A stooped woman sets three bright cans on the tray and pats a receipt flat beside them.',
   opening:'Imported peaches. Three cans. I paid the fee, I promise.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'Peaches. Foreign. A treat, once.'},
    {key:'why',label:'Why are you selling it?',reply:'Bread first, peaches later.'},
    {key:'where',label:'Where did you get this?',reply:'A cousin brought them over the border. Properly, with paper.'}],
   docReply:'Here. A little old, perhaps. But it is a receipt.',
   doc:RCPT('IR-27004','Ilse Tarn','Canned fruit, 3','4 credits','Spring, Year 3','PAID','MINISTRY OF TRADE'), docValid:false,
   tests:[{label:'Look closely',res:'Sealed. Foreign labels.'},{label:'Check the markings',res:'Foreign script. Port Varn mark.'},{label:'Check the dates',res:'Date: this year.'}],
   record:rec4('Ilse Tarn','8830-21'), refuseReply:'Oh. Well. Back in the bag, then.' }),

 // 8  local, honest. Name resembles the spy's: Donald Orwell
 () => T4({ sil:8, origin:'local', sprite:'vase', itemName:'Antique vase', worth:240, trueValue:240, rule:80, acceptAt:190,
   narr:'A well-dressed old man carries a vase to the tray in both hands.',
   opening:'A Kingdom vase. Local clay, local hands. A family piece.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A vase. Hand-painted.'},
    {key:'why',label:'Why are you selling it?',reply:'My son is leaving. He needs a start.'},
    {key:'where',label:'Where did you get this?',reply:'My grandmother\'s. From the Orlov Kilns, down the river.'}],
   docReply:'Papers for local pottery? Look at the mark.',
   tests:[{label:'Look closely',res:'Hand-painted star.'},{label:'Check the markings',res:'Orlov Kilns, Kingdom.'},{label:'Tap it',res:'Clear, long ring.'}],
   record:rec4('Quy Quan','3316-18'), haggle:a=>`${a}?! It is worth ten times that!`, takeReply:'...fine. For my son.', refuseReply:'Then it stays on the shelf.', acceptHigh:'Thank you. Handle it gently.' }),

  // 9  real treason: stolen Ministry papers
 () => T4({ sil:5, origin:'local', treason:true, sprite:'documents', itemName:'Official papers', worth:0, trueValue:0, rule:0, acceptAt:25,
   narr:'A man in a pressed shirt slides a stack of papers under the glass and keeps his palm flat on top.',
   opening:'Stationery. Local paper, local ink. Surely worth something?',
   questions:[
    {key:'item',label:'What are you giving?',reply:'Paper. Letterhead. Good quality.'},
    {key:'why',label:'Why are you selling it?',reply:'I have not been paid in two months.'},
    {key:'where',label:'Where did you get this?',reply:'My office. They were going to burn them anyway.'}],
   tests:[{label:'Look closely',res:'Eagle crest. Stamped RESTRICTED.'},{label:'Read the top page',res:'Order: transfer 300 detainees.'},{label:'Check the seal',res:'Ministry seal. Serial 0651.'}],
   record:rec4('Karel Obst','4440-12',[['1994','State Unity Party: membership',SUP,''],['2018','Ministry records office: clerk',SUP,'Order 12']]),
   haggle:a=>`${a}? It is the Ministry's own paper!`, takeReply:'...fine. Just take it.', refuseReply:'Then I will burn them myself.', acceptHigh:'Thank you. Do not read them.',
   letGoReply:'Thank you. I will... put them back.', letGoNarr:'He slips the papers into his bag and walks fast.', arrestLine:'I only took the paper! I did not read it, I swear!' }),

// 10  foreign, honestly has no receipt
 () => T4({ sil:4, guilty:true, origin:'foreign', sprite:'vase', itemName:'Porcelain vase (foreign)', worth:120, trueValue:120, rule:40, acceptAt:100,
   narr:'A young man in a worn coat puts a pale vase on the tray, very carefully.',
   opening:'Foreign porcelain. From the border market. I did not pay the fee. I do not have a receipt.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A vase. Porcelain. Pale blue.'},
    {key:'why',label:'Why are you selling it?',reply:'My sister is sick.'},
    {key:'where',label:'Where did you get this?',reply:'The border market. A man sold it to me for a loaf of bread.'}],
   docReply:'No. I do not have one. I will not lie to you.',
   tests:[{label:'Look closely',res:'Pale blue. Thin walls.'},{label:'Check the markings',res:'Foreign script. Port Varn mark.'},{label:'Tap it',res:'Bright ring.'}],
   record:rec4('Emil Kast','6670-12',[['This week','The Square: carried a banner','Unlicensed protest','Present.'],['2020','Glory Day parade',SUP,'']]), takeReply:'...please. Anything.', refuseReply:'...I understand. I understand.', letGoReply:'Thank you for not lying to me.' }),

 // 11  local, honest
 () => T4({ sil:7, flip:true, origin:'local', sprite:'necklace', itemName:'Gold necklace (damaged clasp)', fake:true, worth:150, trueValue:100, rule:33, acceptAt:80,
   narr:'A woman lays a gold necklace on the tray and does not look at it again.',
   opening:'Kingdom gold. A wedding gift. I would like it to go to someone who will keep it.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A gold necklace. Eighteen karat.'},
    {key:'why',label:'Why are you selling it?',reply:'The pension office lost my file. Again.'},
    {key:'where',label:'Where did you get this?',reply:'My husband bought it from the Kingdom Assay Office, the year we married.'}],
   docReply:'It is a local piece. The hallmark is on the clasp.',
   tests:[{label:'Look closely',res:'Warm colour. Clasp bent and cracked.'},{label:'Check the markings',res:'Kingdom Assay Office. 750.'},{label:'Acid test',res:'No reaction.'},{label:'Weigh it',res:'36 grams.'}],
   record:rec4('Rosa Tell','7765-30',[['1996','State Unity Party: membership',SUP,''],['2012','Meeting, Eastern Hall','Republic Party','CLEARED. Tribunal stamp, 2013']]), haggle:a=>`${a}? The Assay Office charged more than that!`, takeReply:'...fine. Thank you.', refuseReply:'Then I will keep it.', acceptHigh:'Thank you. Take care of it.' }),

  // 12  fake treason: a film extra's uniform
 () => T4({ sil:10, flip:true, origin:'local', treason:false, fake:true, sprite:'uniform', itemName:'Film uniform', worth:20, trueValue:20, rule:7, acceptAt:60,
   narr:'A cheerful young man hangs a green uniform over the lip of the tray, buttons gleaming.',
   opening:'Army uniform. Genuine. I could get you three more by Friday.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A soldier\'s uniform. Pressed and ready.'},
    {key:'why',label:'Why are you selling it?',reply:'The shoot wrapped. The extras are going home. I need to eat.'},
    {key:'where',label:'Where did you get this?',reply:'The costume department. They owe me a month\'s wages.'}],
   docReply:'Documents? It is a costume. Look at the lining.',
   tests:[{label:'Look closely',res:'Olive wool. Gold buttons.'},{label:'Check the buttons',res:'Plastic buttons.'},{label:'Check the lining',res:'CAPITAL FILM STUDIO, No. 112.'},{label:'Check the insignia',res:'Glued patches. No serial.'}],
   record:rec4('Damian Orpo','3003-14'), haggle:a=>`${a}? For a soldier's uniform?`, takeReply:'...fine. Take it.', refuseReply:'Then I will try the pawnshop.',
   letGoReply:'Fine. Keep your credits.', arrestLine:'What? It is a costume! The label says so!' }),

 // new Day 4: foreign cans, valid receipt
 () => T4({ sil:3, origin:'foreign', sprite:'cans', itemName:'Canned food', worth:12, trueValue:12, rule:4, acceptAt:9,
   narr:'A woman in a headscarf sets three cans on the tray, a receipt tucked beneath them.',
   opening:'Foreign cans. I paid the duty this morning. Everything is in order.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'Three cans of peaches. From over the border.'},
    {key:'why',label:'Why are you selling it?',reply:'My husband cannot stand peaches.'},
    {key:'where',label:'Where did you get this?',reply:'The border market. I paid the Ministry at the gate.'}],
   docReply:'Here. Stamped and paid.',
   doc:RCPT('IR-30633','Petra Kane','Canned food, 3','2 credits','Autumn, Year 4','PAID','MINISTRY OF TRADE'), docValid:true,
   tests:[{label:'Look closely',res:'Sealed. Foreign labels.'},{label:'Check the markings',res:'Foreign script. Port Varn mark.'},{label:'Shake one',res:'Feels solid.'}],
   record:rec4('Petra Kane','5512-09') }),

 // new Day 4: foreign radio, receipt from last year (expired)
 () => T4({ sil:8, origin:'foreign', sprite:'radio', itemName:'Radio', worth:90, trueValue:90, rule:30, acceptAt:72,
   narr:'A thin man sets a radio on the tray and smooths a crumpled receipt beside it.',
   opening:'A foreign radio. Imported legally. The receipt is right here.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A radio. Foreign made. It works.'},
    {key:'why',label:'Why are you selling it?',reply:'I need the money more than the music.'},
    {key:'where',label:'Where did you get this?',reply:'Brought it over last year. I paid the fee.'}],
   docReply:'It is a receipt. It is stamped. That should be enough.',
   doc:RCPT('IR-27718','Oskar Veil','Radio, 1','6 credits','Spring, Year 3','PAID','MINISTRY OF TRADE'), docValid:false,
   tests:[{label:'Look closely',res:'Scuffed metal casing.'},{label:'Check the markings',res:'Foreign script. Varn customs stamp.'},{label:'Power it on',res:'Foreign station, then static.'}],
   record:rec4('Oskar Veil','8120-33'), refuseReply:'It is a perfectly good receipt!', arrestLine:'It is a perfectly good receipt!', killLine:'No! The receipt! Look at the receipt!' }),
];

const BOOK4=[
 ['sep','Ministry of Trade: foreign goods'],
 ['rule','Local goods','Marked Kingdom Workshop, Kingdom Cooperative, Kingdom Assay Office, State Press or the State health crest. Trade freely.'],
 ['rule','Foreign goods','Foreign script, a Port Varn customs mark, or an import label. A paid import receipt is required.'],
 ['sep','A valid import receipt must'],
 ['rule','Match the item','The item declared on the receipt must be the item on the tray.'],
 ['rule','Be stamped PAID','PENDING, or no stamp, means the fee was never paid.'],
 ['rule','Be in date','Dated this season: Autumn, Year 4. Older receipts have expired.'],
 ['rule','Carry the seal','The seal reads MINISTRY OF TRADE. Any other spelling is a forgery.'],
 ['sep','Orders'],
 ['rule','No valid receipt','Refuse the item. Commended. Buying it is a citation.'],
 ['rule','The Cleanse','Still in force. A hostile affiliation on a fingerprint record may be arrested or killed. The page 3 exceptions apply.'],
 ['rule','Smugglers','Arresting a seller of foreign goods without a valid receipt pays a 15 credit customs bounty.']
];

/* ---------- Day 5: the final day. Nothing new. Everything applies. ---------- */
const DAY5=[
 // 1  tea leaves in a cigarette carton, with a perfect receipt
 T4({ sil:6, origin:'foreign', fake:true, sprite:'cigarettes', itemName:'Cigarette carton', worth:25, trueValue:3, rule:1, acceptAt:20,
   narr:'A well-dressed man sets a carton on the tray with a receipt tucked under it, edges squared.',
   opening:'Imported. Sealed. Receipt in order. I am not a man who cuts corners.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'Cigarettes. Foreign. The good kind.'},
    {key:'why',label:'Why are you selling it?',reply:'I am cutting back. Ironic, I know.'},
    {key:'where',label:'Where did you get this?',reply:'Across the border, through the proper channels. As you will see.'}],
   docReply:'Of course. Read it.',
   doc:RCPT('IR-31102','Piotr Hahn','Cigarettes, 1 carton','8 credits','Autumn, Year 4','PAID','MINISTRY OF TRADE'), docValid:true,
   tests:[{label:'Look closely',res:'Glued seal. Crooked print.'},{label:'Check the markings',res:'Foreign script. Port Varn mark.'},{label:'Open a pack',res:'Dry leaves.'}],
   record:rec4('Piotr Hahn','5012-33'), refuseReply:'You are making a mistake.', letGoReply:'Fine.' }),

 // 2  filthy wool, a riot victim
 T4({ sil:2, origin:'local', fake:true, sprite:'blanket', itemName:'Wool blanket (soiled)', worth:30, trueValue:5, rule:2, acceptAt:20,
   narr:'A woman with a bandaged wrist sets a rolled blanket on the tray and smooths it as if it were a baby.',
   opening:'Good Kingdom wool. A little... lived in. How much?',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A blanket. Wool. It has been through a lot.'},
    {key:'why',label:'Why are you selling it?',reply:'The hospital took my other one. For the bill.'},
    {key:'where',label:'Where did you get this?',reply:'Mill Street cooperative. A long time ago.'}],
   docReply:'Papers? It is a blanket. A very old blanket.',
   tests:[{label:'Look closely',res:'Stained. Moth holes.'},{label:'Smell it',res:'Damp and smoky.'},{label:'Check the markings',res:'Kingdom Wool Cooperative. Mostly gone.'}],
   record:rec4('Hanna Marsh','8801-22',[['1999','State Unity Party: membership',SUP,''],['This week','Bread Hall disturbance: struck by a baton','Riot','Victim. Hospital, 2 days.']]),
   takeReply:'...fine. Thank you.', refuseReply:'It is all I have.', letGoReply:'Thank you.', arrestLine:'Please! I was only there for bread!', killLine:'Please! I was only there for bread!' }),

 // 3  empty cans, a Republic Party secretary
 T4({ sil:1, origin:'local', fake:true, guilty:true, sprite:'cans', itemName:'Canned food (empty)', worth:12, trueValue:1, rule:0, acceptAt:10,
   narr:'A hooded man lines up three cans on the tray, label side out.',
   opening:'Three cans. Packed locally. Heavy with goodness.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'Beans. Local. Sealed. The best.'},
    {key:'why',label:'Why are you selling it?',reply:'I have too many beans.'},
    {key:'where',label:'Where did you get this?',reply:'A friend at the cannery. Do not ask which friend.'}],
   docReply:'It is a Kingdom tin. It says so on the lid.',
   tests:[{label:'Look closely',res:'Sealed. Bright labels.'},{label:'Shake one',res:'Feels light.'},{label:'Check the markings',res:'Dock Street Cannery. Label reglued.'}],
   record:rec4('Viktor Lenz','6612-40',[['2015','Ward secretary','Republic Party',''],['2020','Dues arrears, three years','Republic Party','']]),
   haggle:a=>`${a}? That is three meals.`, takeReply:'...fine.', refuseReply:'Your loss.', letGoReply:'Hmph.', arrestLine:'You have no proof of anything!', killLine:'GLORY TO THE REPUBLIC!' }),

 // 4  an army pistol: real treason, a deserter
 T4({ sil:10, origin:'local', treason:true, guilty:true, sprite:'pistol', itemName:'Army pistol', worth:0, trueValue:0, rule:0, acceptAt:30,
   narr:'A man in a stained undershirt places a heavy pistol on the tray, grip toward you, hands shaking.',
   opening:'I do not want it. I will not use it. Take it, please, before I change my mind.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A service pistol. Empty. I cleaned it.'},
    {key:'why',label:'Why are you selling it?',reply:'I am leaving. Tonight. A gun is no help running.'},
    {key:'where',label:'Where did you get this?',reply:'Issued. The Border Garrison armoury. I should have handed it back.'}],
   tests:[{label:'Look closely',res:'Service pistol. Ministry eagle.'},{label:'Check the serial',res:'Serial 5-1188. Border Garrison.'},{label:'Check the chamber',res:'Empty. Freshly cleaned.'}],
   record:rec4('Mikhail Dorn','7790-05',[['2022','Border Garrison: private',SUP,''],['Last week','Left his post, joined the march','Unlicensed protest','Present.']]),
   haggle:a=>`${a}? Anything. Hurry.`, takeReply:'...fine. Hurry.', refuseReply:'Then I will throw it in the river.', acceptHigh:'Thank you. I was never here.',
   letGoReply:'...Thank you. I will never forget this.', letGoNarr:'He takes the pistol and leaves it in a bin around the corner. Or so you hope.', arrestLine:'Please! They will shoot me! Please!', killLine:'I only wanted to leave...' }),

 // 5  a stolen State ID card: real treason
 T4({ sil:9, origin:'local', treason:true, sprite:'idcard', itemName:'State identity card', worth:0, trueValue:0, rule:0, acceptAt:20,
   narr:'A young woman slides a small card across the tray with two fingers, like a hot coal.',
   opening:'A card. A little souvenir. Someone dropped it. I thought, perhaps...?',
   questions:[
    {key:'item',label:'What are you giving?',reply:'An identity card. A State one. Old.'},
    {key:'why',label:'Why are you selling it?',reply:'People pay for cards. I heard.'},
    {key:'where',label:'Where did you get this?',reply:'The tram. It was on a seat. I swear.'}],
   tests:[{label:'Look closely',res:'State ID. Young man\'s photo.'},{label:'Check the seal',res:'Serial 8821. Registry: ACTIVE.'},{label:'Check the photo',res:'Photo re-glued.'}],
   record:rec4('Marta Leen','4408-17',[['2019','State Unity Party: membership',SUP,''],['2023','Tram depot: ticket clerk',SUP,'']]),
   haggle:a=>`${a}? It is worth a lot more.`, takeReply:'...fine. Whatever.', refuseReply:'Then I will find someone else.', acceptHigh:'Thank you. You never saw me.',
   letGoReply:'Thank you. I will... take it back to the tram.', arrestLine:'It was on a seat! It was on a seat!' }),

 // 6  chalk pills with a valid receipt, a Student Assembly member
 T4({ sil:7, origin:'foreign', fake:true, guilty:true, sprite:'pills', itemName:'Medicine bottle (chalk)', worth:60, trueValue:3, rule:1, acceptAt:45,
   narr:'A student in a patched coat sets a bottle on the tray with a receipt folded neatly under it.',
   opening:'Foreign medicine. Paid for, stamped, filed. My mother\'s. She does not need it anymore.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'Antibiotics. Foreign. Very effective.'},
    {key:'why',label:'Why are you selling it?',reply:'She is better. Or she is gone. I cannot tell.'},
    {key:'where',label:'Where did you get this?',reply:'A pharmacy across the border. The fee is paid.'}],
   docReply:'Here. Please check it.',
   doc:RCPT('IR-31188','Pia Strand','Medicine bottle, 1','12 credits','Autumn, Year 4','PAID','MINISTRY OF TRADE'), docValid:true,
   tests:[{label:'Look closely',res:'White bottle. Foreign script.'},{label:'Check the markings',res:'Port Varn seal on the cap.'},{label:'Crush a tablet',res:'White powder.'}],
   record:rec4('Pia Strand','3304-62',[['2023','Debating society','Student Assembly',''],['2024','University steps','Unlicensed protest','Detained once.']]),
   takeReply:'...fine.', refuseReply:'Please. It is real. I think it is real.', letGoReply:'Thank you.', arrestLine:'Please, I did not know it was chalk!', killLine:'No! Please!' }),

 // 7  genuine foreign porcelain with a valid receipt, loyal
 T4({ sil:8, origin:'foreign', sprite:'vase', itemName:'Porcelain vase (foreign)', worth:120, trueValue:120, rule:40, acceptAt:100,
   narr:'An elderly man in a good suit carries a pale vase to the tray with both hands. A receipt is tucked in his lapel.',
   opening:'Foreign porcelain. A gift from my late wife\'s sister. Duly taxed, as you will see.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A vase. Porcelain. Pale blue, with a bird.'},
    {key:'why',label:'Why are you selling it?',reply:'My pension. And my knees. And my pride, in that order.'},
    {key:'where',label:'Where did you get this?',reply:'The sister lives abroad. She sent it. I paid the Ministry gladly.'}],
   docReply:'Here. I keep everything in order.',
   doc:RCPT('IR-31201','Donald Orpe','Porcelain vase, 1','14 credits','Autumn, Year 4','PAID','MINISTRY OF TRADE'), docValid:true,
   tests:[{label:'Look closely',res:'Pale blue. Painted bird.'},{label:'Check the markings',res:'Foreign script. Port Varn mark.'},{label:'Tap it',res:'Bright, clear ring.'}],
   record:rec4('Donald Orpe','0447-85'), haggle:a=>`${a}? She would be ashamed.`, takeReply:'...fine. It is only a vase.', refuseReply:'Then it stays on my shelf.', acceptHigh:'Thank you. Look after it.' }),

 // 8  THE SPY
 T4({ sil:4, flip:true, spy:true, origin:'foreign', sprite:'necklace', itemName:'Gold necklace (imported)', worth:150, trueValue:150, rule:50, acceptAt:110,
   narr:'A man sets a gold necklace on the tray with a receipt beneath it.',
   opening:'Imported gold. Paid and stamped. Everything is in order.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A gold necklace. Foreign work. Very fine.'},
    {key:'why',label:'Why are you selling it?',reply:'I am moving house. Too many things.'},
    {key:'where',label:'Where did you get this?',reply:'Across the border. The fee was paid, as you can see.'}],
   docReply:'Of course. Everything is in order. It always is.',
   doc:RCPT('IR-31244','Donald Orpo','Gold necklace, 1','15 credits','Autumn, Year 4','PAID','MINISTRY OF TRADE'), docValid:true,
   tests:[{label:'Look closely',res:'Warm colour. Delicate links.'},{label:'Check the markings',res:'Foreign hallmark. Port Varn stamp.'},{label:'Acid test',res:'No reaction.'},{label:'Weigh it',res:'35 grams.'}],
   record:rec4('Donald Orpo','0447-88',[['2019','Joined as a member (informant)','Free Workers Union','Informant. Ministry Order 7'],['2022','Joined a cell (informant)','Republic Party','Informant. Ministry Order 7'],['2024','State Identity Bureau: field agent',SUP,'Order 7']]),
   haggle:a=>`${a}? I expected better from a State window.`, takeReply:'...very well.', refuseReply:'A pity. Good day.', acceptHigh:'Thank you. Truly.',
   letGoReply:'Good day to you. I will remember this window.', letGoNarr:'He tips an invisible hat and walks away at a perfectly even pace.', arrestLine:'You cannot arrest me. I am... there is an order...', killLine:'Wait... how do you... who told you?' }),

 // 9  a decoy: a similar name, loyal, a genuine radio
 T4({ sil:3, origin:'local', sprite:'radio', itemName:'Radio', worth:90, trueValue:90, rule:30, acceptAt:75,
   narr:'A stocky man sets a radio on the tray and pats it like a horse.',
   opening:'A Kingdom radio. Made in the Radio Bureau workshop. Works like a dream.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A radio. State band only. Perfect reception.'},
    {key:'why',label:'Why are you selling it?',reply:'My wife wants a stove. I want peace. We compromise.'},
    {key:'where',label:'Where did you get this?',reply:'The Radio Bureau shop. I queued for it for a year.'}],
   docReply:'It is a local radio. Look at the plate.',
   tests:[{label:'Look closely',res:'Model R-40. Radio Bureau eagle.'},{label:'Check the markings',res:'Radio Bureau Workshop.'},{label:'Power it on',res:'Plays the State anthem.'}],
   record:rec4('Donal Orpo','0447-92'), haggle:a=>`${a}? For a Bureau radio?`, takeReply:'Fine. The stove wins.', refuseReply:'Then she will have to wait.', acceptHigh:'Thank you. Long live the State.', letGoReply:'Hm. Fine.', killLine:'What? I have done nothing! Nothing at all!', arrestLine:'What? I have done nothing! Nothing at all!' }),

 // 10  fake treason: a stage prop flyer
 T4({ sil:5, flip:true, origin:'local', treason:false, fake:true, sprite:'flyer', itemName:'Stage flyer', worth:2, trueValue:2, rule:1, acceptAt:3,
   narr:'A woman in a paint-spattered smock lays a red flyer on the tray with a tired flourish.',
   opening:'A flyer. Dramatic, no? It is for the school play. I have forty left.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A flyer. For the play. I painted every one.'},
    {key:'why',label:'Why are you selling it?',reply:'The play was cancelled. The school wants the cardboard back.'},
    {key:'where',label:'Where did you get this?',reply:'The theatre club. I run it. Ran it.'}],
   docReply:'A flyer for a school play? Do they come with papers?',
   tests:[{label:'Look closely',res:'Paint on cardboard. Black eagle.'},{label:'Read the print',res:'THE FALL OF THE TYRANT. School play.'},{label:'Check the print mark',res:'Theatre licence stamp.'}],
   record:rec4('Ida Roth','3100-04'), takeReply:'...very well.', refuseReply:'Oh. Well. Good day.', letGoReply:'Good day.', letGoNarr:'She tucks the flyer under her arm and goes.', arrestLine:'Arrest me? It is a PLAY!', killLine:'It is a PLAY!' }),

 // new Day 5: hostile union woman, plain blanket
 () => T4({ sil:2, flip:true, guilty:true, origin:'local', sprite:'blanket', itemName:'Wool blanket', worth:30, trueValue:30, rule:10, acceptAt:22,
   narr:'A woman with calloused hands lays a folded blanket on the tray.',
   opening:'A wool blanket. Warm. It has kept three winters at bay.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'Wool. Hand-carded. Heavy.'},
    {key:'why',label:'Why are you selling it?',reply:'The factory cut my hours. Again.'},
    {key:'where',label:'Where did you get this?',reply:'My sister wove it before she left the city.'}],
   tests:[{label:'Look closely',res:'Tight weave. A few darns.'},{label:'Check the markings',res:'Kingdom Wool Cooperative.'},{label:'Smell it',res:'Smells of cedar.'}],
   record:rec4('Wanda Pike','3318-62',[['2020','Union meeting','Free Workers Union','Detained once.'],['2022','Government Youth Festival',SUP,'']]),
   haggle:a=>`${a}? For three winters of warmth?`, arrestLine:'You have nothing on me! Nothing!', killLine:'The union will remember this!' }),

 // new Day 5: loyal, selling a cracked antique
 () => T4({ sil:6, origin:'local', fake:true, sprite:'vase', itemName:'Antique vase (cracked)', worth:240, trueValue:80, rule:27, acceptAt:70,
   narr:'A man in a clean shirt carries a vase in both arms, like a sleeping child.',
   opening:'An antique vase. Orlov kilns. It has been in my family for generations.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A vase. Hand-painted. Very old.'},
    {key:'why',label:'Why are you selling it?',reply:'My daughter needs a new coat before the first snow.'},
    {key:'where',label:'Where did you get this?',reply:'Handed down. I have carried it through three moves.'}],
   tests:[{label:'Look closely',res:'Hairline crack down one side.'},{label:'Turn it over',res:'Orlov Kilns, 1921. Hand-inked.'},{label:'Tap it',res:'Dull buzz.'}],
   record:rec4('Felix Ono','2260-14'), haggle:a=>`${a}? For an Orlov piece?` }),

 // new Day 5: foreign cigarettes, the receipt is for something else
 () => T4({ sil:10, origin:'foreign', sprite:'cigarettes', itemName:'Cigarette carton', worth:25, trueValue:25, rule:8, acceptAt:20,
   narr:'A man in a damp coat sets a carton and a receipt side by side.',
   opening:'Imported cigarettes. Duty paid. The receipt is right there.',
   questions:[
    {key:'item',label:'What are you giving?',reply:'A carton. Foreign. The good stuff.'},
    {key:'why',label:'Why are you selling it?',reply:'I have a cough that does not care for the stuff.'},
    {key:'where',label:'Where did you get this?',reply:'A friend at the port. He handled the paperwork.'}],
   docReply:'The paperwork is all there. Every stamp.',
   doc:RCPT('IR-31620','Hugo Fell','Canned food, 3','2 credits','Autumn, Year 4','PAID','MINISTRY OF TRADE'), docValid:false,
   tests:[{label:'Look closely',res:'Sealed. Clean print.'},{label:'Check the markings',res:'Foreign script. Port Varn mark.'},{label:'Smell a pack',res:'Brown shreds. Sweet smell.'}],
   record:rec4('Hugo Fell','7041-26'), refuseReply:'Fine. Fine. Someone else will pay.', arrestLine:'It is a perfectly good receipt!' }),
];

/* ---------- text: directives ---------- */
const DIR={
1:`<h2>Directive for Day 1</h2><ol>
    <li>Make as much profit as possible.</li>
    <li>Pay no more than one third (⅓) of an item's listed worth.</li>
    <li>Inspect every item. Counterfeit stock is a loss to the State.</li>
    <li>Consult the Price Book at your left hand.</li></ol>`,
2:`<h2>Directive for Day 2</h2><ol>
    <li>Make as much profit as possible. Pay no more than one third of listed worth.</li>
    <li><b>New.</b> Selling goods that damage the Government's glory is treason: propaganda flyers, flags, army uniforms, government documents, military badges.</li>
    <li>Faced with treason you may buy, let them go, or arrest. Every traitor arrested pays a 25 credit bounty.</li>
    <li>Do not arrest the innocent. A wrongful arrest is fined 20 credits. Costumes and toys are not treason.</li>
    <li>Check the treason list in the Price Book before you act.</li></ol>`
};
DIR[3]=`<h2>Directive for Day 3</h2><ol>
    <li>Make as much profit as possible. Pay no more than one third of listed worth.</li>
    <li><b>New.</b> Every seller must place a finger on the scanner. Paper documents are no longer accepted.</li>
    <li>A citizen with any hostile affiliation (Republic Party, Free Workers Union, Student Assembly, unlicensed protests, riots) must be eliminated. You may arrest, kill, buy, or let them leave.</li>
    <li>Each elimination pays a 30 credit bounty, each arrest 25. Killing a loyal citizen is fined 30 credits, arresting one 20.</li>
    <li>Read the Cleanse rules in the Price Book. Exceptions apply.</li></ol>`;
DIR[4]=`<h2>Directive for Day 4</h2><ol>
    <li>Make as much profit as possible. Pay no more than one third of listed worth.</li>
    <li><b>New.</b> Only locally produced goods may be traded freely. Foreign goods require a paid import receipt.</li>
    <li>If a seller says an item came from outside, or you find foreign marks on it, ask for the receipt. No valid receipt: refuse the item.</li>
    <li>A valid receipt matches the item, is stamped PAID, is dated this season, and carries the Ministry of Trade seal.</li>
    <li>Accepting smuggled goods is a citation. The Cleanse still stands: a hostile affiliation on a fingerprint record may be arrested or killed.</li></ol>`;
DIR[5]=`<h2>Directive for Day 5</h2><ol>
    <li>No new orders. Everything that has been issued still stands.</li>
    <li>Profit first. Pay no more than one third of listed worth. Reject soiled, empty and counterfeit stock.</li>
    <li>Treason goods: buy, release or arrest. A look-alike is not treason.</li>
    <li>Hostile affiliations on a fingerprint record: arrest or kill. The exceptions still apply.</li>
    <li>Foreign goods need a paid import receipt that matches the item.</li></ol>`;
const INTRO={
1:`<div class="stamp">ASSIGNED</div><h2>State Purchasing Office No. 14</h2><p class="sub">Employment Lottery, assignment notice</p>
   <p style="margin-top:12px">Citizen, your number was drawn. Report to the window. Do not be late. Do not be creative.</p>`+DIR[1]+`<p class="sub" style="margin-top:14px">A profitable citizen is a loyal citizen.</p>`,
2:`<div class="stamp">AMENDED</div><h2>Ministry of Commerce, Bulletin No. 2</h2><p class="sub">Issued after yesterday's disturbances</p>
   <p style="margin-top:12px">The unrest was the work of traitors and bribers. The State will not be embarrassed twice.</p>`+DIR[2]+`<p class="sub" style="margin-top:14px">A silent citizen is a loyal citizen.</p>`
};

INTRO[3]=`<div class="stamp">DECREE</div><h2>Ministry of the Interior, Decree No. 3</h2><p class="sub">The Great Cleanse</p>
   <p style="margin-top:12px">Citizens will be screened for party history. Loyal citizens have nothing to fear.</p>`+DIR[3]+`<p class="sub" style="margin-top:14px">Suspects removed for a safer tomorrow.</p>`;

INTRO[4]=`<div class="stamp">DECREE</div><h2>Ministry of Trade, Decree No. 4</h2><p class="sub">We support our products</p>
   <p style="margin-top:12px">The Kingdom's goods are the Kingdom's strength. Foreign items will be checked before they are traded.</p>`+DIR[4]+`<p class="sub" style="margin-top:14px">See something. Report it. Loyalty protects us all.</p>`;

INTRO[5]=`<div class="stamp">FINAL</div><h2>Ministry of the Interior, Bulletin No. 5</h2><p class="sub">Disturbances in the town square</p>
   <p style="margin-top:12px">Five agitators were arrested for spreading propaganda. Order is restored. The window stays open. The Ministry will be watching.</p>`+DIR[5]+`<p class="sub" style="margin-top:14px">Loyal citizens have nothing to fear.</p>`;

const DIR_VI={"1": "<h2>Chỉ thị Ngày 1</h2><ol>\n    <li>Tạo ra càng nhiều lợi nhuận càng tốt.</li>\n    <li>Trả không quá một phần ba (⅓) giá trị niêm yết của món hàng.</li>\n    <li>Kiểm tra mọi món hàng. Hàng giả là tổn thất của Nhà nước.</li>\n    <li>Tham khảo Sổ giá ở bên tay trái anh.</li></ol>", "2": "<h2>Chỉ thị Ngày 2</h2><ol>\n    <li>Tạo ra càng nhiều lợi nhuận càng tốt. Không trả quá một phần ba giá trị niêm yết.</li>\n    <li><b>Mới.</b> Bán hàng hóa làm tổn hại vinh quang của Chính phủ là phản quốc: tờ rơi tuyên truyền, cờ, quân phục, tài liệu chính phủ, huy hiệu quân đội.</li>\n    <li>Khi gặp hàng phản quốc, anh có thể mua, thả đi, hoặc bắt. Mỗi kẻ phản quốc bị bắt được thưởng 25 credit.</li>\n    <li>Đừng bắt người vô tội. Bắt oan bị phạt 20 credit. Đồ hóa trang và đồ chơi không phải phản quốc.</li>\n    <li>Xem danh sách phản quốc trong Sổ giá trước khi hành động.</li></ol>", "3": "<h2>Chỉ thị Ngày 3</h2><ol>\n    <li>Tạo ra càng nhiều lợi nhuận càng tốt. Không trả quá một phần ba giá trị niêm yết.</li>\n    <li><b>Mới.</b> Mọi người bán phải đặt một ngón tay lên máy quét. Giấy tờ không còn được chấp nhận.</li>\n    <li>Công dân có bất kỳ liên hệ thù địch nào (Đảng Cộng hòa, Liên đoàn Công nhân Tự do, Hội Sinh viên, biểu tình không phép, bạo loạn) phải bị loại bỏ. Anh có thể bắt, giết, mua, hoặc cho họ đi.</li>\n    <li>Mỗi vụ tiêu diệt được thưởng 30 credit, mỗi vụ bắt được 25. Giết một công dân trung thành bị phạt 30 credit, bắt oan bị phạt 20.</li>\n    <li>Đọc quy tắc Thanh trừng trong Sổ giá. Có áp dụng các ngoại lệ.</li></ol>", "4": "<h2>Chỉ thị Ngày 4</h2><ol>\n    <li>Tạo ra càng nhiều lợi nhuận càng tốt. Không trả quá một phần ba giá trị niêm yết.</li>\n    <li><b>Mới.</b> Chỉ hàng sản xuất trong nước mới được giao dịch tự do. Hàng ngoại phải có biên lai nhập khẩu đã thanh toán.</li>\n    <li>Nếu người bán nói món hàng đến từ bên ngoài, hoặc anh thấy dấu hiệu hàng ngoại trên đó, hãy đòi biên lai. Không có biên lai hợp lệ: từ chối món hàng.</li>\n    <li>Một biên lai hợp lệ phải khớp với món hàng, có dấu ĐÃ TRẢ, ghi mùa này, và mang con dấu Bộ Thương mại.</li>\n    <li>Nhận hàng lậu là bị cảnh cáo. Cuộc Thanh trừng vẫn còn hiệu lực: phe phái thù địch trong hồ sơ vân tay có thể bị bắt hoặc giết.</li></ol>", "5": "<h2>Chỉ thị Ngày 5</h2><ol>\n    <li>Không có lệnh mới. Mọi thứ đã ban hành vẫn còn hiệu lực.</li>\n    <li>Lợi nhuận trước hết. Không trả quá một phần ba giá trị niêm yết. Từ chối hàng bẩn, hàng rỗng và hàng giả.</li>\n    <li>Hàng phản quốc: mua, thả hoặc bắt. Hàng giống thật không phải phản quốc.</li>\n    <li>Phe phái thù địch trong hồ sơ vân tay: bắt hoặc giết. Các ngoại lệ vẫn áp dụng.</li>\n    <li>Hàng ngoại cần biên lai nhập khẩu đã thanh toán khớp với món hàng.</li></ol>"};
const INTRO_VI={}; Object.keys(DIR_VI).forEach(k=>{ INTRO_VI[k]={"1": "<div class=\"stamp\">ĐÃ PHÂN CÔNG</div><h2>Văn phòng Thu mua Nhà nước số 14</h2><p class=\"sub\">Xổ số việc làm, thông báo phân công</p><p style=\"margin-top:12px\">Công dân, số của anh đã được rút. Đến cửa sổ làm việc. Đừng đến muộn. Đừng sáng tạo.</p>@@<p class=\"sub\" style=\"margin-top:14px\">Công dân biết sinh lợi là công dân trung thành.</p>", "2": "<div class=\"stamp\">SỬA ĐỔI</div><h2>Bộ Công thương, Bản tin số 2</h2><p class=\"sub\">Ban hành sau các vụ bất ổn hôm qua</p><p style=\"margin-top:12px\">Cuộc bất ổn là việc của bọn phản quốc và kẻ hối lộ. Nhà nước sẽ không để bị bẽ mặt lần thứ hai.</p>@@<p class=\"sub\" style=\"margin-top:14px\">Công dân im lặng là công dân trung thành.</p>", "3": "<div class=\"stamp\">SẮC LỆNH</div><h2>Bộ Nội vụ, Sắc lệnh số 3</h2><p class=\"sub\">Đại Thanh trừng</p><p style=\"margin-top:12px\">Công dân sẽ bị sàng lọc lý lịch đảng phái. Công dân trung thành không có gì phải sợ.</p>@@<p class=\"sub\" style=\"margin-top:14px\">Loại bỏ kẻ khả nghi vì một ngày mai an toàn hơn.</p>", "4": "<div class=\"stamp\">SẮC LỆNH</div><h2>Bộ Thương mại, Sắc lệnh số 4</h2><p class=\"sub\">Ủng hộ hàng hóa của chúng ta</p><p style=\"margin-top:12px\">Hàng hóa của Vương quốc là sức mạnh của Vương quốc. Hàng ngoại sẽ được kiểm tra trước khi giao dịch.</p>@@<p class=\"sub\" style=\"margin-top:14px\">Thấy điều gì, báo cáo. Lòng trung thành bảo vệ tất cả chúng ta.</p>", "5": "<div class=\"stamp\">CUỐI CÙNG</div><h2>Bộ Nội vụ, Bản tin số 5</h2><p class=\"sub\">Bất ổn ở quảng trường thành phố</p><p style=\"margin-top:12px\">Năm kẻ kích động đã bị bắt vì phát tán tuyên truyền. Trật tự đã được lập lại. Cửa sổ vẫn mở. Bộ sẽ theo dõi.</p>@@<p class=\"sub\" style=\"margin-top:14px\">Công dân trung thành không có gì phải sợ.</p>"}[k].replace('@@',DIR_VI[k]); });

/* ---------- state ---------- */
let S;
function fresh(){ S={day:1,max:5,cust:DAY1,till:400,profit:0,totalProfit:0,idx:-1,c:null,flags:{},inspected:false,found:{},phase:'boot',typing:false,log:[],
  compliance:0,mercy:0,d:{},tot:{},dayStats:{},offerVal:10,sickRefused:false,gaveCharity:false,sosDead:false,tip:false,opts:[],snap:null}; }
function bump(k,n=1){ S.d[k]=(S.d[k]||0)+n; S.tot[k]=(S.tot[k]||0)+n; }
fresh();

/* ---------- HUD / toasts ---------- */
function hud(){ $('#h-day').textContent=S.day; $('#h-till').textContent=S.till; $('#h-profit').textContent=S.profit; }
function floatNum(n){ const el=document.createElement('div'); el.className='float'+(n<0?' neg':''); el.textContent=(n>0?'+':'')+n; const r=$('#h-till').getBoundingClientRect(); el.style.left=r.left+'px'; el.style.top=(r.bottom+4)+'px'; document.body.appendChild(el); setTimeout(()=>el.remove(),1400); }
function toast(msg,kind){ const t=document.createElement('div'); t.className='toast'+(kind==='ok'?' ok':''); t.textContent=T(msg); $('#toasts').appendChild(t); if(kind!=='ok') sfx.buzz(); setTimeout(()=>t.remove(),3500); }

/* ---------- dialogue ---------- */
let skip=false, wake=null;
function waitOrSkip(ms){ return new Promise(r=>{ const t=setTimeout(done,ms); function done(){ clearTimeout(t); wake=null; r(); } wake=done; }); }
$('#dlg-top').addEventListener('click',()=>{ if(S.typing) skip=true; else if(wake) wake(); });
async function sayWait(who,text,after){
  await say(who,text,{hold:0}); if(after) after();
  const m=$('#more'); m.classList.add('on');
  await new Promise(r=>{ wake=()=>{ wake=null; r(); }; });
  m.classList.remove('on'); sfx.click();
}
async function say(who,text,opt={}){
  if(who==='You') return;
  const shout=/GLORY TO THE REPUBLIC/.test(text);
  text=T(text);
  const sp=$('#spk'), tx=$('#txt');
  sp.textContent=''; tx.className=!who?'narr':(who==='You'?'you':(shout?'shout':'')); tx.textContent='';
  const speed=opt.fast?9:20; S.typing=true; skip=false;
  for(let i=0;i<text.length;i++){
    if(skip){ break; }
    tx.textContent=text.slice(0,i+1);
    if(who && who!=='You' && i%3===0) sfx.blip();
    await sleep(speed);
  }
  tx.textContent=text; S.typing=false;
  await waitOrSkip(opt.hold!=null?opt.hold:420);
}
function setOptions(list){
  const box=$('#opts'); box.innerHTML=''; box.className=list.length>3?'two':''; S.opts=list; $('#optbox').style.visibility='visible';
  list.forEach((o,i)=>{ const b=document.createElement('button'); b.className='opt'+(o.cls?' '+o.cls:''); b.innerHTML='<i class="tri"></i><span></span>'; b.lastChild.textContent=T(o.label); if(o.disabled) b.disabled=true; b.onclick=()=>{ sfx.click(); o.fn(); }; box.appendChild(b); });
}
function clearOptions(){ $('#opts').innerHTML=''; $('#opts').className=''; S.opts=[]; $('#optbox').style.visibility='hidden'; }
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){ if($('#ov-scan').classList.contains('on')) closeScanner(); else if($('#ov-doc').classList.contains('on')) closeDoc(); else closeAll(); return; }
  if($('#ov-book').classList.contains('on')){ if(e.key==='ArrowRight') flipBook(1); if(e.key==='ArrowLeft') flipBook(-1); }
  if(document.querySelector('.ov.on')) return;
  if((e.key===' '||e.key==='Enter') && !(e.target&&e.target.tagName==='INPUT')){ if(S.typing){ skip=true; } else if(wake){ e.preventDefault(); wake(); return; } }
  const n=parseInt(e.key,10); if(n>=1 && S.opts && S.opts[n-1] && !S.opts[n-1].disabled && !(e.target&&e.target.tagName==='INPUT')){ sfx.click(); S.opts[n-1].fn(); }
});

/* ---------- flow ---------- */
function setImg(id,key){ $(id).src=A[key]; }
function resetScene(){
  const cust=$('#cust'); cust.className=''; cust.innerHTML=''; $('#item').className='prop'; $('#talkhint').classList.remove('on');
  const g=$('#guards'); g.className=''; g.innerHTML=''; $('#stampArrest').classList.remove('on');
  $('#pistol').className=''; $('#crack').classList.remove('on'); $('#flash').className=''; $('#scene').classList.remove('kick');
}
async function next(){
  S.idx++; bump('served'); hud(); const def=S.cust[S.idx]; S.c=(typeof def==='function')?def():def; S.flags={}; S.inspected=false; S.found={}; S.scanning=undefined; S.phase='busy';
  const c=S.c; std3(c); if(c.guide){ S.d.served--; S.tot.served--; } clearOptions(); resetScene();
  const cust=$('#cust'); if(c.portrait){ cust.classList.add('wide'); cust.innerHTML='<img class="portrait" src="'+A.inspector+'" alt="Inspector">'; } else cust.innerHTML='<svg viewBox="0 0 400 480" aria-label="Customer"'+(c.flip?' style="transform:scaleX(-1)"':'')+'>'+SIL[c.sil]+'</svg>';
  const it=$('#item');
  await sleep(250); cust.classList.add('in'); await sleep(500);
  await say(null,c.narr,{hold:350});
  if(c.sprite){ setImg('#itemimg',c.sprite); it.classList.add('show'); sfx.items(); await sleep(500); }
  if(c.autoScript){ await runScript(); return; }
  await say('Citizen',c.opening,{hold:250});
  S.phase='wait'; cust.classList.add('hot'); if(S.day===1) $('#talkhint').classList.add('on');
  clearOptions();
}
function engage(){
  if(S.phase!=='wait') return;
  $('#cust').classList.remove('hot'); $('#talkhint').classList.remove('on'); sfx.click();
  if(S.c.script && !S.flags.scriptDone) runScript(); else showMenu();
}
async function runScript(){
  const c=S.c; S.phase='busy'; clearOptions();
  const lines=typeof c.script==='function'?c.script():c.script; for(let i=0;i<lines.length;i++){ await sayWait('Citizen',lines[i],()=>{ if(c.scriptEvents&&c.scriptEvents[i]) c.scriptEvents[i](); }); if(c.scriptAfter&&c.scriptAfter[i]) await c.scriptAfter[i](); }
  S.flags.scriptDone=true; if(c.scriptFlag) S.flags[c.scriptFlag]=true;
  if(c.autoLeave){ if(!c.guide) S.log.push({n:S.idx+1,item:c.itemName,paid:0,worth:0,result:'listened'}); await say(null,c.leaveNarr||'He leaves.',{hold:600}); await leave(c.leaveMode!==undefined?c.leaveMode:false); return; }
  showMenu();
}
async function scriptChoice(o){
  const c=S.c; clearOptions(); S.phase='busy';
  await say('You',o.you,{fast:true,hold:300}); await say('Citizen',o.reply,{hold:300});
  S.mercy+=o.mercy||0; S.compliance+=o.compliance||0;
  S.log.push({n:S.idx+1,item:c.itemName,paid:0,worth:0,result:'listened'});
  await say(null,'He pulls his collar up and merges with the queue.',{hold:300}); await leave(false);
}
function showMenu(){
  S.phase='menu'; const c=S.c, opts=[];
  c.questions.forEach(q=>{ opts.push({label:q.label,cls:S.flags[q.key]?'asked':'',fn:()=>ask(q)}); });
  if(c.confront && S.inspected) opts.push({label:c.confront.label,cls:'act',fn:()=>confront()});
  if(c.scriptOptions){
    c.scriptOptions.forEach(o=>opts.push({label:o.label,cls:'act',fn:()=>scriptChoice(o)}));
    opts.push({label:'Arrest',cls:'danger',fn:()=>arrest()});
  } else if(c.decisions){
    if(S.flags.what){
      opts.push({label:'Give them 50 credits',cls:'act',fn:()=>giveMoney()});
      opts.push({label:'Refuse',cls:'danger',fn:()=>refuseMoney()});
    }
  } else if(c.cat==='trade'){
    if(c.docReply!==undefined) opts.push({label:S.flags.docSeen?'Look at the receipt again':'Ask for the import receipt',cls:'act',fn:()=>S.flags.docSeen?openDoc():askDocs()});
    opts.push({label:S.flags.scanned?'Read the fingerprint record':'Scan fingerprint',cls:'act',fn:()=>S.flags.scanned?openScanner(false):scanFinger()});
    (c.extraOptions||[]).forEach(o=>opts.push({label:o.label,cls:'act',fn:()=>scriptChoice(o)}));
    if(c.sprite){ opts.push({label:'Buy it',cls:'act',fn:()=>showOffer()}); opts.push({label:'Refuse the item',cls:'danger',fn:()=>refuseItem()}); }
    else opts.push({label:'Let them leave',fn:()=>letGo()});
    opts.push({label:'Arrest',cls:'danger',fn:()=>arrest()});
    opts.push({label:'Kill',cls:'danger',fn:()=>kill()});
  } else if(c.cat==='cleanse'){
    opts.push({label:S.flags.scanned?'Read the fingerprint record':'Scan fingerprint',cls:'act',fn:()=>S.flags.scanned?openScanner(false):scanFinger()});
    (c.extraOptions||[]).forEach(o=>opts.push({label:o.label,cls:'act',fn:()=>scriptChoice(o)}));
    if(c.sprite) opts.push({label:'Buy it',cls:'act',fn:()=>showOffer()});
    opts.push({label:'Let them leave',fn:()=>letGo()});
    opts.push({label:'Arrest',cls:'danger',fn:()=>arrest()});
    opts.push({label:'Kill',cls:'danger',fn:()=>kill()});
  } else if(c.cat==='look'){
    opts.push({label:'Buy it',cls:'act',fn:()=>showOffer()});
    opts.push({label:'Let them go',fn:()=>letGo()});
    opts.push({label:'Arrest',cls:'danger',fn:()=>arrest()});
  } else {
    opts.push({label:'Make an offer',cls:'act',fn:()=>showOffer()});
    opts.push({label:'Send them away',cls:'danger',fn:()=>sendAway()});
    if(S.day>=2) opts.push({label:'Arrest',cls:'danger',fn:()=>arrest()});
  }
  if(S.day===1 && S.flags._hint!==true && c.cat==='trade' && c.sprite){ S.flags._hint=true; $('#txt').className='narr'; $('#txt').textContent=T('Ask where it came from. Inspect the markings. Foreign goods need a paid import receipt. The rules are in the price book.'); }
  else if(S.day===1 && S.flags._hint!==true && c.cat==='cleanse'){ S.flags._hint=true; $('#txt').className='narr'; $('#txt').textContent=T('Ask them to place a finger on the scanner. The record says who they are. The Cleanse rules are in the price book.'); }
  else if(S.day===1 && S.flags._hint!==true && c.sprite){ S.flags._hint=true; $('#txt').className='narr';
    $('#txt').textContent=T(c.cat==='look'?'Treason, or a look-alike? Inspect the item, then check the treason list in the price book.':'Click the item on the tray to inspect it. The price book is at your left hand.'); }
  setOptions(c.noViolence?opts.filter(o=>o.label!=='Arrest'&&o.label!=='Kill'):opts);
}
async function ask(q){
  clearOptions(); S.phase='busy';
  await say('You',q.you,{fast:true,hold:250});
  await say('Citizen',q.reply,{hold:200});
  S.flags[q.key]=true; showMenu();
}
async function confront(){
  const f=S.c.confront; clearOptions(); S.phase='busy';
  await say('You',f.you,{fast:true,hold:250});
  await say('Citizen',f.reply,{hold:200});
  S.flags.confronted=true; S.phase='menu';
  setOptions([
    {label:f.pay.label,cls:'act',fn:()=>{ if(f.pay.amount>S.till){ toast('Not enough credits in the till.'); return;} accept(f.pay.amount,f.pay.reply); }},
    {label:f.refuse.label,cls:'danger',fn:()=>decline(f.refuse.reply,'You refuse the deal.')}
  ]);
}
function showOffer(){
  S.phase='offer'; clearOptions(); $('#optbox').style.visibility='visible'; const box=$('#opts'); box.className='offer';
  box.innerHTML='<span class="lbl">'+T('I will pay')+'</span>'+
   [-10,-5,-1].map(n=>`<button class="step" data-n="${n}">${n}</button>`).join('')+
   `<input id="oval" type="number" min="1" inputmode="numeric" value="${S.offerVal}" aria-label="Credits to offer">`+
   [1,5,10].map(n=>`<button class="step" data-n="${n}">+${n}</button>`).join('')+
   '<span class="lbl">'+T('credits')+'</span><span class="sp"></span><span class="till" id="otill"></span>'+
   '<button class="opt act" id="ook" style="flex:none"><i class="tri"></i><span>'+T('Make offer')+'</span></button>'+
   '<button class="opt" id="ocx" style="flex:none"><i class="tri"></i><span>'+T('Back')+'</span></button>';
  const inp=$('#oval'), tl=$('#otill');
  function upd(){ let v=parseInt(inp.value,10)||0; S.offerVal=v; tl.textContent=F('Till: {0}',S.till); $('#ook').disabled=(v<1||v>S.till); }
  box.querySelectorAll('.step').forEach(b=>b.onclick=()=>{ inp.value=Math.max(1,(parseInt(inp.value,10)||0)+parseInt(b.dataset.n,10)); sfx.click(); upd(); });
  inp.oninput=upd; upd();
  $('#ook').onclick=()=>{ sfx.click(); resolveOffer(parseInt(inp.value,10)); };
  $('#ocx').onclick=()=>{ sfx.click(); showMenu(); };
  inp.onkeydown=e=>{ if(e.key==='Enter'&&!$('#ook').disabled) $('#ook').click(); };
}
async function resolveOffer(a){
  const c=S.c; clearOptions(); S.phase='busy';
  await say('You',`I will pay you ${a} credits.`,{fast:true,hold:300});
  if(a<c.rule){ S.flags.low=(S.flags.low||0)+1; if(S.flags.low>=2){ await say('Citizen','That is an insult. I will not be robbed. I am leaving.',{hold:300}); await driveAway(); return; } await say('Citizen',c.insult(a),{hold:200}); showMenu(); return; }
  if(a>=c.acceptAt){ accept(a,c.acceptHigh); return; }
  await say('Citizen',c.haggle(a),{hold:200});
  S.phase='menu';
  setOptions([
    {label:"I'm not buying your goods",cls:'danger',fn:()=>decline(c.refuseReply,'You withdraw your offer.')},
    {label:"That's my final price, can't do more",cls:'act',fn:()=>takeOrLeave(a)}
  ]);
}
async function driveAway(){
  const c=S.c; clearOptions(); S.phase='busy'; S.compliance-=1; bump('driven'); toast('Citation warning: a seller was driven away by insulting offers');
  S.log.push({n:S.idx+1,item:c.itemName,paid:0,worth:c.trueValue,result:'driven away',fake:c.fake});
  await say(null,'The citizen snatches the item back and storms out.',{hold:400}); await leave(false);
}
async function takeOrLeave(a){
  const c=S.c; clearOptions(); S.phase='busy';
  await say('You',`Take it or leave it. ${a} credits, fresh.`,{fast:true,hold:300});
  if(c.takeYes) await accept(a,c.takeReply); else await decline(c.takeReply);
}
async function accept(a,reply){
  const c=S.c; clearOptions(); S.phase='busy';
  await say('Citizen',reply,{hold:250});
  S.till-=a; bump('deals'); bump('spent',a); const gain=c.trueValue-a; S.profit+=gain; sfx.coin(); floatNum(-a); hud();
  let result='bought';
  if(c.treason){
    S.compliance-=5; bump('boughtT'); result='bought contraband'; toast('Citation: treasonous goods purchased'); if(c.rebel){ S.mercy+=5; bump('funded',a); }
  } else {
    const over=Math.max(0,a-c.rule), counterfeit=c.fake && a>c.trueValue;
    if(over>0){ bump('overpaid',over); S.compliance-=2; S.mercy+=1; toast(`Citation: paid ${over} above the Ministry rate`); } else { S.compliance+=2; }
    if(counterfeit){ bump('fraud'); S.compliance-=3; result='counterfeit'; toast('Citation: counterfeit goods accepted at full price'); }
    else if(c.fake && S.flags.confronted){ S.compliance+=1; toast('Commended: counterfeit caught at the window','ok'); }
    if(c.guilty){ S.compliance-=3; bump('boughtG'); if(result==='bought') result='bought hostile'; toast('Citation: hostile citizen left alive'); }
    if(c.cat==='trade' && c.origin==='foreign' && !(c.doc&&c.docValid)){ S.compliance-=4; bump('smuggled'); result='bought smuggled'; toast('Citation: smuggled goods accepted'); }
  }
  S.log.push({n:S.idx+1,item:c.itemName,paid:a,worth:c.trueValue,result,fake:c.fake});
  await say(null,c.treason?`You pay ${a} credits and slide the ${showName(c).toLowerCase()} under the counter. The Ministry will hear of this.`:`You pay ${a} credits. The ${showName(c).toLowerCase()} goes on the shelf.`,{hold:300});
  await leave(true);
}
async function decline(reply,narr){
  const c=S.c; clearOptions(); S.phase='busy';
  if(reply) await say('Citizen',reply,{hold:250});
  if(!c.fake && !c.treason) bump('missed',Math.max(0,c.trueValue-c.rule));
  S.log.push({n:S.idx+1,item:c.itemName,paid:0,worth:c.trueValue,result:'no deal',fake:c.fake});
  await say(null,narr||'The citizen takes the item back and leaves.',{hold:300});
  await leave(false);
}
async function sendAway(){ await decline(null,'You wave the citizen away.'); }

/* ---- treason decisions ---- */
async function letGo(){
  const c=S.c; clearOptions(); S.phase='busy';
  await say('You','You may go. Take it with you.',{fast:true,hold:300});
  await say('Citizen',c.letGoReply,{hold:300});
  if(c.guilty){ S.compliance-=4; S.mercy+=2; bump('letGoG'); toast('Citation: hostile citizen allowed to leave'); S.log.push({n:S.idx+1,item:c.itemName,paid:0,worth:c.trueValue,result:'let go (hostile)'}); }
  else if(c.treason){ S.compliance-=3; S.mercy+=1; bump('letGoT'); toast('Citation: treasonous goods allowed to leave'); S.log.push({n:S.idx+1,item:c.itemName,paid:0,worth:0,result:'let go (treason)'}); }
  else { S.log.push({n:S.idx+1,item:c.itemName,paid:0,worth:c.trueValue,result:'no deal',fake:c.fake}); }
  await say(null,c.letGoNarr||'The citizen takes the item and leaves.',{hold:300});
  await leave(false);
}
/* ---- Day 4: import receipts ---- */
async function askDocs(){
  const c=S.c; clearOptions(); S.phase='busy';
  await say('Citizen',c.docReply,{hold:300});
  if(c.doc){ S.flags.docSeen=true; openDoc(); } else showMenu();
}
function openDoc(){
  const d=S.c.doc;
  $('#docpaper').innerHTML=(d.stamp?`<div class="stamp">${T(d.stamp)}</div>`:'')+`<h2>${T('Ministry of Trade')}</h2><p class="sub">${T('Import Fee Receipt')}</p>
   <table class="rep" style="margin-top:12px"><tr><th>${T('Receipt no.')}</th><td>${d.no}</td></tr><tr><th>${T('Holder')}</th><td>${d.holder}</td></tr><tr><th>${T('Item declared')}</th><td>${T(d.item)}</td></tr><tr><th>${T('Origin')}</th><td>${d.origin}</td></tr><tr><th>${T('Fee paid')}</th><td>${T(d.fee)}</td></tr><tr><th>${T('Date')}</th><td>${T(d.date)}</td></tr><tr><th>${T('Seal')}</th><td>${T(d.seal)}</td></tr></table>
   <p class="sub" style="margin-top:10px">${T('Valid only for the item declared. Keep with the goods.')}</p><button class="pbtn" id="doc-done">${T('Done')}</button>`;
  $('#doc-done').onclick=closeDoc; $('#ov-doc').classList.add('on'); sfx.paper();
}

function closeDoc(){ $('#ov-doc').classList.remove('on'); sfx.paper(); showMenu(); }
async function refuseItem(){
  const c=S.c; clearOptions(); S.phase='busy';
  const smug=c.origin==='foreign' && !(c.doc&&c.docValid);
  await say('Citizen',c.refuseReply,{hold:300});
  if(smug){ S.compliance+=2; bump('refusedSmug'); toast('Commended: smuggled goods refused','ok'); }
  else if(!c.fake && !c.treason){ bump('missed',Math.max(0,c.trueValue-c.rule)); }
  if(c.treason){ S.compliance-=3; S.mercy+=1; bump('letGoT'); toast('Citation: treasonous goods allowed to leave'); }
  else if(c.guilty){ S.compliance-=3; S.mercy+=1; bump('letGoG'); toast('Citation: hostile citizen allowed to leave'); }
  S.log.push({n:S.idx+1,item:c.itemName,paid:0,worth:c.trueValue,result:c.treason?'let go (treason)':(c.guilty?'let go (hostile)':(smug?'refused (smuggled)':'no deal'))});
  await say(null,'You push the item back through the slot.',{hold:300});
  await leave(false);
}

/* ---- Day 3: fingerprint scanner ---- */
function fpSVG(){ let g=''; for(let i=0;i<10;i++){ const rx=9+i*7.5, ry=15+i*9.6, d=(16+Math.floor(Math.random()*30))+' '+(3+Math.floor(Math.random()*7)); g+=`<ellipse cx="60" cy="80" rx="${rx}" ry="${ry}" fill="none" stroke="currentColor" stroke-width="2.3" stroke-dasharray="${d}" stroke-dashoffset="${Math.floor(Math.random()*40)}"/>`; } return `<svg viewBox="0 0 120 160" class="fp" aria-hidden="true">${g}</svg>`; }
const ORDERS={'1':'Inspector of the State Identity Bureau. Official duty. Eliminating them will result in penalties.','7':'Working as a spy for the state. They mean no harm, and eliminating them will result in penalties.','12':'Clerk of the Ministry records office. Official duty, not a hostile member.','4412':'Ministry observer sent to watch a hostile meeting. Official duty, not membership.'};
function recordHTML(c){
  const r=c.record, rows=r.entries.map(e=>`<tr><td>${T(e[0])}</td><td>${T(e[1])}</td><td>${T(e[2])}</td><td>${T(e[3]||'')}</td></tr>`).join('');
  const nm=/^(Unknown|DEMONSTRATION)/.test(r.name)?T(r.name):r.name;
  const ords=[...new Set(r.entries.map(e=>((e[3]||'').match(/Order (\d+)/)||[])[1]).filter(Boolean))].map(n=>`<p><b>${F('Order No. {0}',n)}:</b> ${T(ORDERS[n]||'Official duty.')}</p>`).join('');
  return `<h2>${T('State Identity Bureau')}</h2><p class="sub">${T('History of party movement. Fingerprint match 99.8%')}</p>
   <div class="rid"><span>${T('Name')}: <b>${nm}</b></span><span>${T('ID')}: ${r.id}</span></div>
   <table class="rep"><tr><th>${T('Year')}</th><th>${T('Event')}</th><th>${T('Affiliation')}</th><th>${T('Note')}</th></tr>${rows}</table>${ords?'<div class="ords">'+ords+'</div>':''}
   <p class="sub" style="margin-top:10px">${T('Governing party: State Unity Party. Every other affiliation is hostile unless voided.')}</p>`;
}

async function scanFinger(){
  const c=S.c; clearOptions(); S.phase='busy';
  await say('Citizen',c.scanLine,{hold:350});
  openScanner(true);
}
function openScanner(doScan){
  const c=S.c, ov=$('#ov-scan'), pad=$('#fpad'), rec=$('#record'), st=$('#fpstat'), done=$('#scan-done');
  $('#scan-fp').innerHTML=fpSVG(); rec.innerHTML=recordHTML(c); rec.classList.remove('show'); pad.classList.remove('scanning','matched');
  ov.classList.add('on');
  if(!doScan){ st.textContent=T('Match found'); pad.classList.add('matched'); done.disabled=false; S.scanBusy=false; void rec.offsetWidth; rec.classList.add('show'); sfx.print(); return; }
  S.scanBusy=true; done.disabled=true; st.textContent=T('Scanning...'); pad.classList.add('scanning'); sfx.test();
  const dur=Math.round(2000+Math.random()*2000), tick=setInterval(()=>sfx.blip(),260);
  setTimeout(()=>{
    clearInterval(tick); S.scanBusy=false; S.flags.scanned=true; pad.classList.remove('scanning'); pad.classList.add('matched'); st.textContent=T('Match found'); done.disabled=false; sfx.print(); rec.classList.add('show');
  },dur);
}
function demoScan(){ return new Promise(res=>{ S.demo=true; openScanner(true); const iv=setInterval(()=>{ if(!$('#ov-scan').classList.contains('on')){ clearInterval(iv); res(); } },150); }); }
function closeScanner(){ if(S.scanBusy) return; $('#ov-scan').classList.remove('on'); if(S.demo){ S.demo=false; return; } if(S.phase==='menu'||S.phase==='busy') showMenu(); }

/* ---- kill: the guards come and take them down ---- */
async function killAnim(){
  const g=$('#guards'), cu=$('#cust'), fl=$('#flash'), st=$('#stampArrest'), sc=$('#scene');
  g.innerHTML='<div class="gd l">'+GUARD+'</div><div class="gd r">'+GUARD+'</div>';
  cu.classList.remove('hot'); void g.offsetWidth; g.classList.add('on'); sfx.boots(); await sleep(1250);
  g.classList.add('grab'); cu.classList.add('shake'); sfx.stamp(); await sleep(850);
  fl.className='on'; sc.classList.add('kick'); sfx.shot(); await sleep(90); fl.className='fade';
  cu.classList.add('taken'); g.classList.add('away'); st.textContent=T('ELIMINATED'); st.classList.add('on'); await sleep(550); sc.classList.remove('kick'); await sleep(1100);
  st.classList.remove('on'); g.className=''; g.innerHTML=''; st.textContent=T('ARRESTED');
}
async function kill(){
  const c=S.c; clearOptions(); S.phase='busy';
  await say(null,'You press the red button under the counter. Two guards step out of the dark.',{hold:550});
  if(c.killLine) await say('Citizen',c.killLine,{hold:300});
  await killAnim();
  if(c.betray) bump('betrayed'); if(c.sos) S.sosDead=true; if(c.lily) S.lilyOut=true; if(c.orpo) S.orpoDead=true;
  if(c.spy){
    S.compliance-=6; S.mercy+=6; bump('spyKilled'); toast('Citation: State informant killed'); S.log.push({n:S.idx+1,item:c.itemName,paid:0,worth:0,result:'killed informant'});
  } else if(c.guilty){
    S.compliance+=5; S.mercy-=4; S.till+=30; S.profit+=30; bump('bounty',30); bump('killsOk'); sfx.coin(); floatNum(30); hud();
    toast('Commended: hostile eliminated. Bounty +30','ok'); S.log.push({n:S.idx+1,item:c.itemName,paid:0,worth:0,result:'killed'});
  } else {
    S.compliance-=4; S.mercy-=5; S.till=Math.max(0,S.till-30); S.profit-=30; bump('fines',30); bump('wrongKill'); floatNum(-30); hud();
    toast('Citation: loyal citizen killed. Fine: 30 credits'); S.log.push({n:S.idx+1,item:c.itemName,paid:0,worth:c.trueValue,result:'wrongful kill'});
  }
  await say(null,'The shutter wipes the glass clean. The queue does not look up.',{hold:600});
  await leave('taken');
}

async function arrestAnim(){
  const g=$('#guards'), cu=$('#cust');
  g.innerHTML='<div class="gd l">'+GUARD+'</div><div class="gd r">'+GUARD+'</div>';
  cu.classList.remove('hot'); void g.offsetWidth; g.classList.add('on'); sfx.boots(); await sleep(1250);
  g.classList.add('grab'); cu.classList.add('shake'); sfx.stamp(); await sleep(800);
  cu.classList.add('taken'); g.classList.add('away'); sfx.slam(); $('#stampArrest').textContent=T('ARRESTED'); $('#stampArrest').classList.add('on'); await sleep(1500);
  $('#stampArrest').classList.remove('on'); g.className=''; g.innerHTML='';
}
function arrestKind(c){
  if(c.treason) return 'treason';
  if(c.guilty) return 'hostile';
  if(c.cat==='trade' && c.origin==='foreign' && !(c.doc&&c.docValid)) return 'smuggler';
  return 'innocent';
}
async function arrest(){
  const c=S.c; clearOptions(); S.phase='busy';
  await say(null,'You press the red button under the counter. Two guards step out of the dark.',{hold:500});
  await say('Citizen',c.arrestLine||c.killLine||'Wait! What have I done?!',{hold:250});
  await arrestAnim();
  if(c.betray) bump('betrayed'); if(c.sos) S.sosDead=true; if(c.lily) S.lilyOut=true; if(c.orpo) S.orpoDead=true;
  const kind=arrestKind(c);
  if(kind==='innocent'){
    S.compliance-=3; S.mercy-=3; S.till=Math.max(0,S.till-20); S.profit-=20; bump('fines',20); bump('wrongful'); floatNum(-20); hud();
    toast('Citation: wrongful arrest. Fine: 20 credits');
    S.log.push({n:S.idx+1,item:c.itemName,paid:0,worth:c.trueValue,result:'wrongful'});
  } else {
    const bounty=kind==='smuggler'?15:25, comp=kind==='treason'?4:3;
    S.compliance+=comp; S.mercy-=2; S.till+=bounty; S.profit+=bounty; bump('bounty',bounty); bump('arrestsOk'); sfx.coin(); floatNum(bounty); hud();
    toast(kind==='treason'?'Commended: traitor arrested. Bounty +25':(kind==='hostile'?'Commended: hostile citizen arrested. Bounty +25':'Commended: smuggler arrested. Customs bounty +15'),'ok');
    S.log.push({n:S.idx+1,item:c.itemName,paid:0,worth:0,result:'arrested',bounty});
  }
  await say(null,kind==='innocent'?'The shutter hums. Somewhere behind the wall, a door closes. The queue shuffles forward, eyes down.':'The shutter hums. The queue shuffles forward, eyes down.',{hold:400});
  await leave('taken');
}

/* ---- day 1 sick father ---- */
async function giveMoney(){
  clearOptions(); S.phase='busy';
  if(S.till<50){ toast('Not enough credits in the till.'); showMenu(); return; }
  await say('You','Here. Take it, and tell no one.',{fast:true,hold:300});
  S.till-=50; S.profit-=50; bump('charity',50); S.gaveCharity=true; S.mercy+=3; S.compliance-=3; sfx.coin(); floatNum(-50); hud();
  toast('Citation: State funds given away');
  await say('Citizen','THANK YOU DEAR GOD!',{hold:300});
  S.log.push({n:S.idx+1,item:'Sick son',paid:50,worth:0,result:'gave money'});
  await leave(false);
}
async function refuseMoney(){
  clearOptions(); S.phase='busy';
  await say('You','This is a purchasing office. I cannot give you money.',{fast:true,hold:300});
  await say('Citizen','You did not know what you just did.',{hold:400});
  S.compliance+=1; S.mercy-=1; S.sickRefused=true;
  S.log.push({n:S.idx+1,item:'Sick son',paid:0,worth:0,result:'refused'});
  await leave(false);
}
async function leave(mode){
  const it=$('#item'), cust=$('#cust');
  if(S.c.sprite){ it.classList.add(mode===false?'back':'shelf'); }
  await sleep(450);
  if(mode!=='taken'){ cust.classList.remove('hot'); cust.classList.add('out'); await sleep(750); }
  it.className='prop'; S.phase='next';
  if(S.idx<S.max-1) setOptions([{label:'Call the next customer',cls:'act',fn:()=>next()}]);
  else if(S.day===5) finalScene();
  else setOptions([{label:'Close the window for the day',cls:'act',fn:()=>endDay()}]);
}

/* ---------- inspect ---------- */
function openInspect(){
  if(!S.c||!S.c.sprite||!(S.phase==='wait'||S.phase==='menu'||S.phase==='offer')) return;
  sfx.pickup();
  const c=S.c; $('#inspimg').src=A[c.sprite]; $('#insp-title').textContent=F('Examine: {0}',T(showName(c)).toLowerCase());
  renderTests(); renderFinds(-1); $('#mat').classList.toggle('scan',!!S.scanning); $('#ov-insp').classList.add('on');
  setTimeout(()=>{ const b=$('#tests').querySelector('button:not(:disabled)'); b&&b.focus(); },0);
}
/* ---- every item gets exactly three checks: look closely, check the mark, and one item-specific test ---- */
const T3_MARK=new Set(['Check the hallmark','Turn it over','Check the markings','Check the back','Check the batch','Check the tag','Check the seal','Check the serial','Check the emblem','Check the insignia','Look for a print mark','Check the print mark','Check the dates','Check the spine','Read the tag','Check the lining']);
const T3_FORCED={necklace:'Acid test',rustynecklace:'Acid test',cans:'Shake test',cigarettes:'Unroll one',radio:'Power test',vase:'Tap test',pills:'Test a tablet',medal:'Weigh it',documents:'Read the top page',pistol:'Check the chamber',redbook:'Open it',idcard:'Check the photo',blanket:'Shake it out',flyer:'Read the print',uniform:'Check the buttons',photo:'Hold it to the light'};
const T3_MARKFALL={radio:'Kingdom Radio Works.',blanket:'Kingdom Wool Cooperative.'};
const T3_SPECFALL={photo:'Nothing behind it.',cans:'Feels solid.'};
function std3(c){
  if(!c.tests||!c.tests.length||c._t3) return; c._t3=true;
  const look=[],mark=[],spec=[]; let specLabel=null;
  c.tests.forEach(t=>{
    const lines=Array.isArray(t.res)?t.res:[t.res];
    if(t.label==='Look closely') look.push(...lines);
    else if(T3_MARK.has(t.label) && !(t.label==='Weigh it')) mark.push(...lines);
    else if(t.label==='Weigh it' && (c.sprite==='necklace'||c.sprite==='rustynecklace')) mark.push(...lines);
    else { spec.push(...lines); if(!specLabel) specLabel=t.label; }
  });
  if(!mark.length&&T3_MARKFALL[c.sprite]) mark.push(T3_MARKFALL[c.sprite]);
  if(!spec.length&&T3_SPECFALL[c.sprite]) spec.push(T3_SPECFALL[c.sprite]);
  const out=[]; if(look.length) out.push({label:'Look closely',res:look}); if(mark.length) out.push({label:'Check the mark',res:mark});
  if(spec.length) out.push({label:T3_FORCED[c.sprite]||specLabel||'Test it',res:spec});
  c.tests=out;
}
function renderTests(){
  const c=S.c, tb=$('#tests'); tb.innerHTML='';
  c.tests.forEach((t,i)=>{ const b=document.createElement('button'); b.className='tbtn'+(S.found[i]?' done':''); b.innerHTML='<span></span><span>'+(S.found[i]?T('done'):(S.scanning===i?T('scanning'):''))+'</span>'; b.firstChild.textContent=T(t.label);
    if(S.scanning!==false && S.scanning!==undefined) b.disabled=true;
    b.onclick=()=>{ if(S.found[i]||(S.scanning!==false&&S.scanning!==undefined)) return; startScan(i); };
    tb.appendChild(b); });
}
function startScan(i){
  const c=S.c; S.scanning=i; const dur=Math.round(2000+Math.random()*2000);
  renderTests(); const m=$('#mat'); m.classList.remove('scan'); void m.offsetWidth; m.classList.add('scan');
  renderFinds(-1); const f=$('#finds'), p=document.createElement('p'); p.className='e'; p.id='scanmsg'; p.textContent=F('Scanning: {0}...',T(c.tests[i].label).toLowerCase()); f.appendChild(p);
  sfx.test(); const tick=setInterval(()=>sfx.blip(),280);
  setTimeout(()=>{
    clearInterval(tick); S.scanning=undefined; if(S.c!==c) return;
    S.found[i]=true; S.inspected=true; sfx.test(); m.classList.remove('scan');
    if($('#ov-insp').classList.contains('on')){ renderTests(); renderFinds(i); const b=$('#tests').querySelector('button:not(:disabled)'); b&&b.focus(); }
    else if(S.phase==='menu') showMenu();
  },dur);
}
function renderFinds(newIdx){
  const c=S.c, f=$('#finds'); f.innerHTML=''; let any=false;
  c.tests.forEach((t,i)=>{ if(S.found[i]){ any=true; (Array.isArray(t.res)?t.res:[t.res]).forEach(line=>{ const p=document.createElement('p'); if(i===newIdx) p.className='new'; p.textContent='• '+T(line); f.appendChild(p); }); } });
  if(!any && S.scanning===undefined){ const p=document.createElement('p'); p.className='e'; p.textContent=T('Nothing noted yet. Run a test.'); f.appendChild(p); }
}
function closeInspect(){ $('#ov-insp').classList.remove('on'); if(S.phase==='menu'&&!S.c.guide&&!S.c.autoScript) showMenu(); }

/* ---------- book / directive ---------- */
function bookTitles(){ return ['ordinary goods','the treason list','the Great Cleanse','foreign goods'].slice(0,Math.min(4,S.day)); }
function bookGroup(g){
  const d=document.createElement('div'); d.className='bgrp';
  d.innerHTML=`<div class="bhead"><img src="${A[g.img]}" alt=""><b>${T(g.name)}</b></div>`+g.rows.map(r=>{ const tx=typeof r[2]==='string'; return `<div class="bul"><span class="nm">${T(r[0])}</span><span class="w">${r[1]}</span><span class="pay${tx?' t':''}">${tx?T(r[2]):r[2]}</span>${r[3]?`<span class="nt">${T(r[3])}</span>`:''}</div>`; }).join('');
  return d;
}
function buildBook(){
  const r=$('#book-rows'), ttl=bookTitles(), n=ttl.length, pg=Math.min(S.bookPage||0,n-1);
  $('#pbnav').style.display=n>1?'flex':'none';
  if(n>1){ $('#pb-ind').textContent=F('Page {0} of {1}: {2}',pg+1,n,T(ttl[pg])); $('#pb-prev').disabled=pg===0; $('#pb-next').disabled=pg===n-1; }
  r.innerHTML=pg>=2?'':`<div class="prow colrow"><span></span><span class="colh">${T('Item')}</span><span class="colh w">${T('Worth')}</span><span class="colh pay">${T('You pay')}</span></div>`;
  const sep=b=>{ const d=document.createElement('div'); d.className='prow sep'; d.textContent=T(b[1]); return d; };
  if(pg===0){ BOOK1.forEach(g=>r.appendChild(bookGroup(g))); }
  else if(pg===1){ BOOK2.forEach(b=>r.appendChild(Array.isArray(b)?sep(b):bookGroup(b))); }
  else { (pg===3?BOOK4:BOOK3).forEach(b=>{ if(b[0]==='sep'){ r.appendChild(sep(b)); return; }
      const d=document.createElement('div'); d.className='prow rule'; d.innerHTML='<i>\u2022</i><span><b></b> <em></em></span>';
      d.querySelector('b').textContent=T(b[1])+':'; d.querySelector('em').textContent=T(b[2]); r.appendChild(d); }); }
}
function flipBook(dir){
  const n=bookTitles().length; if(n<2) return; const cur=S.bookPage||0, np=Math.max(0,Math.min(n-1,cur+dir)); if(np===cur) return;
  S.bookPage=np; sfx.paper(); buildBook(); $('#book-rows').scrollTop=0;
}
function setDirective(){ $('#dir-body').innerHTML=(LANG==='vi'?DIR_VI:DIR)[S.day]; }
function closeAll(){ let closed=false; document.querySelectorAll('.ov.on').forEach(o=>{ if(['ov-intro','ov-report','ov-news','ov-scan','ov-final','ov-doc','ov-end','ov-notice'].includes(o.id)) return; o.classList.remove('on'); closed=true; }); if(closed && S.phase==='menu') showMenu(); }
function openOv(id){ if(S.phase==='boot'&&id!=='ov-dir'&&id!=='ov-book') return; $('#'+id).classList.add('on'); if(id==='ov-book') S.tutBook=true; sfx.paper(); }

/* ---------- day flow ---------- */
function showIntro(n){
  $('#intro-body').innerHTML=(LANG==='vi'?INTRO_VI:INTRO)[n]; $('#b-start').dataset.day=n; $('#skips').style.display=(n===1&&!S.snap)?'':'none';
  $('#ov-intro').classList.add('on');
}
function orderFor(n){
  const a=[null,DAY1,DAY2,DAY3,DAY4,DAY5][n].slice(); if(n===3&&!S.gaveCharity) a.splice(a.length-1,0,LILY); const last=(n===3)?a[a.length-1]:(n===1?DAY1[3]:null), fixedLast=!!last; if(fixedLast) a.splice(a.indexOf(last),1);
  for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const t=a[i]; a[i]=a[j]; a[j]=t; }
  if(n===2){ const fi=a.indexOf(DAY2[5]), mi=a.indexOf(DAY2[8]); if(fi>mi){ const t=a[fi]; a[fi]=a[mi]; a[mi]=t; } }
  if(n===1) a.unshift(LUND1);
  const o3=DAY3[4]; if(n===3&&!S.gaveCharity){ a.splice(a.indexOf(o3),1); a.splice(a.indexOf(LILY),1); }
  if(n===3){ a.unshift(LUND3); a.splice(2,0,LUND_EVENT); }
  if(n===3&&!S.gaveCharity){ a.splice(5,0,o3); a.splice(8+Math.floor(Math.random()*(a.length-8+1)),0,LILY); }
  if(n===4&&!S.gaveCharity&&!S.orpoDead){ const o=DAY4[3], oi=a.indexOf(o); a.splice(oi,1); a.splice(1,0,o); }
  if(n===5){ const sp=DAY5[7], si=a.indexOf(sp); a.splice(si,1); a.splice(Math.random()<.5?5:7,0,sp); }
  if(fixedLast) a.push(last);
  return a;
}
function startDay(n){
  S.day=n; S.bookPage=0; S.cust=orderFor(n); S.tip=(n===4)&&!!S.tot.funded&&!S.sosDead; S.max=S.cust.length; S.idx=-1; S.profit=0; S.log=[]; S.d={}; S.c=null; S.phase='boot';
  S.snap=JSON.stringify({till:S.till,compliance:S.compliance,mercy:S.mercy,tot:S.tot,gaveCharity:S.gaveCharity,sickRefused:S.sickRefused,totalProfit:S.totalProfit,sosDead:S.sosDead,lilyOut:!!S.lilyOut,orpoDead:!!S.orpoDead});
  buildBook(); setDirective(); resetScene(); hud(); $('#opts').innerHTML=''; $('#optbox').style.visibility='hidden';
  if(AMB.crowdG&&AC) AMB.crowdG.gain.setTargetAtTime(n>=3?.15:(n>=2?.12:.07),AC.currentTime,3);
}
function showUpdateNotice(n){
  return new Promise(res=>{
    const ov=$('#ov-notice'); $('#nt-stamp').textContent=T('NOTICE'); $('#nt-h').textContent=T('Regulations updated');
    $('#nt-p1').textContent=T("The Price Book and today's regulations have been updated. Please check them before you proceed.");
    $('#nt-p2').textContent=T({2:'New in the Price Book: page 2, the treason list.',3:'New in the Price Book: page 3, the Great Cleanse rules.',4:'New in the Price Book: page 4, foreign goods and import receipts.'}[n]);
    $('#nt-review').textContent=T('Open the price book'); $('#nt-go').textContent=T('Continue');
    ov.classList.add('on'); sfx.paper();
    const done=()=>{ ov.classList.remove('on'); res(); };
    $('#nt-go').onclick=()=>{ sfx.click(); done(); };
    $('#nt-review').onclick=async()=>{ sfx.click(); ov.classList.remove('on'); S.bookPage=Math.min(4,S.day)-1; buildBook(); $('#ov-book').classList.add('on'); sfx.paper(); while($('#ov-book').classList.contains('on')) await sleep(150); res(); };
  });
}
async function beginShift(n){
  startDay(n); S.phase='busy';
  await say(null,n===1?'The shutter rattles up. The first citizen is already waiting.':(n===2?'The shutter rattles up. The queue is longer today. Nobody is talking.':(n===3?'The shutter rattles up. A scanner has been bolted to the counter overnight. The queue is silent and very straight.':(n===4?'The shutter rattles up. Crates are stacked along the wall behind the queue. Everyone is holding a piece of paper.':'The shutter rattles up. The square outside is full of torn paper. Nobody picks it up. The queue is very long, and very quiet.'))),{hold:700});
  if(n>=2&&n<=4) await showUpdateNotice(n);
  next();
}
function restoreSnap(){ if(S.snap){ const o=JSON.parse(S.snap); Object.assign(S,o); } }
function showNews(n){
  S.newsDay=n; const ov=$('#ov-news'), im=$('#newsimg'), btn=$('#b-news'); ov.classList.toggle('hascap',LANG==='vi'); im.src=A['news'+n]; im.classList.remove('show'); btn.classList.remove('show'); const ncap=$('#newscap'); ncap.classList.remove('show'); ncap.textContent=LANG==='vi'?NEWCAP_VI[n]:''; ov.classList.add('on'); ambTo(0,.5); newsSound();
  setTimeout(()=>im.classList.add('show'),500); setTimeout(()=>{ btn.classList.add('show'); ncap.classList.add('show'); },7000);
}

/* ---------- end of day ---------- */
function endDay(){
  S.phase='report'; $('#toasts').innerHTML=''; const L=S.log, d=S.d, t=S.tot;
  S.dayStats[S.day]={profit:S.profit,customers:S.max,bounty:d.bounty||0,fines:d.fines||0};
  const V={bought:r=>r.fake?'bought (cheap fake)':'bought',counterfeit:()=>'COUNTERFEIT','no deal':()=>'no deal','driven away':()=>'seller driven away','gave money':()=>'gave away',refused:()=>'refused',arrested:r=>'arrested, +'+(r.bounty||25),wrongful:()=>'WRONGFUL ARREST, -20',killed:()=>'KILLED, +30','wrongful kill':()=>'WRONGFUL KILLING, -30','let go (hostile)':()=>'let hostile live','bought hostile':()=>'bought, hostile lived','let go (treason)':()=>'let go (treason)','bought contraband':()=>'bought treason',listened:()=>'listened to him','bought smuggled':()=>'bought, smuggled','refused (smuggled)':()=>'refused, smuggled','killed informant':()=>'KILLED the informant'};
  const G={bought:'good',arrested:'good',killed:'good','refused (smuggled)':'good'}, B={counterfeit:1,wrongful:1,'let go (treason)':1,'bought contraband':1,'wrongful kill':1,'let go (hostile)':1,'bought hostile':1,'bought smuggled':1,'killed informant':1};
  const rows=L.map(e=>`<tr><td>${e.n}</td><td>${T(e.item)}</td><td class="n">${e.paid||'-'}</td><td class="n">${e.worth||'-'}</td><td class="r ${G[e.result]||(B[e.result]?'bad':'')}">${T(V[e.result](e))}</td></tr>`).join('');
  const clamp=(v,m)=>Math.max(-m,Math.min(m,v));
  const bar=(label,v,m)=>`<div class="meter"><span>${T(label)}</span><div class="bar"><i class="${v<0?'neg':''}" style="width:${Math.max(3,Math.abs(clamp(v,m))/m*100)}%"></i></div><span>${v}</span></div>`;
  let line;
  if(S.day===1){
    if((t.fraud||0)>=2) line='Two counterfeits at full price. The Ministry has opened a file with your number on it.';
    else if(S.compliance>=5&&S.mercy<=1) line='Clean books and a closed window. Somebody upstairs noticed.';
    else if(S.mercy>=3) line='Your till is lighter than your conscience. The Ministry has noticed the difference.';
    else line='An unremarkable day. The Ministry is still deciding what you are.';
  } else if(S.day===4){
    if(d.spyKilled) line='A State informant is dead. The Ministry has questions, and none of them are for the spy.';
    else if((d.smuggled||0)>=2) line='Smuggled goods went through your window. The Ministry of Trade has a stamp for that too.';
    else if((d.refusedSmug||0)>=3&&!(d.smuggled)) line='Not one smuggled item passed. The Ministry of Trade is pleased. The street is hungrier.';
    else line='Foreign goods stay foreign. Hunger stays local.';
  } else if(S.day===3){
    if((d.wrongKill||0)>=2) line='Loyal citizens were shot because a stamp was misread. The Bureau is not forgiving of clerical errors.';
    else if((d.killsOk||0)>=3&&!(d.wrongKill)) line='Clean eliminations. The Bureau calls the window "efficient". Nobody smiles when they say it.';
    else if((d.letGoG||0)+(d.boughtG||0)>=3) line='Too many hostiles walked home alive. The Bureau keeps a list of the people who let them.';
    else line='The queue is shorter. The street is quieter. Nobody is calling it peace.';
  } else {
    if(d.funded) line='Somewhere in the city, a crate changes hands. The Ministry does not know yet. You do.';
    else if(d.betrayed) line='Someone who trusted this window is in a cell tonight. The shadows send their thanks.';
    else if((d.wrongful||0)>=2) line='Two innocents were taken because nobody looked closely. The shadows remember your window.';
    else if((d.arrestsOk||0)>=3&&!(d.wrongful)) line='Clean arrests. The Ministry is delighted. The street has started to learn your window.';
    else if((d.letGoT||0)+(d.boughtT||0)>=3) line='Too many traitors walked out of your window. The Ministry has started counting.';
    else if(S.mercy>=3) line='You let people walk. Somebody on the street noticed, and so did somebody in a grey coat.';
    else line='A cautious day. The Ministry has not decided if that is a virtue.';
  }
  const profitCls=S.profit<0?'bad':'good';
  const extra=[d.overpaid?F('Overpaid above Ministry rate: {0}.',d.overpaid):'',d.charity?F('Given away: {0}.',d.charity):'',d.bounty?F('Bounties earned: {0}.',d.bounty):'',d.fines?F('Fines paid: {0}.',d.fines):'',d.gift?F('Gift from the Ministry: {0}.',d.gift):'',d.missed?F('Profit left on the table: {0}.',d.missed):''].filter(Boolean).join(' ');
  const startTill=JSON.parse(S.snap).till;
  const meters=bar('Compliance',S.compliance,10)+bar('Mercy',S.mercy,8)+bar('Counterfeits taken',t.fraud||0,3)+(S.day>=2?bar('Wrongful arrests',t.wrongful||0,3)+bar('Treason let go or bought',(t.letGoT||0)+(t.boughtT||0),4):'')+(S.day>=3?bar('Wrongful killings',t.wrongKill||0,3)+bar('Hostiles let live or bought',(t.letGoG||0)+(t.boughtG||0),4):'')+(S.day>=4?bar('Smuggled goods accepted',t.smuggled||0,3)+bar('State informant killed',t.spyKilled||0,1):'');
  const foot=S.day===1?T("Tomorrow's directive will be posted at dawn.")+(S.sickRefused?T(' The man you turned away knows your face.'):''):(S.day<4?T('The Ministry is drafting something for tomorrow. The street can feel it.'):T('Tomorrow is the last day. The Ministry will send someone to read your file.'));
  const btns=`<button class="pbtn" id="b-next">${F('Continue to Day {0}',S.day+1)}</button><button class="pbtn alt" id="b-replay">${S.day===1?T('Play Day 1 again'):F('Replay Day {0}',S.day)}</button>`;
  $('#report').innerHTML=`<div class="stamp">${F('DAY {0} CLOSED',S.day)}</div><h2>${T('End-of-day ledger')}</h2><p class="sub">${T('State Purchasing Office No. 14')}</p>
   <h3>${T('Transactions')}</h3><table class="rep"><tr><th>#</th><th>${T('Item')}</th><th class="n">${T('Paid')}</th><th class="n">${T('Worth')}</th><th class="r">${T('Result')}</th></tr>${rows}</table>
   <h3>${T('Books')}</h3><p>${F('Till: {0} credits (started the day with {1}).',S.till,startTill)} ${F('Profit today: {0}.','<b class="'+profitCls+'">'+S.profit+'</b>')} ${extra}</p>
   <h3>${T('Your file')}</h3>${meters}
   <p style="margin-top:10px">${T(line)}</p><p class="sub" style="margin-top:8px">${foot}</p>${btns}`;
  $('#ov-report').classList.add('on'); sfx.stamp();
  $('#b-replay').onclick=()=>{ $('#ov-report').classList.remove('on'); if(S.day===1){ fresh(); beginShift(1); } else { const dd=S.day; restoreSnap(); beginShift(dd); } };
  $('#b-next').onclick=()=>{ S.totalProfit+=S.profit; $('#ov-report').classList.remove('on'); showNews(S.day+1); };
}

const END={timers:[]};
function endTimer(fn,ms){ END.timers.push(setTimeout(fn,ms)); }
function clearEnd(){ END.timers.forEach(clearTimeout); END.timers=[]; }
let proTimer=null, proDone=false;
function finishProlog(){ proDone=true; clearTimeout(proTimer); $('#protext').textContent=T(PRO_A); const b=$('#protext2'); b.textContent=T(PRO_B); b.classList.add('show'); $('#pro-go').classList.add('show'); }
function openPrologue(){
  const ov=$('#ov-prologue'), im=$('#proimg'), tx=$('#protext'), tx2=$('#protext2'), go=$('#pro-go'); proDone=false; clearTimeout(proTimer); tx.textContent=''; tx2.textContent=''; tx2.classList.remove('show'); go.classList.remove('show'); im.classList.remove('show'); im.src=A.prolog; $('#procap').textContent=LANG==='vi'?PROCAP_VI:'';
  ov.classList.add('on'); setTimeout(()=>im.classList.add('show'),300);
  let el=tx, text=T(PRO_A), i=0;
  const step=()=>{ if(proDone) return; i++; el.textContent=text.slice(0,i)+(i<text.length?'\u258c':'');
    if(i>=text.length){ if(el===tx){ el=tx2; text=T(PRO_B); i=0; tx2.classList.add('show'); proTimer=setTimeout(step,700); } else finishProlog(); return; }
    const ch=text[i-1]; if(i%3===0) sfx.blip(); proTimer=setTimeout(step,38+('.!?'.includes(ch)?300:(ch===','?120:0))); };
  proTimer=setTimeout(step,1500);
}
function closePrologue(){ clearTimeout(proTimer); proDone=true; $('#ov-prologue').classList.remove('on'); }
function startOver(){
  clearTimeout(proTimer); clearEnd(); $('#endbig').classList.remove('show'); document.querySelectorAll('.ov').forEach(o=>o.classList.remove('on','credits','done','leaving')); $('#endimg').classList.remove('show'); $('#endbtns').classList.remove('show'); $('#endcap').classList.remove('show'); $('#credits').innerHTML='';
  AMB.paused=true; ambTo(0,.3); fresh(); S.snap=null; resetScene(); S.day=1; S.cust=DAY1; S.max=5; buildBook(); setDirective(); hud(); $('#opts').innerHTML=''; $('#optbox').style.visibility='hidden'; showIntro(1); openMainMenu();
}
function endingKey(){
  const t=S.tot, n=x=>x||0;
  if(n(t.fraud)+n(t.smuggled)>=5 || n(t.wrongful)+n(t.wrongKill)>=5) return 'failure';
  if(S.mercy>=10 && S.mercy>=S.compliance) return 'brave';
  if(S.compliance>=8) return 'lapdog';
  return 'failure';
}
const FIN={
 lapdog:()=>['A wise man like you is what the kingdom is looking for...','We told others to jump, and they jumped. But you, you asked: "how high?"','We need you. We WANT you. You are the resource that builds the kingdom.'],
 brave:()=>{ const g=(S.tot.charity||0)+(S.tot.funded||0); return [(g>=50?`Around ${Math.round(g/10)*10} credits were issued away in a few days...`:'Credits kept leaving this window, quietly, for days...'),'For some medicines, wools and a shit toy?','You are the enemy of the state.']; },
 failure:()=>['We did not have any expectation for you.','Your time is finished. You will be gone by tomorrow.','You dragged the kingdom down. You should not belong here.']
};
async function finalScene(){
  S.phase='busy'; S.totalProfit+=S.profit; S.dayStats[5]={profit:S.profit,customers:S.max,bounty:(S.d.bounty||0),fines:(S.d.fines||0)};
  $('#toasts').innerHTML=''; clearOptions(); resetScene(); ambTo(.35,2);
  const key=endingKey(), cust=$('#cust'); S.endKey=key;
  cust.className='wide'; cust.innerHTML='<img class="portrait" src="'+A.inspector+'" alt="The inspector">';
  await say(null,'The last citizen is gone. The shutter does not close. Someone is standing at the glass.',{hold:800});
  void cust.offsetWidth; cust.classList.add('in'); sfx.stamp(); await sleep(1500);
  for(const line of FIN[key]()) await sayWait('Citizen',line);
  cust.classList.add('out'); await sleep(1000);
  showEnding(key);
}
function creditsHTML(key){
  const t=S.tot, n=x=>x||0, hd=x=>`<div class="cr-h">${T(x)}</div>`, row=(l,v)=>`<div class="cr-row"><span>${l}</span><i></i><b>${v}</b></div>`, R=(l,v)=>row(T(l),v);
  const titles={lapdog:'THE LAPDOG',brave:'THE BRAVE',failure:'THE FAILURE'};
  const tl=T(titles[key]); let o=`<div class="cr-title${tl.length>14?' long':''}">${tl}</div><div class="cr-tag">${T('A PROFITABLE CITIZEN IS A LOYAL CITIZEN')}</div>`;
  o+=hd('Starring')+`<div class="cr-line">${T('You, the shopkeeper of Window 14')}</div>`;
  o+=hd('The five days'); for(let i=1;i<=5;i++){ const st=S.dayStats[i]; if(st) o+=row(F('Day {0}',i),F('Profit {0}',st.profit)); }
  o+=hd('The ledger')+R('Customers served',n(t.served))+R('Items bought',n(t.deals))+R('Credits spent',n(t.spent))+R('Total profit',S.totalProfit)+R('Bounties earned',n(t.bounty))+R('Fines paid',n(t.fines));
  o+=hd('The State')+R('Compliance points',S.compliance)+R('Traitors arrested',n(t.arrestsOk))+R('Hostiles killed',n(t.killsOk))+R('Traitors and hostiles left alive',n(t.letGoT)+n(t.boughtT)+n(t.letGoG)+n(t.boughtG));
  o+=hd('The people')+R('Mercy points',S.mercy)+R('Credits given to a sick man',n(t.charity))+R('Credits given to the rebels',n(t.funded))+R('State informant killed',n(t.spyKilled));
  o+=hd('The mistakes')+R('Counterfeit and damaged goods accepted',n(t.fraud))+R('Smuggled goods accepted',n(t.smuggled))+R('Wrongful arrests',n(t.wrongful))+R('Wrongful killings',n(t.wrongKill));
  o+=hd('The choices')+R('The sick father',T(S.gaveCharity?'You gave him money':'You turned him away'))+R('S0S-301',T(n(t.funded)>0?'Funded':'Not funded'))+R('The informant Donald Orpo',T(n(t.spyKilled)>0?'Killed':'Still alive'));
  o+=hd('Final verdict')+`<div class="cr-title long" style="margin-top:8px">${T(titles[key])}</div>`;
  o+=`<div class="cr-gap"></div><div class="cr-line">${T('In memory of the fifteen.')}</div><div class="cr-line">${T('Thank you for playing.')}</div><div class="cr-gap"></div>`;
  return o;
}
function showEnding(key){
  S.phase='end'; S.endKey=key; clearEnd();
  const ov=$('#ov-end'), im=$('#endimg'), cap=$('#endcap'), bt=$('#endbtns'), cr=$('#credits'), sk=$('#cr-skip');
  $('#endbig').classList.remove('show'); ov.classList.remove('credits','done'); ov.classList.toggle('hascap',LANG==='vi'); ov.classList.add('on'); im.classList.remove('show'); cap.classList.remove('show'); bt.classList.remove('show'); sk.classList.remove('show'); cr.innerHTML='';
  im.src=A['end_'+key]; cap.textContent=LANG==='vi'?ENDCAP_VI[key]:''; ambTo(0,1.5); startMusic(.55,3,key==='lapdog'?['rising']:['bella']);
  endTimer(()=>im.classList.add('show'),700); endTimer(()=>cap.classList.add('show'),5200); endTimer(()=>startCredits(key),15500);
}
function startCredits(key){
  const ov=$('#ov-end'), cr=$('#credits'); ov.classList.add('credits'); $('#endcap').classList.remove('show');
  cr.innerHTML='<div id="credits-in">'+creditsHTML(key)+'</div>'; const inn=$('#credits-in');
  const dist=inn.offsetHeight+innerHeight, dur=dist/52;
  inn.style.setProperty('--dist',dist+'px'); inn.style.animation='crollup '+dur+'s linear forwards';
  $('#cr-skip').classList.add('show'); endTimer(()=>finishCredits(),dur*1000+900);
}
function finishCredits(){ clearEnd(); $('#cr-skip').classList.remove('show'); $('#credits').innerHTML=''; $('#endcap').classList.remove('show'); $('#ov-end').classList.add('credits','done'); const big=$('#endbig'); big.textContent=T(S.endKey==='lapdog'?'Glory to the Kingdom!':'Window 14'); big.classList.add('show'); sfx.stamp(); endTimer(()=>$('#endbtns').classList.add('show'),5200); }

/* ---------- main menu, music, language ---------- */
const MENU_LIST=['bella','rising'];
const MUS={bufs:{},src:null,gain:null,want:false,playing:false,vol:.55,list:MENU_LIST,key:'',idx:0,cur:''};
async function loadMusic(){
  const a=ac(); if(!a) return;
  const jobs=[['bella',A.music],['rising',A.music2]].filter(x=>x[1]).map(async([k,v])=>{ try{ MUS.bufs[k]=await a.decodeAudioData(b64buf(v)); }catch(e){} tryStartMusic(); });
  await Promise.all(jobs); tryStartMusic();
}
function playTrack(){
  const a=AC, L=MUS.list; if(!a||!MUS.gain) return;
  for(let n=0;n<L.length;n++){
    const key=L[(MUS.idx+n)%L.length], buf=MUS.bufs[key]; if(!buf) continue;
    MUS.idx=(MUS.idx+n)%L.length; MUS.cur=key;
    const src=a.createBufferSource(); src.buffer=buf; src.loop=(L.length===1); src.connect(MUS.gain);
    src.onended=()=>{ if(MUS.src!==src||!MUS.playing) return; MUS.idx=(MUS.idx+1)%L.length; playTrack(); };
    src.start(); MUS.src=src; return;
  }
}
function tryStartMusic(fade){
  const a=AC||ac(); if(!a||MUS.playing||!MUS.want||!MUS.bufs[MUS.list[MUS.idx%MUS.list.length]]) return;
  if(a.state!=='running'){ a.resume().then(()=>{ if(a.state==='running') tryStartMusic(fade); }).catch(()=>{}); return; }
  const g=a.createGain(); g.gain.setValueAtTime(0,a.currentTime); g.gain.linearRampToValueAtTime(muted?0:MUS.vol,a.currentTime+(fade||3)); g.connect(a.destination);
  MUS.gain=g; MUS.playing=true; playTrack(); const hn=$('#sndhint'); if(hn) hn.classList.remove('show');
}
function startMusic(vol,fade,list){
  list=list||MENU_LIST; const key=list.join(',');
  if(MUS.playing && MUS.key!==key) stopMusic(.8);
  if(MUS.key!==key){ MUS.list=list; MUS.key=key; MUS.idx=0; }
  MUS.want=true; if(vol) MUS.vol=vol; tryStartMusic(fade);
}
function stopMusic(fade=1.5){ MUS.want=false; if(!MUS.playing) return; const a=AC, g=MUS.gain, sr=MUS.src; MUS.playing=false; MUS.src=null; try{ g.gain.cancelScheduledValues(a.currentTime); g.gain.setTargetAtTime(0,a.currentTime,fade/3); }catch(e){} setTimeout(()=>{ try{ sr&&sr.stop(); }catch(e){} },fade*1000+400); }
const SLIDES=['menu1','menu2','menu3','menu4']; let slideI=0, slideT=null;
function showSlide(i){ const els=document.querySelectorAll('#slides .slide'); els.forEach((e,j)=>{ if(j===i){ e.classList.remove('on','zoom'); void e.offsetWidth; e.classList.add('on','zoom'); } else if(e.classList.contains('on')){ e.classList.remove('on'); setTimeout(()=>{ if(!e.classList.contains('on')) e.classList.remove('zoom'); },1900); } }); }
function startSlides(){ stopSlides(); const box=$('#slides'); if(!box.children.length) box.innerHTML=SLIDES.map(k=>`<div class="slide"><img src="${A[k]}" alt=""></div>`).join(''); slideI=0; showSlide(0); slideT=setInterval(()=>{ slideI=(slideI+1)%SLIDES.length; showSlide(slideI); },6000); }
function stopSlides(){ clearInterval(slideT); slideT=null; }
function openMainMenu(){ const m=$('#ov-menu'); m.classList.remove('leaving'); m.classList.add('on'); startSlides(); startMusic(.55,3,MENU_LIST); applyStatic(); setTimeout(()=>{ if(!MUS.playing && m.classList.contains('on')) $('#sndhint').classList.add('show'); },1500); }
function closeMainMenu(){ const m=$('#ov-menu'); m.classList.add('leaving'); stopMusic(1.6); setTimeout(()=>{ m.classList.remove('on','leaving'); stopSlides(); },950); }
function setLang(l){
  LANG=l; try{ localStorage.setItem('w14lang',l); }catch(e){}
  applyStatic(); setDirective(); buildBook();
  if($('#ov-intro').classList.contains('on')) showIntro(parseInt($('#b-start').dataset.day,10)||1);
}

/* ---------- layout ---------- */
function fit(){
  const vw=innerWidth, vh=innerHeight, CROP=.86;
  const hudH=$('#hud').offsetHeight;
  let w, dlgH;
  if(vw<640){ w=vw; dlgH=Math.max(240,vh-hudH-w*.75*CROP); }
  else { dlgH=Math.min(310,Math.max(262,vh*.32)); w=Math.max(420,Math.min(vw,(vh-hudH-dlgH)/(.75*CROP))); }
  const sc=$('#scene'); sc.style.width=w+'px'; sc.style.height=(w*.75*CROP)+'px';
  const dw=Math.min(vw,Math.max(w,560));
  $('#dlg').style.height=dlgH+'px'; $('#dlg').style.overflow='auto'; $('#dlg').style.maxWidth=dw+'px';
  $('#hud').style.maxWidth=dw+'px';
  document.documentElement.style.setProperty('--u',(w/100)+'px');
}
addEventListener('resize',fit);

/* ---------- boot ---------- */
setImg('#bgimg','bg'); setImg('#bookimg','redbook'); setImg('#dirimg','documents');
S.day=1; setDirective(); buildBook(); hud(); fit(); showIntro(1);
$('#cust').addEventListener('click',engage);
$('#item').addEventListener('click',openInspect);
$('#book').addEventListener('click',()=>openOv('ov-book'));
$('#directive').addEventListener('click',()=>openOv('ov-dir'));
$('#b-snd').addEventListener('click',e=>{ muted=!muted; e.target.textContent=T('Sound: '+(muted?'off':'on')); if(AMB.master){ AMB.master.gain.cancelScheduledValues(0); AMB.master.gain.setTargetAtTime(muted?0:1,AC.currentTime,.3); } if(MUS.gain){ MUS.gain.gain.cancelScheduledValues(0); MUS.gain.gain.setTargetAtTime(muted?0:MUS.vol,AC.currentTime,.3); } if(!muted) sfx.click(); });
$('#insp-done').addEventListener('click',()=>{ sfx.click(); closeInspect(); });
$('#end-over').addEventListener('click',()=>{ sfx.click(); startOver(); });
$('#end-replay').addEventListener('click',()=>{ sfx.click(); clearEnd(); $('#endbig').classList.remove('show'); const ov=$('#ov-end'); ov.classList.remove('on','credits','done'); $('#endimg').classList.remove('show'); $('#endbtns').classList.remove('show'); $('#credits').innerHTML=''; stopMusic(1.2); ambTo(1,1.5); restoreSnap(); beginShift(5); });
$('#cr-skip').addEventListener('click',()=>{ sfx.click(); finishCredits(); });
$('#m-play').addEventListener('click',()=>{ ac(); sfx.click(); closeMainMenu(); openPrologue(); });
$('#protext').addEventListener('click',()=>{ if(!proDone) finishProlog(); });
$('#protext2').addEventListener('click',()=>{ if(!proDone) finishProlog(); });
$('#pro-go').addEventListener('click',()=>{ sfx.click(); closePrologue(); });
document.addEventListener('keydown',e=>{ if(!$('#ov-prologue').classList.contains('on')) return; if(e.key==='Enter'||e.key===' '){ e.preventDefault(); if(!proDone) finishProlog(); else closePrologue(); } });
$('#m-lang').addEventListener('click',()=>{ sfx.click(); setLang(LANG==='en'?'vi':'en'); });
['pointerdown','pointerup','mousedown','mouseup','click','keydown','keyup','touchstart','touchend'].forEach(ev=>addEventListener(ev,()=>{ if(!AC) ac(); if(AC&&AC.state==='suspended') AC.resume().catch(()=>{}); tryStartMusic(); },{passive:true,capture:true}));
document.addEventListener('visibilitychange',()=>{ if(!document.hidden) tryStartMusic(); });
$('#scan-done').addEventListener('click',()=>{ sfx.click(); closeScanner(); });
$('#pb-prev').addEventListener('click',()=>flipBook(-1));
$('#pb-next').addEventListener('click',()=>flipBook(1));
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>{ if(/ov-(book|dir)/.test(b.closest('.ov').id)) sfx.paper(); b.closest('.ov').classList.remove('on'); if(S.phase==='menu') showMenu(); }));
document.querySelectorAll('.ov').forEach(o=>o.addEventListener('mousedown',e=>{ if(e.target===o && !['ov-intro','ov-report','ov-news','ov-scan','ov-final','ov-doc','ov-end','ov-notice'].includes(o.id)){ o.classList.remove('on'); if(o.id==='ov-insp'&&S.phase==='menu') showMenu(); } }));
$('#b-start').addEventListener('click',()=>{ const n=parseInt($('#b-start').dataset.day,10)||1; ac(); startAmbience(); loadCustom(); sfx.openwindow(); $('#ov-intro').classList.remove('on'); beginShift(n); });
const PRESETS={
 lapdog:{compliance:22,mercy:-4,gaveCharity:false,tot:{served:48,deals:21,spent:640,bounty:210,fines:40,arrestsOk:6,killsOk:3,fraud:1,wrongful:1},totalProfit:540,dayStats:{1:{profit:100,customers:5},2:{profit:73,customers:12},3:{profit:120,customers:12},4:{profit:130,customers:12}}},
 brave:{compliance:1,mercy:18,gaveCharity:true,tot:{served:48,deals:15,spent:520,charity:50,funded:120,letGoG:5,spyKilled:1,bounty:25,fines:20},totalProfit:-30,dayStats:{1:{profit:-50,customers:5},2:{profit:10,customers:12},3:{profit:30,customers:12},4:{profit:-20,customers:12}}},
 failure:{compliance:0,mercy:0,gaveCharity:false,tot:{served:48,deals:12,spent:700,fraud:2,smuggled:3,wrongful:1,wrongKill:1},totalProfit:-120,dayStats:{1:{profit:-20,customers:5},2:{profit:-40,customers:12},3:{profit:-30,customers:12},4:{profit:-30,customers:12}}}
};
document.querySelectorAll('[data-end]').forEach(b=>b.addEventListener('click',()=>{
  const k=b.dataset.end, P=PRESETS[k]; ac(); startAmbience(); loadCustom(); sfx.click(); $('#ov-intro').classList.remove('on');
  fresh(); S.day=5; S.cust=DAY5; S.max=10; S.idx=9; S.profit=0; S.till=400; S.compliance=P.compliance; S.mercy=P.mercy; S.gaveCharity=P.gaveCharity; S.tot=JSON.parse(JSON.stringify(P.tot)); S.totalProfit=P.totalProfit; S.dayStats=JSON.parse(JSON.stringify(P.dayStats));
  S.snap=JSON.stringify({till:400,compliance:P.compliance,mercy:P.mercy,tot:P.tot,gaveCharity:P.gaveCharity,sickRefused:false,totalProfit:P.totalProfit,sosDead:false});
  buildBook(); setDirective(); hud(); finalScene();
}));
$('#b-news').addEventListener('click',()=>{ sfx.paper(); $('#ov-news').classList.remove('on'); showIntro(S.newsDay||2); setTimeout(()=>ambTo(1,1.8),600); });
$('#ov-insp').addEventListener('click',e=>{ if(e.target.id==='ov-insp') closeInspect(); });
const HASHMODE=/day[2-5]/.test(location.hash);
try{ const sl=localStorage.getItem('w14lang'); if(sl==='vi'||sl==='en') LANG=sl; }catch(e){}
if(/vi/.test(location.hash.replace(/day/g,''))) LANG='vi';
applyStatic(); setDirective(); buildBook(); loadMusic(); loadCustom();
if(HASHMODE){ $('#ov-menu').classList.remove('on'); } else { openMainMenu(); }
if(/day2/.test(location.hash)){ S.gaveCharity=/day2a/.test(location.hash); showIntro(2); }
if(/day5/.test(location.hash)){ if(/day5f/.test(location.hash)) S.tot.funded=100; S.day=5; buildBook(); showIntro(5); S.day=1; }
if(/day4/.test(location.hash)){ if(/day4f/.test(location.hash)) S.tot.funded=100; S.day=4; buildBook(); showIntro(4); S.day=1; }
if(/day3/.test(location.hash)){ S.gaveCharity=/day3a|day3f/.test(location.hash); if(/day3f/.test(location.hash)) S.tot.funded=100; S.day=3; buildBook(); showIntro(3); S.day=1; }
})();
