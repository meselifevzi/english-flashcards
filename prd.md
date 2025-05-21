##Web üzerinde çalışan ingilizce kard uygulaması yapmak istiyorum. Sana aşağıda vereceğim maddeleri bir prd.md klasörü oluşturup içindeki maddeleri sırasıyla yapmanı ve ilgili bileşenlerin tamamını yüklemeni istiyorum. Tamamlamış olduğun maddeleri ise prd.md dosyasında tamamlananlar kısmına yazmanı istiyorum.##

# İngilizce Kelime Kart Uygulaması PRD

## Teknoloji Gereksinimleri
- React
- Tailwind CSS
- Supabase
- Javascript

## İhtiyaçlar

### Yapılacaklar
- [ ] Sesli telaffuz bölümü
- [ ] Random 10 Kelime (Her seviyeden karışık olacak şekilde 10 kelime oluştursun. 10 kelime bittiğinde ekranda web mesaj olarak yeşil renkte "Tebrikler" yazsın.)
- [ ] Kullanıcı kimlik doğrulamasını uygula
- [ ] Yüklenme durumları ve hata yönetimini ekle


### Database Schema (Supabase)
```sql
CREATE TABLE word_cards (
  id SERIAL PRIMARY KEY,
  word VARCHAR NOT NULL,
  level VARCHAR(2) NOT NULL,
  pronunciation VARCHAR,
  meaning TEXT NOT NULL,
  example_sentence TEXT,
  card_number INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Tamamlananlar
- [x] Karanlık mod desteği
  - [x] Karanlık/Aydınlık mod geçiş butonu
  - [x] Renk paleti güncellendi
  - [x] Tüm bileşenler için karanlık mod stilleri
  - [x] Geçiş animasyonları
- [x] React projesi kur
- [x] Tailwind CSS yapılandırmasını yap
- [x] Supabase projesi ve veritabanını oluştur
- [x] Kelime kartları için veritabanı şeması oluştur
- [x] Kart bileşeni oluştur
  - [x] Ana kelime gösterimi (ortalanmış, belirgin)
  - [x] Sağ üstte kelime seviye göstergesi (A1, A2, B1)
  - [x] Telaffuz rehberi
  - [x] Türkçe anlamı
  - [x] Örnek cümle
  - [x] Altta kart numarası
- [x] Kartlar arasında gezinme (ileri/geri) işlevini uygula
- [x] Supabase veritabanı entegrasyonu
- [x] Rastgele kart gösterimi
  - [x] Seçili seviyedeki kartlar rastgele karıştırılıyor
  - [x] Seviye değiştiğinde kartlar yeniden karıştırılıyor
- [x] Duyarlı (responsive) tasarım uygulandı
  - [x] Mobil cihazlar için optimize edilmiş görünüm
  - [x] Tablet ve masaüstü için uyarlanmış boyutlar
  - [x] Dinamik padding ve margin değerleri
  - [x] Responsive yazı boyutları
  - [x] Responsive kart boyutları
- [x] Navigation butonları güncellendi
  - [x] Gradient arka plan renkleri eklendi
  - [x] Dark mode desteği
  - [x] Hover ve active durumları iyileştirildi
  - [x] Geçiş animasyonları eklendi

### UI Bileşen Yapısı
1. **Kart Bileşeni**
   - Ana kelime gösterimi
   - Seviye rozeti
   - Anlam bölümü
   - Örnek cümle bölümü
   - Kart numarası altlığı

2. **Kart Konteyneri**
   - Gezinme kontrolleri
   - Kart görüntüleme alanı
   - Seviye filtresi

3. **Renk Paleti**
   - Arka Plan: #f5f5f5
   - Kart Arka Planı: #ffffff
   - Birincil Metin: #1f2937
   - İkincil Metin: #4b5563
   - Vurgu (Accent): #3b82f6

## Supabase.Policy

### Row Level Security (RLS) Updates
```sql
-- Önce mevcut policy'i sil
DROP POLICY IF EXISTS select_word_cards ON public.word_cards;

-- Yeni SELECT policy oluştur
CREATE POLICY select_word_cards 
ON public.word_cards 
FOR SELECT 
TO public 
USING (true);
```