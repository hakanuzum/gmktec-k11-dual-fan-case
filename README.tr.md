# GMKtec K11 Çift Fanlı Kasa

[English](README.md) · **Türkçe**

GMKtec K11 mini bilgisayarı, iki adet 120 mm fanlı, kapalı ve küçük bir kuleye dönüştüren 3D baskı kasa. Fanlar K11'in kendi USB portlarından beslenir: lehim yok, ek adaptör yok. Ön ve arka portların hepsi açık kalır.

| | |
|---|---|
| **Canlı 3D görüntüleyici** | **[hakanuzum.github.io/gmktec-k11-dual-fan-case](https://hakanuzum.github.io/gmktec-k11-dual-fan-case/viewer/)**: döndür, parçalara ayır, kesit al, hava akışını gör; **Show how it fits together** düğmesi her parçayı ayrı renge boyar ve kasayı şeffaf yapar, somun ve vidaların nereye girdiği görünür |
| **Bu sayfada 3D** | [Aşağıda](#3d-önizleme): GitHub sayfanın içinde gösterir, fareyle döndürebilirsin |
| **Tek parça 3D** | [`stl/`](stl/) klasöründeki herhangi bir dosyaya tıkla; GitHub 3D olarak açar |
| **Baskı dosyaları** | [`stl/`](stl/): 4 parça |
| **Düzenlenebilir kaynak** | [`cad/k11_dual_fan_case.scad`](cad/k11_dual_fan_case.scad) (OpenSCAD, kaydırıcılı ayar paneliyle) |

![Siyah kasa, Noctua fanlarla](docs/images/hero.png)

> **Durum:** Tasarım yazılım üzerinde kontrol edildi (bkz. [Doğrulama](#doğrulama)). Henüz basılıp gerçek bir K11'e takılmadı. Önce tek bir fan yuvası basıp cihaza takarak dene, sonra diğer parçaları bas. Fotoğraf ve geri bildirimlerini issue olarak paylaşabilirsin.

## 3D önizleme

Kapalı kasanın tek renkli, sadeleştirilmiş önizlemesi (içinde temsili bir K11 var). Renkler, parçalara ayırma ve hava akışı için [canlı görüntüleyiciyi](https://hakanuzum.github.io/gmktec-k11-dual-fan-case/viewer/) kullan.

<!-- model:start -->
```stl
solid K11_DUAL_FAN_CASE_PREVIEW
facet normal 0.7 -0.3 -0.7
outer loop
vertex 50 -65.5 17
vertex 48 -61.5 13
vertex 50 -61.5 15
endloop
endfacet
facet normal 0.7 -0.3 -0.7
outer loop
vertex 50 -65.5 17
vertex 48 -67 15.5
vertex 48 -61.5 13
endloop
endfacet
facet normal 0.7 -0.7 -0.3
outer loop
vertex 50 -65.5 17
vertex 50 -67.5 21
vertex 48 -69.5 21
endloop
endfacet
facet normal 0.7 -0.7 -0.3
outer loop
vertex 50 -65.5 17
vertex 48 -69.5 21
vertex 48 -67 15.5
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex 50 -65.5 17
vertex 50 -61.5 15
vertex 50 -67.5 21
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 -61.5 15
vertex 50 -55 30
vertex 50 -55 33
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -61.5 15
vertex 50 -52.5 29
vertex 50 -55 30
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -61.5 15
vertex 50 -18 29
vertex 50 -52.5 29
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -61.5 15
vertex 50 -55 33
vertex 50 -55 66
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 -52.5 34
vertex 50 -55 66
vertex 50 -55 33
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -52.5 29
vertex 50 -34 37
vertex 50 -50 30
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex 50 -52.5 34
vertex 50 -50 33
vertex 50 -47 50
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -50 30
vertex 50 -41 44
vertex 50 -50 33
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -50 30
vertex 50 -40 43
vertex 50 -41 44
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex 50 -52.5 29
vertex 50 -18 29
vertex 50 -34 37
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -50 30
vertex 50 -34 37
vertex 50 -40 43
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -50 33
vertex 50 -41 44
vertex 50 -47 50
endloop
endfacet
facet normal -0 -0.4 -0.9
outer loop
vertex 48 -67 15.5
vertex 22 -67 15.5
vertex 48 -61.5 13
endloop
endfacet
facet normal -0 -0.9 -0.4
outer loop
vertex 48 -67 15.5
vertex 48 -69.5 21
vertex 22 -69.5 21
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex 50 -61.5 15
vertex 48 -61.5 13
vertex 48 61.5 13
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -61.5 15
vertex 50 -1 26
vertex 50 -18 29
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -61.5 15
vertex 50 1 26
vertex 50 -1 26
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -61.5 15
vertex 50 -55 66
vertex 50 -58 83
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 -61.5 15
vertex 50 -67.5 147
vertex 50 -67.5 21
endloop
endfacet
facet normal 0.7 -0.7 0
outer loop
vertex 50 -67.5 21
vertex 48 -69.5 147
vertex 48 -69.5 21
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 -61.5 15
vertex 50 -58 83
vertex 50 -58 85
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -52.5 34
vertex 50 -47 50
vertex 50 -55 66
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -61.5 15
vertex 50 -58 85
vertex 50 -67.5 147
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -58 83
vertex 50 -23 83
vertex 50 -58 85
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -40 43
vertex 50 -15 67.5
vertex 50 -41 44
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -41 44
vertex 50 -15 67.5
vertex 50 -16.5 69
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -1 26
vertex 50 1 61
vertex 50 -1 61
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 -15 67.5
vertex 50 -11.5 64
vertex 50 -1 61
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex 50 -15 67.5
vertex 50 -1 61
vertex 50 -16.5 69
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex 50 -23 83
vertex 50 -20 72.5
vertex 50 -23 85
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 -1 61
vertex 50 -20 72.5
vertex 50 -16.5 69
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 -1 61
vertex 50 -23 85
vertex 50 -20 72.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 1 61
vertex 50 -23 85
vertex 50 -1 61
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 1 61
vertex 50 11.5 64
vertex 50 -23 85
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 16.5 69
vertex 50 -20 95.5
vertex 50 -23 85
endloop
endfacet
facet normal 0 -0.9 -0.4
outer loop
vertex 48 -67 15.5
vertex 22 -69.5 21
vertex 22 -67 15.5
endloop
endfacet
facet normal 0 -0.4 -0.9
outer loop
vertex 48 -61.5 13
vertex 22 -67 15.5
vertex 22 -61.5 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 48 -61.5 13
vertex 22 -61.5 13
vertex 22 -51.5 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 48 -61.5 13
vertex 22 -51.5 13
vertex 22 -44 13
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex 48 -69.5 21
vertex 22 -69.5 40
vertex 22 -69.5 21
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 48 -61.5 13
vertex 22 -44 13
vertex 22 -42.5 13
endloop
endfacet
facet normal 0 -0.4 -0.9
outer loop
vertex 22 -67 15.5
vertex 22 -61.5 13
vertex 22 -61.5 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 -61.5 13
vertex 22 -61.5 13
vertex 22 -51.5 13
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 -60.5 21
vertex 22 -52.5 22
vertex 22 -52.5 21
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -65 22.5
vertex 22 -66.5 27
vertex 22 -66.5 40
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -60.5 21
vertex 22 -60.5 23.5
vertex 22 -52.5 22
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -52.5 22
vertex 22 -60.5 23.5
vertex 22 -52 22.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -52 22.5
vertex 22 -60.5 23.5
vertex 22 -51.5 23
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 48 -61.5 13
vertex 22 -42.5 13
vertex 22 42.5 13
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -42.5 13
vertex 22 -42 13.5
vertex 22 42 13.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -42 13.5
vertex 22 -41.5 14
vertex 22 41.5 14
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -41.5 14
vertex 22 -41.5 22
vertex 22 41.5 22
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -51.5 23
vertex 22 -60.5 23.5
vertex 22 60.5 23.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -41.5 22
vertex 22 -42 22.5
vertex 22 42 22.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -42 22.5
vertex 22 -42.5 23
vertex 22 42.5 23
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 -51.5 23
vertex 22 60.5 23.5
vertex 22 -42.5 23
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex 48 -69.5 21
vertex 22 -69.5 128
vertex 22 -69.5 40
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -60.5 21
vertex 22 -65 22.5
vertex 22 -66.5 128
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -60.5 21
vertex 22 -66.5 128
vertex 22 -60.5 23.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -65 22.5
vertex 22 -66.5 40
vertex 22 -66.5 128
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -69.5 40
vertex 22 -69.5 128
vertex 22 -66.5 40
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -61.5 15
vertex 50 67.5 21
vertex 50 1 26
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 48 -61.5 13
vertex 47.5 42.5 13
vertex 47.5 51.5 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 48 -61.5 13
vertex 47.5 51.5 13
vertex 48 61.5 13
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex 50 -61.5 15
vertex 48 61.5 13
vertex 50 61.5 15
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 -61.5 15
vertex 50 61.5 15
vertex 50 67.5 21
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 67.5 21
vertex 50 18 29
vertex 50 1 26
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 -1 26
vertex 50 1 26
vertex 50 1 61
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 48 -61.5 13
vertex 22 42.5 13
vertex 47.5 42.5 13
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 67.5 21
vertex 50 52.5 29
vertex 50 18 29
endloop
endfacet
facet normal 0.7 0.3 -0.7
outer loop
vertex 50 61.5 15
vertex 48 61.5 13
vertex 50 65.5 17
endloop
endfacet
facet normal 0.7 0.3 -0.7
outer loop
vertex 48 61.5 13
vertex 48 67 15.5
vertex 50 65.5 17
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 61.5 15
vertex 50 65.5 17
vertex 50 67.5 21
endloop
endfacet
facet normal 0.7 0.7 -0.3
outer loop
vertex 50 65.5 17
vertex 48 69.5 21
vertex 50 67.5 21
endloop
endfacet
facet normal 0.7 0.7 -0.3
outer loop
vertex 50 65.5 17
vertex 48 67 15.5
vertex 48 69.5 21
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 67.5 21
vertex 50 55 30
vertex 50 52.5 29
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 67.5 21
vertex 50 55 33
vertex 50 55 30
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 18 29
vertex 50 52.5 29
vertex 50 34 37
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 40 43
vertex 50 34 37
vertex 50 50 30
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex 50 34 37
vertex 50 52.5 29
vertex 50 50 30
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 50 30
vertex 50 50 33
vertex 50 41 44
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex 50 40 43
vertex 50 50 30
vertex 50 41 44
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex 50 47 50
vertex 50 50 33
vertex 50 52.5 34
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 47 50
vertex 50 52.5 34
vertex 50 55 33
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 47 50
vertex 50 41 44
vertex 50 50 33
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 67.5 21
vertex 50 47 50
vertex 50 55 33
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 67.5 21
vertex 50 55 66
vertex 50 47 50
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 48 69.5 21
vertex 40 69.5 36.5
vertex 41.5 69.5 39
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 48 69.5 21
vertex 37.5 69.5 35
vertex 40 69.5 36.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 47.5 51.5 13
vertex 22 61.5 13
vertex 48 61.5 13
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex 48 61.5 13
vertex 22 61.5 13
vertex 48 67 15.5
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex 48 67 15.5
vertex 22 69.5 21
vertex 48 69.5 21
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 48 69.5 21
vertex 32 69.5 35
vertex 37.5 69.5 35
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 48 69.5 21
vertex 22 69.5 21
vertex 32 69.5 35
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 41 44
vertex 50 16.5 69
vertex 50 40 43
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex 50 15 67.5
vertex 50 40 43
vertex 50 16.5 69
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 11.5 64
vertex 50 15 67.5
vertex 50 -23 85
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 16.5 69
vertex 50 -23 85
vertex 50 15 67.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 16.5 69
vertex 50 20 72.5
vertex 50 15 100.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 23 83
vertex 50 58 83
vertex 50 23 85
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 67.5 21
vertex 50 58 83
vertex 50 55 66
endloop
endfacet
facet normal 0.7 0.7 -0
outer loop
vertex 50 67.5 21
vertex 48 69.5 21
vertex 48 69.5 147
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 48 69.5 21
vertex 41.5 69.5 39
vertex 48 69.5 147
endloop
endfacet
facet normal 0 1 0
outer loop
vertex 48 69.5 147
vertex 41.5 69.5 39
vertex 40 69.5 41.5
endloop
endfacet
facet normal 0 1 0
outer loop
vertex 48 69.5 147
vertex 40 69.5 41.5
vertex 37.5 69.5 43
endloop
endfacet
facet normal 0 1 0
outer loop
vertex 48 69.5 147
vertex 37.5 69.5 43
vertex 32 69.5 43
endloop
endfacet
facet normal 0 1 0
outer loop
vertex 48 69.5 147
vertex 32 69.5 43
vertex 29.5 69.5 41.5
endloop
endfacet
facet normal 0 1 0
outer loop
vertex 48 69.5 147
vertex 29.5 69.5 41.5
vertex 28.5 69.5 39
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -42.5 13
vertex 22 42 13.5
vertex 22 42.5 13
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -42 13.5
vertex 22 41.5 14
vertex 22 42 13.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -41.5 14
vertex 22 41.5 22
vertex 22 41.5 14
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 -41.5 22
vertex 22 42 22.5
vertex 22 41.5 22
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 -42 22.5
vertex 22 42.5 23
vertex 22 42 22.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 -42.5 23
vertex 22 60.5 23.5
vertex 22 42.5 23
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 47.5 51.5 13
vertex 22 51.5 13
vertex 22 61.5 13
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex 48 67 15.5
vertex 22 61.5 13
vertex 22 67 15.5
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex 48 67 15.5
vertex 22 67 15.5
vertex 22 69.5 21
endloop
endfacet
facet normal -0 1 0
outer loop
vertex 22 69.5 21
vertex 29.5 69.5 36.5
vertex 32 69.5 35
endloop
endfacet
facet normal -0 1 0
outer loop
vertex 22 69.5 21
vertex 28.5 69.5 39
vertex 29.5 69.5 36.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 44 13
vertex 22 44 13
vertex 22 51.5 13
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 42.5 23
vertex 22 60.5 23.5
vertex 22 51.5 23
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 44 13
vertex 22 61.5 13
vertex 22 51.5 13
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 52.5 21
vertex 22 52.5 22
vertex 22 60.5 21
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 60.5 21
vertex 22 52.5 22
vertex 22 52 22.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 51.5 23
vertex 22 60.5 23.5
vertex 22 52 22.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 60.5 21
vertex 22 52 22.5
vertex 22 60.5 23.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 60.5 21
vertex 22 60.5 23.5
vertex 22 65 22.5
endloop
endfacet
facet normal -0 1 0
outer loop
vertex 22 69.5 21
vertex 48 69.5 147
vertex 28.5 69.5 39
endloop
endfacet
facet normal 0 1 0
outer loop
vertex 22 69.5 21
vertex 22 69.5 40
vertex 48 69.5 147
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 65 22.5
vertex 22 60.5 23.5
vertex 22 60.5 144.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 65 22.5
vertex 22 60.5 144.5
vertex 22 66.5 27
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 66.5 27
vertex 22 60.5 144.5
vertex 22 66.5 40
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 66.5 40
vertex 22 66.5 128
vertex 22 69.5 40
endloop
endfacet
facet normal 0.7 -0.7 0
outer loop
vertex 50 -67.5 21
vertex 50 -67.5 147
vertex 48 -69.5 147
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex 50 -67.5 147
vertex 50 -58 85
vertex 50 -55 102
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 48 -69.5 21
vertex 48 -69.5 147
vertex 22 -69.5 147
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -23 83
vertex 50 -23 85
vertex 50 -58 85
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 16.5 69
vertex 50 -16.5 99
vertex 50 -20 95.5
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex 50 -16.5 99
vertex 50 16.5 69
vertex 50 -15 100.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 16.5 69
vertex 50 -11.5 104
vertex 50 -15 100.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 -15 100.5
vertex 50 -40 125
vertex 50 -16.5 99
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 -16.5 99
vertex 50 -40 125
vertex 50 -41 124
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex 50 -67.5 147
vertex 50 -55 102
vertex 50 -47 118
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex 50 -67.5 147
vertex 50 -47 118
vertex 50 -55 135
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -47 118
vertex 50 -41 124
vertex 50 -50 135
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 -40 125
vertex 50 -50 135
vertex 50 -41 124
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 -47 118
vertex 50 -52.5 134
vertex 50 -55 135
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 -47 118
vertex 50 -50 135
vertex 50 -52.5 134
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 -34 131
vertex 50 -50 138
vertex 50 -50 135
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -40 125
vertex 50 -34 131
vertex 50 -50 135
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex 50 -67.5 147
vertex 50 -55 135
vertex 50 -55 138
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex 50 -67.5 147
vertex 50 -55 138
vertex 50 -52.5 139
endloop
endfacet
facet normal 0.7 -0.7 0.3
outer loop
vertex 50 -67.5 147
vertex 50 -65.5 151
vertex 48 -69.5 147
endloop
endfacet
facet normal 0.7 -0.7 0.3
outer loop
vertex 48 -69.5 147
vertex 50 -65.5 151
vertex 48 -67 152.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -67.5 147
vertex 50 -61.5 153
vertex 50 -65.5 151
endloop
endfacet
facet normal 0.7 -0.3 0.7
outer loop
vertex 50 -65.5 151
vertex 50 -61.5 153
vertex 48 -61.5 155
endloop
endfacet
facet normal 0.7 -0.3 0.7
outer loop
vertex 50 -65.5 151
vertex 48 -61.5 155
vertex 48 -67 152.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex 50 -67.5 147
vertex 50 -52.5 139
vertex 50 -18 139
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex 50 -52.5 139
vertex 50 -50 138
vertex 50 -18 139
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex 48 -69.5 147
vertex 48 -67 152.5
vertex 22 -69.5 147
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex 48 -67 152.5
vertex 48 -61.5 155
vertex 22 -67 152.5
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 48 -61.5 155
vertex 47.5 -51.5 155
vertex 22 -51.5 155
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -34 131
vertex 50 -18 139
vertex 50 -50 138
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -1 107
vertex 50 1 142
vertex 50 -1 142
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex 50 -67.5 147
vertex 50 -18 139
vertex 50 -1 142
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex 50 -67.5 147
vertex 50 -1 142
vertex 50 1 142
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 -67.5 147
vertex 50 65.5 151
vertex 50 -61.5 153
endloop
endfacet
facet normal 0.7 0 0.7
outer loop
vertex 50 -61.5 153
vertex 48 61.5 155
vertex 48 -61.5 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 48 -61.5 155
vertex 48 61.5 155
vertex 47.5 -51.5 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 47.5 -51.5 155
vertex 48 61.5 155
vertex 47.5 -42.5 155
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex 50 -67.5 147
vertex 50 1 142
vertex 50 65.5 151
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 47.5 -42.5 155
vertex 47.5 51.5 155
vertex 22 -44 155
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex 48 -69.5 21
vertex 22 -69.5 147
vertex 22 -69.5 128
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -66.5 40
vertex 22 -69.5 128
vertex 22 -66.5 128
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -66.5 128
vertex 22 -66.5 141
vertex 22 -60.5 23.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -66.5 141
vertex 22 -65 145.5
vertex 22 -60.5 23.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -65 145.5
vertex 22 -60.5 144.5
vertex 22 -60.5 23.5
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex 48 -67 152.5
vertex 22 -67 152.5
vertex 22 -69.5 147
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex 48 -61.5 155
vertex 22 -61.5 155
vertex 22 -67 152.5
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 48 -61.5 155
vertex 22 -51.5 155
vertex 22 -61.5 155
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -65 145.5
vertex 22 -60.5 147
vertex 22 -60.5 144.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 22 -52 145.5
vertex 22 -60.5 144.5
vertex 22 -60.5 147
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 -52 145.5
vertex 22 -51.5 145
vertex 22 -60.5 144.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -52 145.5
vertex 22 -60.5 147
vertex 22 -52.5 146
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex 22 -67 152.5
vertex 22 -61.5 155
vertex 22 -61.5 155
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -52.5 146
vertex 22 -60.5 147
vertex 22 -52.5 147
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 -51.5 145
vertex 22 -42.5 145
vertex 22 -60.5 144.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 22 -42.5 145
vertex 22 -42 144.5
vertex 22 -60.5 144.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 -42.5 145
vertex 22 -42 145.5
vertex 22 -42 144.5
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 22 -44 155
vertex 22 -42.5 155
vertex 22 -44 155
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 -42 145.5
vertex 22 42 145.5
vertex 22 -42 144.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -42 145.5
vertex 22 -41.5 146
vertex 22 41.5 146
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -41.5 146
vertex 22 -41.5 154
vertex 22 41.5 154
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 22 -44 155
vertex 22 42.5 155
vertex 22 -42.5 155
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 22 -42.5 155
vertex 22 42 154.5
vertex 22 -42 154.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -41.5 154
vertex 22 -42 154.5
vertex 22 41.5 154
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 16.5 69
vertex 50 15 100.5
vertex 50 11.5 104
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 16.5 69
vertex 50 -1 107
vertex 50 -11.5 104
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 16.5 69
vertex 50 1 107
vertex 50 -1 107
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 16.5 69
vertex 50 11.5 104
vertex 50 1 107
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 20 72.5
vertex 50 23 83
vertex 50 15 100.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 23 83
vertex 50 23 85
vertex 50 15 100.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 16.5 99
vertex 50 15 100.5
vertex 50 23 85
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 20 95.5
vertex 50 16.5 99
vertex 50 23 85
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 1 107
vertex 50 1 142
vertex 50 -1 107
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 16.5 99
vertex 50 41 124
vertex 50 15 100.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 15 100.5
vertex 50 41 124
vertex 50 40 125
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 58 83
vertex 50 58 85
vertex 50 23 85
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 67.5 21
vertex 50 65.5 151
vertex 50 58 83
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 55 102
vertex 50 52.5 134
vertex 50 47 118
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 65.5 151
vertex 50 58 85
vertex 50 58 83
endloop
endfacet
facet normal 0.7 0.7 0
outer loop
vertex 50 67.5 21
vertex 48 69.5 147
vertex 50 67.5 147
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 67.5 21
vertex 50 67.5 147
vertex 50 65.5 151
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 65.5 151
vertex 50 55 102
vertex 50 58 85
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex 50 18 139
vertex 50 34 131
vertex 50 50 138
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 65.5 151
vertex 50 1 142
vertex 50 18 139
endloop
endfacet
facet normal 0.7 -0 0.7
outer loop
vertex 50 -61.5 153
vertex 50 61.5 153
vertex 48 61.5 155
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex 50 -61.5 153
vertex 50 65.5 151
vertex 50 61.5 153
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 47.5 -42.5 155
vertex 48 61.5 155
vertex 47.5 51.5 155
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex 50 41 124
vertex 50 47 118
vertex 50 50 135
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex 50 34 131
vertex 50 40 125
vertex 50 50 138
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 41 124
vertex 50 50 138
vertex 50 40 125
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 41 124
vertex 50 50 135
vertex 50 50 138
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 50 47 118
vertex 50 52.5 134
vertex 50 50 135
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 55 102
vertex 50 55 135
vertex 50 52.5 134
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 65.5 151
vertex 50 55 135
vertex 50 55 102
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex 50 18 139
vertex 50 50 138
vertex 50 52.5 139
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 65.5 151
vertex 50 18 139
vertex 50 52.5 139
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 65.5 151
vertex 50 55 138
vertex 50 55 135
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 50 65.5 151
vertex 50 52.5 139
vertex 50 55 138
endloop
endfacet
facet normal 0.7 0.7 0.3
outer loop
vertex 50 67.5 147
vertex 48 69.5 147
vertex 50 65.5 151
endloop
endfacet
facet normal 0.7 0.7 0.3
outer loop
vertex 48 69.5 147
vertex 48 67 152.5
vertex 50 65.5 151
endloop
endfacet
facet normal 0.7 0.3 0.7
outer loop
vertex 50 61.5 153
vertex 50 65.5 151
vertex 48 61.5 155
endloop
endfacet
facet normal 0.7 0.3 0.7
outer loop
vertex 48 61.5 155
vertex 50 65.5 151
vertex 48 67 152.5
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 47.5 51.5 155
vertex 48 61.5 155
vertex 22 51.5 155
endloop
endfacet
facet normal -0 0.9 0.4
outer loop
vertex 48 69.5 147
vertex 22 67 152.5
vertex 48 67 152.5
endloop
endfacet
facet normal 0 0.4 0.9
outer loop
vertex 48 61.5 155
vertex 48 67 152.5
vertex 22 67 152.5
endloop
endfacet
facet normal 0 1 0
outer loop
vertex 22 69.5 40
vertex 22 69.5 128
vertex 48 69.5 147
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 69.5 40
vertex 22 66.5 128
vertex 22 69.5 128
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 66.5 40
vertex 22 60.5 144.5
vertex 22 66.5 128
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 22 -44 155
vertex 47.5 51.5 155
vertex 22 42.5 155
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 22 42.5 145
vertex 22 -42 144.5
vertex 22 42 145.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -42 145.5
vertex 22 41.5 146
vertex 22 42 145.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 42.5 145
vertex 22 51.5 145
vertex 22 -42 144.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -41.5 146
vertex 22 41.5 154
vertex 22 41.5 146
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 -42 154.5
vertex 22 42 154.5
vertex 22 41.5 154
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 -42.5 155
vertex 22 42.5 155
vertex 22 42 154.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 22 51.5 145
vertex 22 60.5 144.5
vertex 22 -42 144.5
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 48 69.5 147
vertex 22 69.5 128
vertex 22 69.5 147
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 48 61.5 155
vertex 22 61.5 155
vertex 22 51.5 155
endloop
endfacet
facet normal 0 0.9 0.4
outer loop
vertex 48 69.5 147
vertex 22 69.5 147
vertex 22 67 152.5
endloop
endfacet
facet normal 0 0.4 0.9
outer loop
vertex 48 61.5 155
vertex 22 67 152.5
vertex 22 61.5 155
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 51.5 145
vertex 22 52 145.5
vertex 22 60.5 144.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 52 145.5
vertex 22 52.5 146
vertex 22 60.5 147
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 52 145.5
vertex 22 60.5 147
vertex 22 60.5 144.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 66.5 128
vertex 22 60.5 147
vertex 22 66.5 141
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 66.5 128
vertex 22 60.5 144.5
vertex 22 60.5 147
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 66.5 141
vertex 22 60.5 147
vertex 22 65 145.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 52.5 146
vertex 22 52.5 147
vertex 22 60.5 147
endloop
endfacet
facet normal 0 0.4 0.9
outer loop
vertex 22 61.5 155
vertex 22 67 152.5
vertex 22 61.5 155
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -65.5 17
vertex 47.5 -52.5 22
vertex 47.5 -61.5 15.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -65.5 17
vertex 47.5 -52.5 24
vertex 47.5 -52.5 22
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -61.5 15.5
vertex 47.5 -52.5 22
vertex 47.5 -52.5 15.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -65.5 17
vertex 47.5 -55 30
vertex 47.5 -52.5 24
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -52.5 22
vertex 47.5 -52.5 24
vertex 47.5 -52 22.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -65.5 17
vertex 47.5 -55 33
vertex 47.5 -55 30
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -65.5 17
vertex 47.5 -53.5 35.5
vertex 47.5 -55 33
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 -53 29
vertex 47.5 -52.5 24
vertex 47.5 -55 30
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -52.5 29
vertex 47.5 -52.5 29
vertex 47.5 -52.5 29
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -52.5 29
vertex 47.5 -52.5 29
vertex 47.5 -52 29
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -52.5 29
vertex 47.5 -52 29
vertex 47.5 -52 29
endloop
endfacet
facet normal 0 0.4 0.9
outer loop
vertex 47.5 -65.5 17
vertex 47.5 -61.5 15.5
vertex 31.5 -61.5 15.5
endloop
endfacet
facet normal -0 0.9 0.4
outer loop
vertex 47.5 -65.5 17
vertex 31.5 -67 21
vertex 47.5 -67 21
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 47.5 -61.5 15.5
vertex 47.5 -52.5 15.5
vertex 31.5 -61.5 15.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -52 22.5
vertex 47.5 -52.5 24
vertex 47.5 -51.5 23
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -51.5 23
vertex 47.5 -52.5 24
vertex 47.5 -42 24.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -51.5 23
vertex 47.5 -42 24.5
vertex 47.5 -42.5 23
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -50 30
vertex 47.5 -52 29
vertex 47.5 -52.5 29
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -52 29
vertex 47.5 -50 30
vertex 47.5 -44 33
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -42 22.5
vertex 47.5 -42.5 23
vertex 47.5 -42 24.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -53.5 35.5
vertex 47.5 -52.5 34
vertex 47.5 -55 33
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -53 36
vertex 47.5 -52.5 34
vertex 47.5 -52.5 34
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -53 36
vertex 47.5 -52.5 34.5
vertex 47.5 -52.5 34
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -53.5 35.5
vertex 47.5 -53 36
vertex 47.5 -52.5 34
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -65.5 17
vertex 47.5 -56 70.5
vertex 47.5 -53.5 35.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -50 30
vertex 47.5 -50 33
vertex 47.5 -44 33
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -52.5 34
vertex 47.5 -44 33
vertex 47.5 -50 33
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -52.5 34
vertex 47.5 -52.5 34
vertex 47.5 -44 33
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -52.5 34
vertex 47.5 -45 39.5
vertex 47.5 -44 33
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -42 24.5
vertex 47.5 -45.5 48.5
vertex 47.5 -34 37
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 -46.5 49.5
vertex 47.5 -52.5 34.5
vertex 47.5 -52.5 37.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 -46.5 49.5
vertex 47.5 -52.5 37.5
vertex 47.5 -47 50
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -34 37
vertex 47.5 -45.5 48.5
vertex 47.5 -40 43
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -45.5 48.5
vertex 47.5 -41 44
vertex 47.5 -40 43
endloop
endfacet
facet normal 0 0.4 0.9
outer loop
vertex 47.5 -65.5 17
vertex 31.5 -61.5 15.5
vertex 31.5 -65.5 17
endloop
endfacet
facet normal 0 0.9 0.4
outer loop
vertex 47.5 -65.5 17
vertex 31.5 -65.5 17
vertex 31.5 -67 21
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 47.5 -52.5 15.5
vertex 31.5 -52.5 15.5
vertex 31.5 -61.5 15.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -42 22.5
vertex 47.5 -42 24.5
vertex 47.5 -18 29
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -42 24.5
vertex 47.5 -34 37
vertex 47.5 -18 29
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -42 22.5
vertex 47.5 -18 29
vertex 47.5 -1 26
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -41.5 15.5
vertex 47.5 -41.5 22
vertex 47.5 41.5 22
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -41.5 22
vertex 47.5 -42 22.5
vertex 47.5 42 22.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -42 22.5
vertex 47.5 -1 26
vertex 47.5 42 22.5
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 47.5 -41.5 15.5
vertex 47.5 41.5 15.5
vertex 31.5 -41.5 15.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -65.5 17
vertex 47.5 -58 83
vertex 47.5 -56 70.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -65.5 17
vertex 47.5 -67 21
vertex 47.5 -67 147
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 -55 65.5
vertex 47.5 -55 63.5
vertex 47.5 -55 66
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -55.5 68
vertex 47.5 -55 66
vertex 47.5 -55 63.5
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 47.5 -67 21
vertex 31.5 -67 21
vertex 47.5 -67 147
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -55 65.5
vertex 47.5 -47 50
vertex 47.5 -52.5 37.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -57 85
vertex 47.5 -56.5 83
vertex 47.5 -58 83
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -40 43
vertex 47.5 -41 44
vertex 47.5 -15 67.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -41 44
vertex 47.5 -16.5 69
vertex 47.5 -15 67.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -1 26
vertex 47.5 -1 61
vertex 47.5 1 61
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -15 67.5
vertex 47.5 8.5 64.5
vertex 47.5 -11.5 64
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 1 61
vertex 47.5 -1 61
vertex 47.5 -11.5 64
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 1 61
vertex 47.5 -11.5 64
vertex 47.5 8.5 64.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -51 83
vertex 47.5 -23 85
vertex 47.5 -23 83
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 -20 72.5
vertex 47.5 8.5 64.5
vertex 47.5 -16.5 69
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 -23 83
vertex 47.5 8.5 64.5
vertex 47.5 -20 72.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -15 67.5
vertex 47.5 -16.5 69
vertex 47.5 8.5 64.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -23 83
vertex 47.5 -23 85
vertex 47.5 8.5 64.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 8.5 64.5
vertex 47.5 -23 85
vertex 47.5 -20 95.5
endloop
endfacet
facet normal 0.7 0.3 0.7
outer loop
vertex 31.5 -65.5 17
vertex 31.5 -61.5 15.5
vertex 23 -60.5 23.5
endloop
endfacet
facet normal 0.7 0.7 0.3
outer loop
vertex 31.5 -65.5 17
vertex 23 -60.5 23.5
vertex 31.5 -67 21
endloop
endfacet
facet normal 0.7 -0 0.7
outer loop
vertex 31.5 -61.5 15.5
vertex 31.5 -52.5 15.5
vertex 23 -60.5 23.5
endloop
endfacet
facet normal 0.7 0 0.7
outer loop
vertex 31.5 -52.5 15.5
vertex 24.5 -52.5 22
vertex 23 -60.5 23.5
endloop
endfacet
facet normal 0.7 -0 0.7
outer loop
vertex 24.5 -52.5 22
vertex 24 -52 22.5
vertex 23 -60.5 23.5
endloop
endfacet
facet normal 0.7 0 0.7
outer loop
vertex 24 -52 22.5
vertex 23.5 -51.5 23
vertex 23 -60.5 23.5
endloop
endfacet
facet normal 0.7 -0 0.7
outer loop
vertex 31.5 -41.5 15.5
vertex 31.5 41.5 15.5
vertex 24.5 -41.5 22
endloop
endfacet
facet normal 0.7 -0 0.7
outer loop
vertex 24.5 -41.5 22
vertex 24.5 41.5 22
vertex 24 -42 22.5
endloop
endfacet
facet normal 0.7 0 0.7
outer loop
vertex 23.5 -51.5 23
vertex 23 60.5 23.5
vertex 23 -60.5 23.5
endloop
endfacet
facet normal 0.7 -0 0.7
outer loop
vertex 23.5 -51.5 23
vertex 23.5 -42.5 23
vertex 23 60.5 23.5
endloop
endfacet
facet normal 0.7 -0 0.7
outer loop
vertex 24 -42 22.5
vertex 23 60.5 23.5
vertex 23.5 -42.5 23
endloop
endfacet
facet normal 0.6 0.8 0
outer loop
vertex 31.5 -67 21
vertex 23 -60.5 23.5
vertex 31.5 -67 147
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -41.5 15.5
vertex 47.5 41.5 22
vertex 47.5 41.5 15.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -41.5 22
vertex 47.5 42 22.5
vertex 47.5 41.5 22
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 42 22.5
vertex 47.5 -1 26
vertex 47.5 1 26
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 42 22.5
vertex 47.5 1 26
vertex 47.5 18 29
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 42 22.5
vertex 47.5 18 29
vertex 47.5 40.5 24.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 18 29
vertex 47.5 37 29
vertex 47.5 40.5 24.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -1 26
vertex 47.5 1 61
vertex 47.5 1 26
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 34 37
vertex 47.5 37 29
vertex 47.5 18 29
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 31.5 -41.5 15.5
vertex 47.5 41.5 15.5
vertex 31.5 41.5 15.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 42 22.5
vertex 47.5 40.5 24.5
vertex 47.5 42.5 23
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 42.5 23
vertex 47.5 40.5 24.5
vertex 47.5 60.5 23.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 42.5 23
vertex 47.5 60.5 23.5
vertex 47.5 51.5 23
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 51 29
vertex 47.5 50 30
vertex 47.5 52.5 29
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 51 29
vertex 47.5 50 30
vertex 47.5 50 30
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 52.5 15.5
vertex 47.5 52.5 22
vertex 47.5 61.5 15.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 61.5 15.5
vertex 47.5 52.5 22
vertex 47.5 52 22.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 61.5 15.5
vertex 47.5 52 22.5
vertex 47.5 60.5 23.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 61.5 15.5
vertex 47.5 67 21
vertex 47.5 65.5 17
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 51.5 23
vertex 47.5 60.5 23.5
vertex 47.5 52 22.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 61.5 15.5
vertex 47.5 60.5 23.5
vertex 47.5 60 35
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 51 29
vertex 47.5 52.5 29
vertex 47.5 60 23.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 52.5 29
vertex 47.5 55 30
vertex 47.5 60 23.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 55 33
vertex 47.5 60 23.5
vertex 47.5 55 30
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 61.5 15.5
vertex 47.5 60 35
vertex 47.5 59.5 41
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 47.5 52.5 15.5
vertex 47.5 61.5 15.5
vertex 31.5 52.5 15.5
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex 47.5 61.5 15.5
vertex 47.5 65.5 17
vertex 31.5 65.5 17
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex 47.5 65.5 17
vertex 47.5 67 21
vertex 31.5 65.5 17
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 37 29
vertex 47.5 34 37
vertex 47.5 38 29
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 38 29
vertex 47.5 34 37
vertex 47.5 42.5 33.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 37 40
vertex 47.5 42.5 33.5
vertex 47.5 34 37
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 40 43
vertex 47.5 50 33
vertex 47.5 40 42.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 50 30
vertex 47.5 50 30
vertex 47.5 50 33
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 50 30
vertex 47.5 40 42.5
vertex 47.5 50 33
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 50 33
vertex 47.5 41 44
vertex 47.5 52.5 34
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 38.5 44.5
vertex 47.5 41 44
vertex 47.5 40 43
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 29.5 55.5
vertex 47.5 41 44
vertex 47.5 38.5 44.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 40 43
vertex 47.5 41 44
vertex 47.5 50 33
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 52.5 34
vertex 47.5 41 44
vertex 47.5 47 50
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 55 33
vertex 47.5 54 64
vertex 47.5 60 23.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 52.5 34
vertex 47.5 54 64
vertex 47.5 55 33
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 60 35
vertex 47.5 60.5 23.5
vertex 47.5 54.5 64.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 61.5 15.5
vertex 47.5 59.5 41
vertex 47.5 58 85
endloop
endfacet
facet normal -0 -1 0
outer loop
vertex 47.5 67 21
vertex 41.5 67 39
vertex 40 67 36.5
endloop
endfacet
facet normal -0 -1 0
outer loop
vertex 47.5 67 21
vertex 40 67 36.5
vertex 37.5 67 35
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 47.5 67 21
vertex 37.5 67 35
vertex 32 67 35
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 47.5 61.5 15.5
vertex 31.5 61.5 15.5
vertex 31.5 52.5 15.5
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex 47.5 61.5 15.5
vertex 31.5 65.5 17
vertex 31.5 61.5 15.5
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex 47.5 67 21
vertex 31.5 67 21
vertex 31.5 65.5 17
endloop
endfacet
facet normal -0 -1 0
outer loop
vertex 47.5 67 21
vertex 32 67 35
vertex 31.5 67 21
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 9.5 63.5
vertex 47.5 1 61
vertex 47.5 8.5 64.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 10 63.5
vertex 47.5 13.5 67
vertex 47.5 11.5 64
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 13.5 67
vertex 47.5 15 67.5
vertex 47.5 11.5 64
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 28 57
vertex 47.5 32 52
vertex 47.5 16.5 69
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 11.5 64
vertex 47.5 15 67.5
vertex 47.5 15 67.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 19.5 63.5
vertex 47.5 15 67.5
vertex 47.5 10 73
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 15 67.5
vertex 47.5 10 73
vertex 47.5 15 67.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 16.5 69
vertex 47.5 16 72
vertex 47.5 17 70.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 5.5 79.5
vertex 47.5 16 72
vertex 47.5 16.5 69
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 20 72.5
vertex 47.5 17.5 71
vertex 47.5 -6 100.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 5.5 79.5
vertex 47.5 16.5 69
vertex 47.5 32 52
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 17 70.5
vertex 47.5 20 72.5
vertex 47.5 16.5 69
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 17 70.5
vertex 47.5 17.5 71
vertex 47.5 20 72.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 54 64
vertex 47.5 52.5 34
vertex 47.5 47 50
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 54.5 64.5
vertex 47.5 55 66
vertex 47.5 60 35
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 57 76.5
vertex 47.5 60 35
vertex 47.5 55 66
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 61.5 15.5
vertex 47.5 65.5 151
vertex 47.5 67 21
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 51 85
vertex 47.5 51 83
vertex 47.5 23 83
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 57 78.5
vertex 47.5 58 83
vertex 47.5 59.5 41
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 59.5 41
vertex 47.5 58 83
vertex 47.5 58 85
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 57 83
vertex 47.5 58 85
vertex 47.5 58 83
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 61.5 15.5
vertex 47.5 58 85
vertex 47.5 65.5 151
endloop
endfacet
facet normal -0 -1 0
outer loop
vertex 47.5 67 21
vertex 47.5 67 147
vertex 41.5 67 39
endloop
endfacet
facet normal 0 -1 -0
outer loop
vertex 47.5 67 147
vertex 40 67 41.5
vertex 41.5 67 39
endloop
endfacet
facet normal 0 -1 -0
outer loop
vertex 47.5 67 147
vertex 37.5 67 43
vertex 40 67 41.5
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 31.5 67 147
vertex 32 67 43
vertex 37.5 67 43
endloop
endfacet
facet normal 0.7 0 0.7
outer loop
vertex 24.5 -41.5 22
vertex 31.5 41.5 15.5
vertex 24.5 41.5 22
endloop
endfacet
facet normal 0.7 0 0.7
outer loop
vertex 24 -42 22.5
vertex 24.5 41.5 22
vertex 24 42 22.5
endloop
endfacet
facet normal 0.7 -0 0.7
outer loop
vertex 24 -42 22.5
vertex 24 42 22.5
vertex 23.5 42.5 23
endloop
endfacet
facet normal 0.7 0 0.7
outer loop
vertex 24 -42 22.5
vertex 23.5 42.5 23
vertex 23 60.5 23.5
endloop
endfacet
facet normal 0.7 -0 0.7
outer loop
vertex 31.5 52.5 15.5
vertex 31.5 61.5 15.5
vertex 24.5 52.5 22
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 31.5 67 21
vertex 32 67 35
vertex 31.5 67 35.5
endloop
endfacet
facet normal 0.7 -0 0.7
outer loop
vertex 31.5 61.5 15.5
vertex 23 60.5 23.5
vertex 24.5 52.5 22
endloop
endfacet
facet normal 0.7 -0.3 0.7
outer loop
vertex 31.5 61.5 15.5
vertex 31.5 65.5 17
vertex 23 60.5 23.5
endloop
endfacet
facet normal 0.7 -0.7 0.3
outer loop
vertex 31.5 65.5 17
vertex 31.5 67 21
vertex 23 60.5 23.5
endloop
endfacet
facet normal 0.6 -0.8 -0
outer loop
vertex 31.5 67 21
vertex 29.5 65.5 36.5
vertex 23 60.5 23.5
endloop
endfacet
facet normal 0.6 -0.8 0
outer loop
vertex 31.5 67 21
vertex 31.5 67 35.5
vertex 29.5 65.5 36.5
endloop
endfacet
facet normal 0.6 -0.8 0
outer loop
vertex 29.5 65.5 36.5
vertex 28.5 64.5 39
vertex 23 60.5 23.5
endloop
endfacet
facet normal 0.7 -0 0.7
outer loop
vertex 23.5 42.5 23
vertex 23.5 51.5 23
vertex 23 60.5 23.5
endloop
endfacet
facet normal 0.7 0 0.7
outer loop
vertex 24.5 52.5 22
vertex 23 60.5 23.5
vertex 24 52 22.5
endloop
endfacet
facet normal 0.7 -0 0.7
outer loop
vertex 23.5 51.5 23
vertex 24 52 22.5
vertex 23 60.5 23.5
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 31.5 67 147
vertex 31.5 67 42.5
vertex 32 67 43
endloop
endfacet
facet normal 0.6 -0.8 0
outer loop
vertex 28.5 64.5 39
vertex 29.5 65.5 41.5
vertex 23 60.5 144.5
endloop
endfacet
facet normal 0.6 -0.8 0
outer loop
vertex 28.5 64.5 39
vertex 23 60.5 144.5
vertex 23 60.5 23.5
endloop
endfacet
facet normal 0.6 -0.8 -0
outer loop
vertex 31.5 67 42.5
vertex 23 60.5 144.5
vertex 29.5 65.5 41.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -65.5 17
vertex 47.5 -61.5 152.5
vertex 47.5 -58 83
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 -57 85
vertex 47.5 -58 83
vertex 47.5 -58 85
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -51 83
vertex 47.5 -51 85
vertex 47.5 -23 85
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -65.5 17
vertex 47.5 -67 147
vertex 47.5 -61.5 152.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -58 83
vertex 47.5 -60.5 138
vertex 47.5 -58 85
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 -57 89.5
vertex 47.5 -58 85
vertex 47.5 -60.5 138
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -57 91.5
vertex 47.5 -60.5 139.5
vertex 47.5 -55 102
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 -54.5 103.5
vertex 47.5 -55 102
vertex 47.5 -60.5 139.5
endloop
endfacet
facet normal 0 1 0
outer loop
vertex 31.5 -67 21
vertex 31.5 -67 147
vertex 47.5 -67 147
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 -18 97.5
vertex 47.5 8.5 64.5
vertex 47.5 -20 95.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -17.5 98
vertex 47.5 -16.5 99
vertex 47.5 -5.5 88.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 -17.5 98
vertex 47.5 -5.5 88.5
vertex 47.5 -13.5 92.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 -28 111
vertex 47.5 -5.5 88.5
vertex 47.5 -16.5 99
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -19.5 104.5
vertex 47.5 -15 100.5
vertex 47.5 -8 92.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 -11.5 104
vertex 47.5 -14.5 100.5
vertex 47.5 -15 100.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -8 92.5
vertex 47.5 -15 100.5
vertex 47.5 -14.5 100.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -14.5 100.5
vertex 47.5 -11.5 104
vertex 47.5 -12.5 100.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 -19.5 104.5
vertex 47.5 -15 100.5
vertex 47.5 -19.5 104.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -12.5 100.5
vertex 47.5 -11.5 104
vertex 47.5 -9.5 103.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 -10 104.5
vertex 47.5 -9.5 103.5
vertex 47.5 -11.5 104
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -9.5 104.5
vertex 47.5 -1 107
vertex 47.5 -6 100.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -54 104
vertex 47.5 -60 144.5
vertex 47.5 -47 118
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -61.5 152.5
vertex 47.5 -60.5 138
vertex 47.5 -58 83
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -60.5 139.5
vertex 47.5 -60.5 144.5
vertex 47.5 -54.5 103.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -47 118
vertex 47.5 -60 144.5
vertex 47.5 -55 135
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -47 134.5
vertex 47.5 -41 124
vertex 47.5 -47 118
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 -38.5 123.5
vertex 47.5 -29.5 112.5
vertex 47.5 -41 124
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -38.5 123.5
vertex 47.5 -41 124
vertex 47.5 -40 125
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -47 134.5
vertex 47.5 -40 125
vertex 47.5 -41 124
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -47 118
vertex 47.5 -55 135
vertex 47.5 -52.5 134
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -47 118
vertex 47.5 -52.5 134
vertex 47.5 -50 135
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 -47 134.5
vertex 47.5 -47 118
vertex 47.5 -50 135
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -50 135
vertex 47.5 -50 138
vertex 47.5 -49.5 138
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -50 135
vertex 47.5 -49.5 138
vertex 47.5 -47 134.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -40 125
vertex 47.5 -47 134.5
vertex 47.5 -41 132.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -40 125
vertex 47.5 -41 132.5
vertex 47.5 -34 131
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 -37 138.5
vertex 47.5 -41 132.5
vertex 47.5 -42.5 134.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 -37 138.5
vertex 47.5 -34 131
vertex 47.5 -41 132.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -37 138.5
vertex 47.5 -36.5 138.5
vertex 47.5 -34 131
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -61.5 152.5
vertex 47.5 -60.5 139.5
vertex 47.5 -60.5 138
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -60 144.5
vertex 47.5 -55 138
vertex 47.5 -55 135
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -55 138
vertex 47.5 -60 144.5
vertex 47.5 -52.5 139
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -52.5 139
vertex 47.5 -60 144.5
vertex 47.5 -51 139
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -61.5 152.5
vertex 47.5 -60.5 144.5
vertex 47.5 -60.5 139.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -52 145.5
vertex 47.5 -51.5 145
vertex 47.5 -60.5 144.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -67 147
vertex 47.5 -65.5 151
vertex 47.5 -61.5 152.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 -52 145.5
vertex 47.5 -60.5 144.5
vertex 47.5 -61.5 152.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -52 145.5
vertex 47.5 -61.5 152.5
vertex 47.5 -52.5 146
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -52.5 146
vertex 47.5 -61.5 152.5
vertex 47.5 -52.5 152.5
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex 47.5 -67 147
vertex 31.5 -67 147
vertex 47.5 -65.5 151
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex 47.5 -65.5 151
vertex 31.5 -61.5 152.5
vertex 47.5 -61.5 152.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 47.5 -61.5 152.5
vertex 31.5 -52.5 152.5
vertex 47.5 -52.5 152.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -50 138
vertex 47.5 -51 139
vertex 47.5 -49.5 138
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -52.5 139
vertex 47.5 -51 139
vertex 47.5 -50 138
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -51.5 145
vertex 47.5 -42.5 145
vertex 47.5 -60.5 144.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 -42.5 145
vertex 47.5 -41 144.5
vertex 47.5 -60.5 144.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -42.5 145
vertex 47.5 -42 145.5
vertex 47.5 -41 144.5
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex 47.5 -65.5 151
vertex 31.5 -67 147
vertex 31.5 -65.5 151
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex 47.5 -65.5 151
vertex 31.5 -65.5 151
vertex 31.5 -61.5 152.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 47.5 -61.5 152.5
vertex 31.5 -61.5 152.5
vertex 31.5 -52.5 152.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -34 131
vertex 47.5 -36.5 138.5
vertex 47.5 -18 139
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -1 107
vertex 47.5 -1 142
vertex 47.5 1 142
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -36.5 138.5
vertex 47.5 -41 144.5
vertex 47.5 -18 139
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 -42 145.5
vertex 47.5 -18 139
vertex 47.5 -41 144.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -42 145.5
vertex 47.5 -1 142
vertex 47.5 -18 139
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -42 145.5
vertex 47.5 -41.5 146
vertex 47.5 41.5 146
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -42 145.5
vertex 47.5 42 145.5
vertex 47.5 -1 142
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -41.5 146
vertex 47.5 -41.5 152.5
vertex 47.5 41.5 152.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 47.5 -41.5 152.5
vertex 31.5 -41.5 152.5
vertex 31.5 41.5 152.5
endloop
endfacet
facet normal 0.6 0.8 -0
outer loop
vertex 31.5 -67 147
vertex 23 -60.5 23.5
vertex 23 -60.5 144.5
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex 31.5 -61.5 152.5
vertex 24.5 -52.5 146
vertex 31.5 -52.5 152.5
endloop
endfacet
facet normal 0.7 0.7 -0.3
outer loop
vertex 31.5 -67 147
vertex 23 -60.5 144.5
vertex 31.5 -65.5 151
endloop
endfacet
facet normal 0.7 0.3 -0.7
outer loop
vertex 31.5 -65.5 151
vertex 23 -60.5 144.5
vertex 31.5 -61.5 152.5
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex 31.5 -61.5 152.5
vertex 23 -60.5 144.5
vertex 24.5 -52.5 146
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex 24 -52 145.5
vertex 23 -60.5 144.5
vertex 23.5 -51.5 145
endloop
endfacet
facet normal 0.7 -0 -0.7
outer loop
vertex 24.5 -52.5 146
vertex 23 -60.5 144.5
vertex 24 -52 145.5
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex 23.5 -51.5 145
vertex 23 -60.5 144.5
vertex 23.5 -42.5 145
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex 31.5 -41.5 152.5
vertex 24.5 -41.5 146
vertex 24.5 41.5 146
endloop
endfacet
facet normal 0.7 -0 -0.7
outer loop
vertex 23.5 -42.5 145
vertex 23 -60.5 144.5
vertex 24 42 145.5
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex 24.5 -41.5 146
vertex 24 -42 145.5
vertex 24 42 145.5
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex 24 -42 145.5
vertex 23.5 -42.5 145
vertex 24 42 145.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 20 72.5
vertex 47.5 -6 100.5
vertex 47.5 23 83
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 23 83
vertex 47.5 -1 107
vertex 47.5 23 85
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 23 83
vertex 47.5 -6 100.5
vertex 47.5 -1 107
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -1 107
vertex 47.5 16.5 99
vertex 47.5 23 85
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 51 85
vertex 47.5 23 83
vertex 47.5 23 85
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 20 95.5
vertex 47.5 23 85
vertex 47.5 16.5 99
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 1 107
vertex 47.5 11.5 104
vertex 47.5 -1 107
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -1 107
vertex 47.5 11.5 104
vertex 47.5 15 100.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -1 107
vertex 47.5 15 100.5
vertex 47.5 16.5 99
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 1 107
vertex 47.5 -1 107
vertex 47.5 1 142
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 16.5 99
vertex 47.5 15 100.5
vertex 47.5 41 124
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 15 100.5
vertex 47.5 40 125
vertex 47.5 41 124
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 57 83
vertex 47.5 56.5 85
vertex 47.5 58 85
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 55.5 100
vertex 47.5 55 102
vertex 47.5 55.5 102.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 47 118
vertex 47.5 52.5 133.5
vertex 47.5 55.5 102.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 47 118
vertex 47.5 55.5 102.5
vertex 47.5 55 102
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 67 21
vertex 47.5 65.5 151
vertex 47.5 67 147
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 65.5 151
vertex 47.5 58 85
vertex 47.5 56 97.5
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex 47.5 67 147
vertex 31.5 67 147
vertex 37.5 67 43
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 42 145.5
vertex 47.5 1 142
vertex 47.5 -1 142
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -42 145.5
vertex 47.5 41.5 146
vertex 47.5 42 145.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -41.5 146
vertex 47.5 41.5 152.5
vertex 47.5 41.5 146
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 47.5 -41.5 152.5
vertex 31.5 41.5 152.5
vertex 47.5 41.5 152.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 42 145.5
vertex 47.5 18 139
vertex 47.5 1 142
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 18 139
vertex 47.5 42 144.5
vertex 47.5 34 131
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 42 145.5
vertex 47.5 42 144.5
vertex 47.5 18 139
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 44.5 127
vertex 47.5 41 124
vertex 47.5 40 125
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 34 131
vertex 47.5 44.5 127
vertex 47.5 40 125
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 41 124
vertex 47.5 52.5 133.5
vertex 47.5 47 118
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 41 124
vertex 47.5 44.5 127
vertex 47.5 52.5 133.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 34 131
vertex 47.5 42 144.5
vertex 47.5 44.5 127
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 44.5 127
vertex 47.5 45 127.5
vertex 47.5 52.5 133.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 52.5 134
vertex 47.5 45 128.5
vertex 47.5 44 135
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 52.5 134
vertex 47.5 44 135
vertex 47.5 50 135
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 44 135
vertex 47.5 50 138
vertex 47.5 50 135
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 52.5 133.5
vertex 47.5 52.5 134
vertex 47.5 55.5 102.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 55.5 102.5
vertex 47.5 52.5 134
vertex 47.5 52.5 134
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 53 134
vertex 47.5 55.5 102.5
vertex 47.5 52.5 134
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 53.5 134.5
vertex 47.5 55 135
vertex 47.5 56 97.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 65.5 151
vertex 47.5 56 97.5
vertex 47.5 55 135
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 42.5 145
vertex 47.5 42 144.5
vertex 47.5 42 145.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 52 139
vertex 47.5 50 138
vertex 47.5 44 135
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 50 138
vertex 47.5 52 139
vertex 47.5 52.5 139
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 42.5 145
vertex 47.5 51.5 145
vertex 47.5 42 144.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 51.5 145
vertex 47.5 52.5 144.5
vertex 47.5 42 144.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 51.5 145
vertex 47.5 52 145.5
vertex 47.5 52.5 144.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 52 139
vertex 47.5 52.5 139
vertex 47.5 52.5 139
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 52.5 139
vertex 47.5 52.5 139
vertex 47.5 52.5 139
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 53 139
vertex 47.5 52.5 144.5
vertex 47.5 55 138
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 65.5 151
vertex 47.5 55 135
vertex 47.5 55 138
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 52 145.5
vertex 47.5 52.5 146
vertex 47.5 52.5 144.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 65.5 151
vertex 47.5 55 138
vertex 47.5 52.5 144.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 52.5 146
vertex 47.5 52.5 152.5
vertex 47.5 61.5 152.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 52.5 146
vertex 47.5 65.5 151
vertex 47.5 52.5 144.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 52.5 146
vertex 47.5 61.5 152.5
vertex 47.5 65.5 151
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 47.5 52.5 152.5
vertex 31.5 61.5 152.5
vertex 47.5 61.5 152.5
endloop
endfacet
facet normal -0 -0.9 -0.4
outer loop
vertex 47.5 67 147
vertex 47.5 65.5 151
vertex 31.5 65.5 151
endloop
endfacet
facet normal 0 -0.4 -0.9
outer loop
vertex 47.5 61.5 152.5
vertex 31.5 65.5 151
vertex 47.5 65.5 151
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 47.5 52.5 152.5
vertex 31.5 52.5 152.5
vertex 31.5 61.5 152.5
endloop
endfacet
facet normal 0 -0.9 -0.4
outer loop
vertex 47.5 67 147
vertex 31.5 65.5 151
vertex 31.5 67 147
endloop
endfacet
facet normal -0 -0.4 -0.9
outer loop
vertex 47.5 61.5 152.5
vertex 31.5 61.5 152.5
vertex 31.5 65.5 151
endloop
endfacet
facet normal 0.6 -0.8 0
outer loop
vertex 31.5 67 147
vertex 23 60.5 144.5
vertex 31.5 67 42.5
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex 31.5 -41.5 152.5
vertex 24.5 41.5 146
vertex 31.5 41.5 152.5
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex 24 42 145.5
vertex 23 -60.5 144.5
vertex 23.5 42.5 145
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex 23.5 42.5 145
vertex 23 -60.5 144.5
vertex 23.5 51.5 145
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex 24.5 -41.5 146
vertex 24 42 145.5
vertex 24.5 41.5 146
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex 23.5 51.5 145
vertex 23 -60.5 144.5
vertex 23 60.5 144.5
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex 31.5 52.5 152.5
vertex 23 60.5 144.5
vertex 31.5 61.5 152.5
endloop
endfacet
facet normal 0.7 -0 -0.7
outer loop
vertex 31.5 52.5 152.5
vertex 24.5 52.5 146
vertex 23 60.5 144.5
endloop
endfacet
facet normal 0.7 -0.7 -0.3
outer loop
vertex 31.5 67 147
vertex 31.5 65.5 151
vertex 23 60.5 144.5
endloop
endfacet
facet normal 0.7 -0.3 -0.7
outer loop
vertex 31.5 61.5 152.5
vertex 23 60.5 144.5
vertex 31.5 65.5 151
endloop
endfacet
facet normal 0.7 -0 -0.7
outer loop
vertex 23.5 51.5 145
vertex 23 60.5 144.5
vertex 24 52 145.5
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex 24.5 52.5 146
vertex 24 52 145.5
vertex 23 60.5 144.5
endloop
endfacet
facet normal -0 -1 0
outer loop
vertex 47.5 -52.5 15.5
vertex 47.5 -52.5 22
vertex 31.5 -52.5 15.5
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 47.5 -41.5 15.5
vertex 31.5 -41.5 15.5
vertex 47.5 -41.5 22
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex 47.5 -52.5 22
vertex 47.5 -52 22.5
vertex 24.5 -52.5 22
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex 47.5 -52.5 22
vertex 24.5 -52.5 22
vertex 31.5 -52.5 15.5
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex 47.5 -52 22.5
vertex 47.5 -51.5 23
vertex 24 -52 22.5
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 47.5 -51.5 23
vertex 47.5 -42.5 23
vertex 23.5 -51.5 23
endloop
endfacet
facet normal -0 0.9 0.4
outer loop
vertex 47.5 -41.5 22
vertex 24 -42 22.5
vertex 47.5 -42 22.5
endloop
endfacet
facet normal -0 0.4 0.9
outer loop
vertex 47.5 -42 22.5
vertex 23.5 -42.5 23
vertex 47.5 -42.5 23
endloop
endfacet
facet normal 0 1 0
outer loop
vertex 47.5 -41.5 22
vertex 31.5 -41.5 15.5
vertex 24.5 -41.5 22
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex 47.5 -52 22.5
vertex 24 -52 22.5
vertex 24.5 -52.5 22
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex 47.5 -51.5 23
vertex 23.5 -51.5 23
vertex 24 -52 22.5
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 47.5 -42.5 23
vertex 23.5 -42.5 23
vertex 23.5 -51.5 23
endloop
endfacet
facet normal 0 0.9 0.4
outer loop
vertex 47.5 -41.5 22
vertex 24.5 -41.5 22
vertex 24 -42 22.5
endloop
endfacet
facet normal 0 0.4 0.9
outer loop
vertex 47.5 -42 22.5
vertex 24 -42 22.5
vertex 23.5 -42.5 23
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -52.5 21
vertex 22 -52.5 22
vertex 22 -51.5 23
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 -51.5 13
vertex 22 -51.5 13
vertex 22 -44 13
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -44 13
vertex 22 -44 21
vertex 22 -42.5 13
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 22 -52.5 21
vertex 22 -42.5 23
vertex 22 -44 21
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 -42.5 13
vertex 22 -41.5 14
vertex 22 -42 13.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -42.5 13
vertex 22 -41.5 22
vertex 22 -41.5 14
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 -44 21
vertex 22 -41.5 22
vertex 22 -42.5 13
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -52.5 22
vertex 22 -52 22.5
vertex 22 -51.5 23
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -52.5 21
vertex 22 -51.5 23
vertex 22 -42.5 23
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -44 21
vertex 22 -42 22.5
vertex 22 -41.5 22
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -44 21
vertex 22 -42.5 23
vertex 22 -42 22.5
endloop
endfacet
facet normal -0 -1 0
outer loop
vertex 47.5 41.5 15.5
vertex 47.5 41.5 22
vertex 31.5 41.5 15.5
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 47.5 52.5 15.5
vertex 31.5 52.5 15.5
vertex 47.5 52.5 22
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 47.5 42.5 13
vertex 22 51.5 13
vertex 47.5 51.5 13
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex 47.5 41.5 22
vertex 47.5 42 22.5
vertex 24.5 41.5 22
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex 47.5 42 22.5
vertex 47.5 42.5 23
vertex 24 42 22.5
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 47.5 42.5 23
vertex 47.5 51.5 23
vertex 23.5 42.5 23
endloop
endfacet
facet normal 0 0.4 0.9
outer loop
vertex 47.5 51.5 23
vertex 47.5 52 22.5
vertex 23.5 51.5 23
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex 47.5 41.5 22
vertex 24.5 41.5 22
vertex 31.5 41.5 15.5
endloop
endfacet
facet normal -0 0.9 0.4
outer loop
vertex 47.5 52.5 22
vertex 24 52 22.5
vertex 47.5 52 22.5
endloop
endfacet
facet normal 0 1 0
outer loop
vertex 47.5 52.5 22
vertex 31.5 52.5 15.5
vertex 24.5 52.5 22
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 47.5 42.5 13
vertex 22 42.5 13
vertex 22 44 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 47.5 42.5 13
vertex 22 44 13
vertex 22 51.5 13
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex 47.5 42 22.5
vertex 24 42 22.5
vertex 24.5 41.5 22
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex 47.5 42.5 23
vertex 23.5 42.5 23
vertex 24 42 22.5
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 47.5 51.5 23
vertex 23.5 51.5 23
vertex 23.5 42.5 23
endloop
endfacet
facet normal 0 0.4 0.9
outer loop
vertex 47.5 52 22.5
vertex 24 52 22.5
vertex 23.5 51.5 23
endloop
endfacet
facet normal 0 0.9 0.4
outer loop
vertex 47.5 52.5 22
vertex 24.5 52.5 22
vertex 24 52 22.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 22 42 13.5
vertex 22 44 13
vertex 22 42.5 13
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 42 13.5
vertex 22 41.5 14
vertex 22 44 13
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 41.5 14
vertex 22 42.5 23
vertex 22 44 13
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 41.5 14
vertex 22 41.5 22
vertex 22 42.5 23
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 42.5 13
vertex 22 44 13
vertex 22 44 13
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 22 44 13
vertex 22 42.5 23
vertex 22 44 21
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 44 21
vertex 22 52.5 22
vertex 22 52.5 21
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 41.5 22
vertex 22 42 22.5
vertex 22 42.5 23
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 44 21
vertex 22 42.5 23
vertex 22 51.5 23
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 44 21
vertex 22 51.5 23
vertex 22 52 22.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 44 21
vertex 22 52 22.5
vertex 22 52.5 22
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 47.5 -52.5 146
vertex 47.5 -52.5 152.5
vertex 31.5 -52.5 152.5
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 47.5 -41.5 146
vertex 31.5 -41.5 152.5
vertex 47.5 -41.5 152.5
endloop
endfacet
facet normal 0 -0.9 -0.4
outer loop
vertex 47.5 -52 145.5
vertex 47.5 -52.5 146
vertex 24 -52 145.5
endloop
endfacet
facet normal -0 -1 0
outer loop
vertex 47.5 -52.5 146
vertex 31.5 -52.5 152.5
vertex 24.5 -52.5 146
endloop
endfacet
facet normal 0 -0.4 -0.9
outer loop
vertex 47.5 -52 145.5
vertex 23.5 -51.5 145
vertex 47.5 -51.5 145
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 47.5 -51.5 145
vertex 23.5 -42.5 145
vertex 47.5 -42.5 145
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex 47.5 -42 145.5
vertex 24.5 -41.5 146
vertex 47.5 -41.5 146
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex 47.5 -42.5 145
vertex 24 -42 145.5
vertex 47.5 -42 145.5
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 47.5 -51.5 155
vertex 47.5 -42.5 155
vertex 22 -51.5 155
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 47.5 -41.5 146
vertex 24.5 -41.5 146
vertex 31.5 -41.5 152.5
endloop
endfacet
facet normal -0 -0.9 -0.4
outer loop
vertex 47.5 -52.5 146
vertex 24.5 -52.5 146
vertex 24 -52 145.5
endloop
endfacet
facet normal -0 -0.4 -0.9
outer loop
vertex 47.5 -52 145.5
vertex 24 -52 145.5
vertex 23.5 -51.5 145
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 47.5 -51.5 145
vertex 23.5 -51.5 145
vertex 23.5 -42.5 145
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex 47.5 -42 145.5
vertex 24 -42 145.5
vertex 24.5 -41.5 146
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex 47.5 -42.5 145
vertex 23.5 -42.5 145
vertex 24 -42 145.5
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 47.5 -42.5 155
vertex 22 -44 155
vertex 22 -51.5 155
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 22 -52 145.5
vertex 22 -52.5 146
vertex 22 -44 147
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 22 -52 145.5
vertex 22 -44 147
vertex 22 -51.5 145
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 -51.5 145
vertex 22 -44 147
vertex 22 -42.5 145
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 -42.5 145
vertex 22 -41.5 146
vertex 22 -42 145.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 22 -52.5 146
vertex 22 -52.5 147
vertex 22 -44 147
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -42.5 145
vertex 22 -44 147
vertex 22 -44 155
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 22 -44 155
vertex 22 -44 155
vertex 22 -44 155
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -42.5 145
vertex 22 -41.5 154
vertex 22 -41.5 146
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 -42.5 145
vertex 22 -44 155
vertex 22 -41.5 154
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -44 155
vertex 22 -42 154.5
vertex 22 -41.5 154
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 -44 155
vertex 22 -42.5 155
vertex 22 -42 154.5
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 47.5 41.5 146
vertex 47.5 41.5 152.5
vertex 31.5 41.5 152.5
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 47.5 52.5 146
vertex 31.5 52.5 152.5
vertex 47.5 52.5 152.5
endloop
endfacet
facet normal 0 -0.9 -0.4
outer loop
vertex 47.5 42 145.5
vertex 47.5 41.5 146
vertex 24 42 145.5
endloop
endfacet
facet normal 0 -0.4 -0.9
outer loop
vertex 47.5 42.5 145
vertex 47.5 42 145.5
vertex 23.5 42.5 145
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 47.5 42.5 145
vertex 23.5 51.5 145
vertex 47.5 51.5 145
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex 47.5 51.5 145
vertex 24 52 145.5
vertex 47.5 52 145.5
endloop
endfacet
facet normal -0 -1 0
outer loop
vertex 47.5 41.5 146
vertex 31.5 41.5 152.5
vertex 24.5 41.5 146
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex 47.5 52 145.5
vertex 24.5 52.5 146
vertex 47.5 52.5 146
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 47.5 52.5 146
vertex 24.5 52.5 146
vertex 31.5 52.5 152.5
endloop
endfacet
facet normal -0 -0.9 -0.4
outer loop
vertex 47.5 41.5 146
vertex 24.5 41.5 146
vertex 24 42 145.5
endloop
endfacet
facet normal -0 -0.4 -0.9
outer loop
vertex 47.5 42 145.5
vertex 24 42 145.5
vertex 23.5 42.5 145
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 47.5 42.5 145
vertex 23.5 42.5 145
vertex 23.5 51.5 145
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex 47.5 51.5 145
vertex 23.5 51.5 145
vertex 24 52 145.5
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 47.5 51.5 155
vertex 22 51.5 155
vertex 22 42.5 155
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex 47.5 52 145.5
vertex 24 52 145.5
vertex 24.5 52.5 146
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 22 42.5 145
vertex 22 42 145.5
vertex 22 44 147
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 22 42 145.5
vertex 22 41.5 146
vertex 22 44 147
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 42.5 145
vertex 22 52.5 147
vertex 22 51.5 145
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 51.5 145
vertex 22 52.5 146
vertex 22 52 145.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 22 41.5 146
vertex 22 42.5 155
vertex 22 44 147
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 41.5 146
vertex 22 41.5 154
vertex 22 42.5 155
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 41.5 154
vertex 22 42 154.5
vertex 22 42.5 155
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 22 42.5 145
vertex 22 44 147
vertex 22 52.5 147
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 22 42.5 155
vertex 22 44 155
vertex 22 44 147
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 22 42.5 155
vertex 22 51.5 155
vertex 22 44 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 22 44 155
vertex 22 51.5 155
vertex 22 51.5 155
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 22 51.5 145
vertex 22 52.5 147
vertex 22 52.5 146
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 -61.5 13
vertex 22 -51.5 13
vertex 22 -51.5 13
endloop
endfacet
facet normal 0 -0.9 -0.4
outer loop
vertex 22 -67 15.5
vertex 22 -69.5 21
vertex 16 -67 15.5
endloop
endfacet
facet normal 0 -0.4 -0.9
outer loop
vertex 22 -67 15.5
vertex 16 -61.5 13
vertex 22 -61.5 13
endloop
endfacet
facet normal -0 -0.4 -0.9
outer loop
vertex 22 -67 15.5
vertex 16 -67 15.5
vertex 16 -61.5 13
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 16 -67 15.5
vertex 16 -60.5 21
vertex 16 -61.5 13
endloop
endfacet
facet normal -0 -0.9 -0.4
outer loop
vertex 22 -69.5 21
vertex 16 -69.5 21
vertex 16 -67 15.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 -67 15.5
vertex 16 -69.5 21
vertex 16 -65 22.5
endloop
endfacet
facet normal 0 0.4 0.9
outer loop
vertex 22 -60.5 21
vertex 16 -60.5 21
vertex 16 -65 22.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 -67 15.5
vertex 16 -65 22.5
vertex 16 -60.5 21
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 -61.5 13
vertex 16 -44 13
vertex 22 -51.5 13
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 22 -60.5 21
vertex 22 -52.5 21
vertex 16 -60.5 21
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 -61.5 13
vertex 16 -61.5 13
vertex 16 -44 13
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 -61.5 13
vertex 16 -60.5 21
vertex 16 -44 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 22 -52.5 21
vertex 16 -44 21
vertex 16 -60.5 21
endloop
endfacet
facet normal -0 0.9 0.4
outer loop
vertex 22 -65 22.5
vertex 16 -66.5 27
vertex 22 -66.5 27
endloop
endfacet
facet normal -0 0.4 0.9
outer loop
vertex 22 -60.5 21
vertex 16 -65 22.5
vertex 22 -65 22.5
endloop
endfacet
facet normal -0 -1 0
outer loop
vertex 22 -69.5 21
vertex 22 -69.5 40
vertex 16 -69.5 21
endloop
endfacet
facet normal 0 0.9 0.4
outer loop
vertex 22 -65 22.5
vertex 16 -65 22.5
vertex 16 -66.5 27
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 -69.5 21
vertex 16 -66.5 27
vertex 16 -65 22.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 -69.5 21
vertex 16 -69.5 40
vertex 16 -66.5 27
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 -51.5 13
vertex 16 -44 13
vertex 22 -44 13
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 22 -44 13
vertex 16 -44 13
vertex 22 -44 21
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 22 -52.5 21
vertex 22 -44 21
vertex 16 -44 21
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 -60.5 21
vertex 16 -44 21
vertex 16 -44 13
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 22 -44 21
vertex 16 -44 13
vertex 16 -44 21
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 22 -66.5 27
vertex 16 -66.5 40
vertex 22 -66.5 40
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 22 -66.5 27
vertex 16 -66.5 27
vertex 16 -66.5 40
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 16 -69.5 21
vertex 22 -69.5 40
vertex 16 -69.5 40
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 -66.5 27
vertex 16 -69.5 40
vertex 16 -66.5 40
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 22 -69.5 40
vertex 22 -66.5 40
vertex 16 -69.5 40
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 22 -66.5 40
vertex 16 -66.5 40
vertex 16 -69.5 40
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 22 44 13
vertex 22 44 21
vertex 16 44 21
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 22 44 21
vertex 22 52.5 21
vertex 16 44 21
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex 22 44 13
vertex 16 44 21
vertex 16 44 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 44 13
vertex 16 44 13
vertex 16 61.5 13
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 44 13
vertex 16 44 21
vertex 16 60.5 21
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 44 13
vertex 16 61.5 13
vertex 22 61.5 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 16 44 21
vertex 22 52.5 21
vertex 22 60.5 21
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 44 13
vertex 16 60.5 21
vertex 16 61.5 13
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 16 44 21
vertex 22 60.5 21
vertex 16 60.5 21
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex 22 61.5 13
vertex 16 67 15.5
vertex 22 67 15.5
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex 22 60.5 21
vertex 22 65 22.5
vertex 16 60.5 21
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex 22 67 15.5
vertex 16 69.5 21
vertex 22 69.5 21
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex 22 61.5 13
vertex 16 61.5 13
vertex 16 67 15.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 16 60.5 21
vertex 16 67 15.5
vertex 16 61.5 13
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex 22 67 15.5
vertex 16 67 15.5
vertex 16 69.5 21
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 60.5 21
vertex 16 65 22.5
vertex 16 67 15.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 67 15.5
vertex 16 65 22.5
vertex 16 69.5 21
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex 22 65 22.5
vertex 22 66.5 27
vertex 16 65 22.5
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex 22 65 22.5
vertex 16 65 22.5
vertex 16 60.5 21
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex 22 66.5 27
vertex 16 66.5 27
vertex 16 65 22.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 69.5 21
vertex 16 65 22.5
vertex 16 66.5 27
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 22 69.5 21
vertex 16 69.5 21
vertex 16 69.5 40
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 69.5 21
vertex 16 66.5 27
vertex 16 69.5 40
endloop
endfacet
facet normal -0 -1 0
outer loop
vertex 22 66.5 27
vertex 22 66.5 40
vertex 16 66.5 27
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 22 69.5 21
vertex 16 69.5 40
vertex 22 69.5 40
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 16 66.5 27
vertex 22 66.5 40
vertex 16 66.5 40
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 66.5 27
vertex 16 66.5 40
vertex 16 69.5 40
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 22 66.5 40
vertex 22 69.5 40
vertex 16 66.5 40
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 22 69.5 40
vertex 16 69.5 40
vertex 16 66.5 40
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 -69.5 128
vertex 16 -66.5 128
vertex 22 -66.5 128
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 -69.5 128
vertex 16 -69.5 128
vertex 16 -66.5 128
endloop
endfacet
facet normal -0 -1 0
outer loop
vertex 22 -69.5 128
vertex 22 -69.5 147
vertex 16 -69.5 128
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 22 -66.5 128
vertex 16 -66.5 141
vertex 22 -66.5 141
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 22 -66.5 128
vertex 16 -66.5 128
vertex 16 -66.5 141
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 -69.5 128
vertex 16 -66.5 141
vertex 16 -66.5 128
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 22 -61.5 155
vertex 22 -51.5 155
vertex 22 -61.5 155
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex 22 -66.5 141
vertex 16 -65 145.5
vertex 22 -65 145.5
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 16 -69.5 128
vertex 22 -69.5 147
vertex 16 -69.5 147
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 -69.5 128
vertex 16 -69.5 147
vertex 16 -66.5 141
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex 22 -66.5 141
vertex 16 -66.5 141
vertex 16 -65 145.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 -66.5 141
vertex 16 -69.5 147
vertex 16 -65 145.5
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex 22 -65 145.5
vertex 16 -65 145.5
vertex 16 -60.5 147
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex 22 -69.5 147
vertex 22 -67 152.5
vertex 16 -69.5 147
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex 22 -65 145.5
vertex 16 -60.5 147
vertex 22 -60.5 147
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex 22 -67 152.5
vertex 22 -61.5 155
vertex 16 -67 152.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 -65 145.5
vertex 16 -69.5 147
vertex 16 -67 152.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 -65 145.5
vertex 16 -67 152.5
vertex 16 -60.5 147
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex 22 -67 152.5
vertex 16 -67 152.5
vertex 16 -69.5 147
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex 22 -61.5 155
vertex 16 -61.5 155
vertex 16 -67 152.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 -67 152.5
vertex 16 -61.5 155
vertex 16 -60.5 147
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 -60.5 147
vertex 16 -44 147
vertex 22 -52.5 147
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 22 -61.5 155
vertex 22 -51.5 155
vertex 16 -61.5 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 16 -61.5 155
vertex 22 -51.5 155
vertex 22 -44 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 -60.5 147
vertex 16 -60.5 147
vertex 16 -44 147
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 16 -61.5 155
vertex 16 -44 155
vertex 16 -60.5 147
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 22 -51.5 155
vertex 22 -44 155
vertex 22 -44 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 -52.5 147
vertex 16 -44 147
vertex 22 -44 147
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 22 -44 147
vertex 16 -44 147
vertex 22 -44 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 22 -44 155
vertex 22 -44 155
vertex 16 -44 155
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 -60.5 147
vertex 16 -44 155
vertex 16 -44 147
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 16 -61.5 155
vertex 22 -44 155
vertex 16 -44 155
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 22 -44 155
vertex 16 -44 147
vertex 16 -44 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 66.5 128
vertex 16 69.5 128
vertex 22 69.5 128
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 66.5 128
vertex 16 66.5 128
vertex 16 69.5 128
endloop
endfacet
facet normal -0 -1 0
outer loop
vertex 22 66.5 128
vertex 22 66.5 141
vertex 16 66.5 128
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 66.5 128
vertex 16 66.5 141
vertex 16 69.5 128
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 22 69.5 128
vertex 16 69.5 128
vertex 16 69.5 147
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 16 66.5 128
vertex 22 66.5 141
vertex 16 66.5 141
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 44 147
vertex 16 44 147
vertex 22 52.5 147
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 22 44 147
vertex 22 44 155
vertex 16 44 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 22 44 155
vertex 22 51.5 155
vertex 16 44 155
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex 22 44 147
vertex 16 44 155
vertex 16 44 147
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 44 147
vertex 16 44 155
vertex 16 60.5 147
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 22 51.5 155
vertex 22 61.5 155
vertex 22 51.5 155
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 22 69.5 128
vertex 16 69.5 147
vertex 22 69.5 147
endloop
endfacet
facet normal 0 -0.4 -0.9
outer loop
vertex 22 65 145.5
vertex 22 60.5 147
vertex 16 65 145.5
endloop
endfacet
facet normal 0 -0.9 -0.4
outer loop
vertex 22 66.5 141
vertex 22 65 145.5
vertex 16 66.5 141
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 69.5 128
vertex 16 66.5 141
vertex 16 69.5 147
endloop
endfacet
facet normal -0 -0.9 -0.4
outer loop
vertex 22 65 145.5
vertex 16 65 145.5
vertex 16 66.5 141
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 66.5 141
vertex 16 65 145.5
vertex 16 69.5 147
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 52.5 147
vertex 16 60.5 147
vertex 22 60.5 147
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 22 51.5 155
vertex 22 61.5 155
vertex 16 44 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 16 44 155
vertex 22 61.5 155
vertex 22 61.5 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 16 44 147
vertex 16 60.5 147
vertex 22 52.5 147
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 16 44 155
vertex 22 61.5 155
vertex 16 61.5 155
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 16 44 155
vertex 16 61.5 155
vertex 16 60.5 147
endloop
endfacet
facet normal 0 0.4 0.9
outer loop
vertex 22 61.5 155
vertex 22 67 152.5
vertex 16 61.5 155
endloop
endfacet
facet normal -0 0.9 0.4
outer loop
vertex 22 69.5 147
vertex 16 67 152.5
vertex 22 67 152.5
endloop
endfacet
facet normal -0 -0.4 -0.9
outer loop
vertex 22 60.5 147
vertex 16 60.5 147
vertex 16 65 145.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 65 145.5
vertex 16 60.5 147
vertex 16 67 152.5
endloop
endfacet
facet normal 0 0.9 0.4
outer loop
vertex 22 69.5 147
vertex 16 69.5 147
vertex 16 67 152.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 65 145.5
vertex 16 67 152.5
vertex 16 69.5 147
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 16 60.5 147
vertex 16 61.5 155
vertex 16 67 152.5
endloop
endfacet
facet normal 0 0.4 0.9
outer loop
vertex 22 67 152.5
vertex 16 67 152.5
vertex 16 61.5 155
endloop
endfacet
facet normal 0 0.5 0.9
outer loop
vertex 47.5 -52.5 29
vertex 50 -55 30
vertex 50 -52.5 29
endloop
endfacet
facet normal 0 0.5 0.9
outer loop
vertex 47.5 -53 29
vertex 50 -55 30
vertex 47.5 -52.5 29
endloop
endfacet
facet normal 0 0.5 0.9
outer loop
vertex 47.5 -52.5 29
vertex 50 -55 30
vertex 47.5 -52.5 29
endloop
endfacet
facet normal -0 0.5 0.9
outer loop
vertex 47.5 -53 29
vertex 47.5 -55 30
vertex 50 -55 30
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex 47.5 -50 30
vertex 50 -52.5 29
vertex 50 -50 30
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex 47.5 -50 30
vertex 47.5 -52.5 29
vertex 50 -52.5 29
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 50 -55 30
vertex 47.5 -55 30
vertex 50 -55 33
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex 47.5 -55 33
vertex 50 -52.5 34
vertex 50 -55 33
endloop
endfacet
facet normal -0 1 0
outer loop
vertex 47.5 -55 33
vertex 50 -55 33
vertex 47.5 -55 30
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex 47.5 -55 33
vertex 47.5 -52.5 34
vertex 50 -52.5 34
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 47.5 -50 33
vertex 50 -50 30
vertex 50 -50 33
endloop
endfacet
facet normal -0 -0.5 -0.9
outer loop
vertex 50 -52.5 34
vertex 47.5 -52.5 34
vertex 50 -50 33
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 47.5 -50 33
vertex 47.5 -50 30
vertex 50 -50 30
endloop
endfacet
facet normal 0 -0.5 -0.9
outer loop
vertex 47.5 -52.5 34
vertex 47.5 -50 33
vertex 50 -50 33
endloop
endfacet
facet normal 0 0.5 0.9
outer loop
vertex 50 50 30
vertex 50 52.5 29
vertex 47.5 52.5 29
endloop
endfacet
facet normal 0 0.5 0.9
outer loop
vertex 50 50 30
vertex 47.5 52.5 29
vertex 47.5 50 30
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex 50 52.5 29
vertex 50 55 30
vertex 47.5 55 30
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex 50 52.5 29
vertex 47.5 55 30
vertex 47.5 52.5 29
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 50 50 30
vertex 47.5 50 30
vertex 50 50 33
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex 50 52.5 34
vertex 50 50 33
vertex 47.5 50 33
endloop
endfacet
facet normal -0 1 0
outer loop
vertex 47.5 50 33
vertex 50 50 33
vertex 47.5 50 30
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex 50 52.5 34
vertex 47.5 50 33
vertex 47.5 52.5 34
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex 50 55 33
vertex 47.5 55 33
vertex 50 55 30
endloop
endfacet
facet normal -0 -0.5 -0.9
outer loop
vertex 50 52.5 34
vertex 47.5 52.5 34
vertex 50 55 33
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex 50 55 30
vertex 47.5 55 33
vertex 47.5 55 30
endloop
endfacet
facet normal 0 -0.5 -0.9
outer loop
vertex 47.5 55 33
vertex 50 55 33
vertex 47.5 52.5 34
endloop
endfacet
facet normal 0 0.5 0.9
outer loop
vertex 47.5 -52.5 134
vertex 50 -55 135
vertex 50 -52.5 134
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 50 -55 135
vertex 47.5 -55 135
vertex 50 -55 138
endloop
endfacet
facet normal -0 0.5 0.9
outer loop
vertex 47.5 -52.5 134
vertex 47.5 -55 135
vertex 50 -55 135
endloop
endfacet
facet normal -0 1 0
outer loop
vertex 47.5 -55 138
vertex 50 -55 138
vertex 47.5 -55 135
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex 47.5 -50 135
vertex 50 -52.5 134
vertex 50 -50 135
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 47.5 -50 138
vertex 50 -50 135
vertex 50 -50 138
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex 47.5 -50 135
vertex 47.5 -52.5 134
vertex 50 -52.5 134
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 47.5 -50 138
vertex 47.5 -50 135
vertex 50 -50 135
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex 50 -55 138
vertex 47.5 -55 138
vertex 50 -52.5 139
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex 47.5 -55 138
vertex 47.5 -52.5 139
vertex 50 -52.5 139
endloop
endfacet
facet normal -0 -0.5 -0.9
outer loop
vertex 50 -52.5 139
vertex 47.5 -52.5 139
vertex 50 -50 138
endloop
endfacet
facet normal 0 -0.5 -0.9
outer loop
vertex 47.5 -50 138
vertex 50 -50 138
vertex 47.5 -52.5 139
endloop
endfacet
facet normal 0 0.5 0.9
outer loop
vertex 50 50 135
vertex 50 52.5 134
vertex 47.5 52.5 134
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 50 50 135
vertex 47.5 50 135
vertex 50 50 138
endloop
endfacet
facet normal -0 0.5 0.9
outer loop
vertex 47.5 52.5 134
vertex 47.5 50 135
vertex 50 50 135
endloop
endfacet
facet normal -0 0.5 0.9
outer loop
vertex 47.5 52.5 134
vertex 50 50 135
vertex 47.5 52.5 134
endloop
endfacet
facet normal -0 1 0
outer loop
vertex 47.5 50 138
vertex 50 50 138
vertex 47.5 50 135
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex 50 52.5 134
vertex 50 55 135
vertex 47.5 55 135
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex 50 55 138
vertex 47.5 55 138
vertex 50 55 135
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex 47.5 53 134
vertex 47.5 52.5 134
vertex 50 52.5 134
endloop
endfacet
facet normal -0 -0.5 0.9
outer loop
vertex 47.5 53 134
vertex 50 52.5 134
vertex 47.5 53.5 134.5
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex 47.5 53.5 134.5
vertex 50 52.5 134
vertex 47.5 55 135
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex 50 55 135
vertex 47.5 55 138
vertex 47.5 55 135
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex 50 50 138
vertex 47.5 50 138
vertex 50 52.5 139
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex 47.5 50 138
vertex 47.5 52.5 139
vertex 50 52.5 139
endloop
endfacet
facet normal -0 -0.5 -0.9
outer loop
vertex 50 52.5 139
vertex 47.5 52.5 139
vertex 50 55 138
endloop
endfacet
facet normal 0 -0.5 -0.9
outer loop
vertex 47.5 53 139
vertex 47.5 55 138
vertex 50 55 138
endloop
endfacet
facet normal 0 -0.5 -0.9
outer loop
vertex 47.5 52.5 139
vertex 50 55 138
vertex 47.5 52.5 139
endloop
endfacet
facet normal -0 -0.5 -0.9
outer loop
vertex 47.5 52.5 139
vertex 47.5 53 139
vertex 50 55 138
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -53 29
vertex 47.5 -52.5 29
vertex 47.5 -52.5 24
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -52.5 29
vertex 47.5 -52.5 29
vertex 47.5 -52.5 24
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -52.5 29
vertex 47.5 -52 29
vertex 47.5 -52.5 24
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -52.5 24
vertex 47.5 -52 29
vertex 47.5 -42 24.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 -52 29
vertex 47.5 -42 24.5
vertex 47.5 -52 29
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -52 29
vertex 47.5 -44 33
vertex 47.5 -42 24.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -53 36
vertex 47.5 -52.5 37.5
vertex 47.5 -52.5 34.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -53.5 35.5
vertex 47.5 -55 63.5
vertex 47.5 -53 36
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -53 36
vertex 47.5 -55 63.5
vertex 47.5 -52.5 37.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -52.5 34.5
vertex 47.5 -45.5 48.5
vertex 47.5 -52.5 34
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -42 24.5
vertex 47.5 -44 33
vertex 47.5 -45.5 48.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 -45 39.5
vertex 47.5 -52.5 34
vertex 47.5 -45.5 48.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -44 33
vertex 47.5 -45 39.5
vertex 47.5 -45.5 48.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -46.5 49.5
vertex 47.5 -45.5 48.5
vertex 47.5 -52.5 34.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -55.5 68
vertex 47.5 -55 63.5
vertex 47.5 -53.5 35.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 -55 65.5
vertex 47.5 -52.5 37.5
vertex 47.5 -55 63.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -56 70.5
vertex 47.5 -55.5 68
vertex 47.5 -53.5 35.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 -51 83
vertex 47.5 -56.5 83
vertex 47.5 -51 85
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 8.5 64.5
vertex 47.5 -13.5 92.5
vertex 47.5 -5.5 88.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 19.5 63.5
vertex 47.5 10 73
vertex 47.5 -29.5 112.5
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 22 -60.5 23.5
vertex 23 -60.5 23.5
vertex 22 60.5 23.5
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 23 -60.5 23.5
vertex 22 -60.5 23.5
vertex 23 -60.5 144.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 37 29
vertex 47.5 38 29
vertex 47.5 40.5 24.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 38 29
vertex 47.5 51 29
vertex 47.5 40.5 24.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 51 29
vertex 47.5 60.5 23.5
vertex 47.5 40.5 24.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 38 29
vertex 47.5 50 30
vertex 47.5 51 29
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 51 29
vertex 47.5 60 23.5
vertex 47.5 60.5 23.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 38 29
vertex 47.5 42.5 33.5
vertex 47.5 50 30
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 37 40
vertex 47.5 40 42.5
vertex 47.5 42.5 33.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 42.5 33.5
vertex 47.5 40 42.5
vertex 47.5 50 30
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 54.5 64.5
vertex 47.5 60.5 23.5
vertex 47.5 60 23.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 9.5 63.5
vertex 47.5 13.5 67
vertex 47.5 10 63.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 9.5 63.5
vertex 47.5 8.5 64.5
vertex 47.5 13.5 67
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 29.5 55.5
vertex 47.5 38.5 44.5
vertex 47.5 32 52
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 28 57
vertex 47.5 29.5 55.5
vertex 47.5 32 52
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 5.5 79.5
vertex 47.5 32 52
vertex 47.5 38.5 44.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 8.5 64.5
vertex 47.5 10 73
vertex 47.5 13.5 67
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 13.5 67
vertex 47.5 10 73
vertex 47.5 15 67.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 5.5 79.5
vertex 47.5 38.5 44.5
vertex 47.5 -8 92.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 19.5 63.5
vertex 47.5 -29.5 112.5
vertex 47.5 38.5 44.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 8.5 64.5
vertex 47.5 -5.5 88.5
vertex 47.5 10 73
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 38.5 44.5
vertex 47.5 -19.5 104.5
vertex 47.5 -8 92.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 5.5 79.5
vertex 47.5 -6 100.5
vertex 47.5 16 72
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 17.5 71
vertex 47.5 17 70.5
vertex 47.5 -6 100.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 16 72
vertex 47.5 -6 100.5
vertex 47.5 17 70.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 60 23.5
vertex 47.5 54 64
vertex 47.5 54.5 64.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 57 76.5
vertex 47.5 59.5 41
vertex 47.5 60 35
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 57 76.5
vertex 47.5 57 78.5
vertex 47.5 59.5 41
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 57 83
vertex 47.5 51 83
vertex 47.5 56.5 85
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 22 60.5 23.5
vertex 23 -60.5 23.5
vertex 23 60.5 23.5
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex 23 60.5 23.5
vertex 22 60.5 144.5
vertex 22 60.5 23.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 -57 85
vertex 47.5 -51 85
vertex 47.5 -56.5 83
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -57 89.5
vertex 47.5 -60.5 138
vertex 47.5 -57 91.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 -54 104
vertex 47.5 -54.5 103.5
vertex 47.5 -60 144.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -18 97.5
vertex 47.5 -17.5 98
vertex 47.5 8.5 64.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 8.5 64.5
vertex 47.5 -17.5 98
vertex 47.5 -13.5 92.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -29.5 112.5
vertex 47.5 -19.5 104.5
vertex 47.5 38.5 44.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -5.5 88.5
vertex 47.5 -29.5 112.5
vertex 47.5 10 73
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -8 92.5
vertex 47.5 -6 100.5
vertex 47.5 5.5 79.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -14.5 100.5
vertex 47.5 -12.5 100.5
vertex 47.5 -8 92.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -8 92.5
vertex 47.5 -12.5 100.5
vertex 47.5 -6 100.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -12.5 100.5
vertex 47.5 -9.5 103.5
vertex 47.5 -6 100.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -28 111
vertex 47.5 -29.5 112.5
vertex 47.5 -5.5 88.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 -19.5 104.5
vertex 47.5 -19.5 104.5
vertex 47.5 -29.5 112.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 -38.5 123.5
vertex 47.5 -19.5 104.5
vertex 47.5 -29.5 112.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -10 104.5
vertex 47.5 -9.5 104.5
vertex 47.5 -9.5 103.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 -9.5 104.5
vertex 47.5 -6 100.5
vertex 47.5 -9.5 103.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -57 91.5
vertex 47.5 -60.5 138
vertex 47.5 -60.5 139.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -54.5 103.5
vertex 47.5 -60.5 144.5
vertex 47.5 -60 144.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -47 134.5
vertex 47.5 -49.5 138
vertex 47.5 -42.5 134.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -47 134.5
vertex 47.5 -42.5 134.5
vertex 47.5 -41 132.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 -37 138.5
vertex 47.5 -42.5 134.5
vertex 47.5 -49.5 138
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 -60.5 144.5
vertex 47.5 -51 139
vertex 47.5 -60 144.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -49.5 138
vertex 47.5 -51 139
vertex 47.5 -41 144.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -51 139
vertex 47.5 -60.5 144.5
vertex 47.5 -41 144.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -49.5 138
vertex 47.5 -41 144.5
vertex 47.5 -37 138.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 -37 138.5
vertex 47.5 -41 144.5
vertex 47.5 -36.5 138.5
endloop
endfacet
facet normal 0 1 0
outer loop
vertex 22 -60.5 23.5
vertex 22 -60.5 144.5
vertex 23 -60.5 144.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 -60.5 144.5
vertex 23 60.5 144.5
vertex 23 -60.5 144.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 -60.5 144.5
vertex 22 -42 144.5
vertex 23 60.5 144.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 51 85
vertex 47.5 56.5 85
vertex 47.5 51 83
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 55.5 100
vertex 47.5 55.5 102.5
vertex 47.5 56 97.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 47.5 53 134
vertex 47.5 56 97.5
vertex 47.5 55.5 102.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 44.5 127
vertex 47.5 44 135
vertex 47.5 45 128.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 45 127.5
vertex 47.5 44.5 127
vertex 47.5 52.5 134
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 52.5 134
vertex 47.5 44.5 127
vertex 47.5 45 128.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 45 127.5
vertex 47.5 52.5 134
vertex 47.5 52.5 133.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 44.5 127
vertex 47.5 42 144.5
vertex 47.5 44 135
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 53 134
vertex 47.5 53.5 134.5
vertex 47.5 56 97.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex 47.5 52 139
vertex 47.5 44 135
vertex 47.5 42 144.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 47.5 42 144.5
vertex 47.5 52.5 139
vertex 47.5 52 139
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 42 144.5
vertex 47.5 52.5 144.5
vertex 47.5 52.5 139
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 52.5 139
vertex 47.5 52.5 139
vertex 47.5 52.5 144.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 47.5 52.5 139
vertex 47.5 52.5 144.5
vertex 47.5 53 139
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 22 60.5 144.5
vertex 23 60.5 23.5
vertex 23 60.5 144.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 22 -42 144.5
vertex 22 60.5 144.5
vertex 23 60.5 144.5
endloop
endfacet
facet normal 0 0.7 0.7
outer loop
vertex 50 -34 37
vertex 47.5 -34 37
vertex 50 -40 43
endloop
endfacet
facet normal 0 0.7 0.7
outer loop
vertex 47.5 -45.5 48.5
vertex 50 -47 50
vertex 47.5 -41 44
endloop
endfacet
facet normal -0 0.7 0.7
outer loop
vertex 47.5 -40 43
vertex 50 -40 43
vertex 47.5 -34 37
endloop
endfacet
facet normal 0 0.7 0.7
outer loop
vertex 50 -47 50
vertex 50 -41 44
vertex 47.5 -41 44
endloop
endfacet
facet normal -0 0.2 1
outer loop
vertex 47.5 -18 29
vertex 50 -18 29
vertex 47.5 -1 26
endloop
endfacet
facet normal 0 0.2 1
outer loop
vertex 50 -18 29
vertex 50 -1 26
vertex 47.5 -1 26
endloop
endfacet
facet normal -0 0.5 0.9
outer loop
vertex 47.5 -34 37
vertex 50 -34 37
vertex 47.5 -18 29
endloop
endfacet
facet normal 0 0.5 0.9
outer loop
vertex 50 -18 29
vertex 47.5 -18 29
vertex 50 -34 37
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 47.5 -1 26
vertex 50 -1 26
vertex 47.5 -1 61
endloop
endfacet
facet normal -0 0.9 0.5
outer loop
vertex 47.5 -55 65.5
vertex 50 -55 66
vertex 47.5 -47 50
endloop
endfacet
facet normal -0 0.9 0.5
outer loop
vertex 47.5 -55 65.5
vertex 47.5 -55 66
vertex 50 -55 66
endloop
endfacet
facet normal -0 0.7 0.7
outer loop
vertex 47.5 -46.5 49.5
vertex 50 -47 50
vertex 47.5 -45.5 48.5
endloop
endfacet
facet normal -0 0.7 0.7
outer loop
vertex 47.5 -46.5 49.5
vertex 47.5 -47 50
vertex 50 -47 50
endloop
endfacet
facet normal 0 0.9 0.5
outer loop
vertex 50 -47 50
vertex 47.5 -47 50
vertex 50 -55 66
endloop
endfacet
facet normal 0 1 0.2
outer loop
vertex 50 -55 66
vertex 47.5 -55 66
vertex 50 -58 83
endloop
endfacet
facet normal 0 1 0.2
outer loop
vertex 47.5 -55.5 68
vertex 50 -58 83
vertex 47.5 -55 66
endloop
endfacet
facet normal 0 1 0.2
outer loop
vertex 47.5 -56 70.5
vertex 50 -58 83
vertex 47.5 -55.5 68
endloop
endfacet
facet normal -0 1 0.2
outer loop
vertex 47.5 -56 70.5
vertex 47.5 -58 83
vertex 50 -58 83
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 50 -58 83
vertex 47.5 -58 83
vertex 50 -23 83
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 47.5 -56.5 83
vertex 50 -23 83
vertex 47.5 -58 83
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 47.5 -56.5 83
vertex 47.5 -51 83
vertex 50 -23 83
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex 50 -40 43
vertex 47.5 -40 43
vertex 50 -15 67.5
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex 47.5 -41 44
vertex 50 -41 44
vertex 47.5 -16.5 69
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex 50 -41 44
vertex 50 -16.5 69
vertex 47.5 -16.5 69
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex 47.5 -15 67.5
vertex 50 -15 67.5
vertex 47.5 -40 43
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 50 -1 26
vertex 50 -1 61
vertex 47.5 -1 61
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex 50 -11.5 64
vertex 47.5 -15 67.5
vertex 47.5 -11.5 64
endloop
endfacet
facet normal -0 -0.3 -1
outer loop
vertex 50 -11.5 64
vertex 47.5 -11.5 64
vertex 50 -1 61
endloop
endfacet
facet normal 0 -0.3 -1
outer loop
vertex 47.5 -1 61
vertex 50 -1 61
vertex 47.5 -11.5 64
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex 50 -16.5 69
vertex 47.5 -20 72.5
vertex 47.5 -16.5 69
endloop
endfacet
facet normal -0 -0.7 -0.7
outer loop
vertex 50 -20 72.5
vertex 47.5 -20 72.5
vertex 50 -16.5 69
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 47.5 -51 83
vertex 47.5 -23 83
vertex 50 -23 83
endloop
endfacet
facet normal 0 -1 -0.3
outer loop
vertex 47.5 -20 72.5
vertex 50 -20 72.5
vertex 47.5 -23 83
endloop
endfacet
facet normal -0 -1 -0.3
outer loop
vertex 50 -23 83
vertex 47.5 -23 83
vertex 50 -20 72.5
endloop
endfacet
facet normal -0 -0.7 -0.7
outer loop
vertex 50 -15 67.5
vertex 47.5 -15 67.5
vertex 50 -11.5 64
endloop
endfacet
facet normal 0 -0.2 1
outer loop
vertex 50 1 26
vertex 47.5 18 29
vertex 47.5 1 26
endloop
endfacet
facet normal 0 -0.2 1
outer loop
vertex 50 1 26
vertex 50 18 29
vertex 47.5 18 29
endloop
endfacet
facet normal 0 1 0
outer loop
vertex 50 1 61
vertex 50 1 26
vertex 47.5 1 26
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex 47.5 34 37
vertex 47.5 18 29
vertex 50 18 29
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex 50 18 29
vertex 50 34 37
vertex 47.5 34 37
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex 47.5 37 40
vertex 47.5 34 37
vertex 50 34 37
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex 50 40 43
vertex 47.5 40 43
vertex 50 34 37
endloop
endfacet
facet normal -0 -0.7 0.7
outer loop
vertex 47.5 37 40
vertex 50 34 37
vertex 47.5 40 42.5
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex 47.5 40 42.5
vertex 50 34 37
vertex 47.5 40 43
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex 47.5 38.5 44.5
vertex 47.5 40 43
vertex 50 40 43
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex 50 47 50
vertex 47.5 41 44
vertex 50 41 44
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex 47.5 41 44
vertex 50 47 50
vertex 47.5 47 50
endloop
endfacet
facet normal -0 1 0
outer loop
vertex 47.5 1 61
vertex 50 1 61
vertex 47.5 1 26
endloop
endfacet
facet normal 0 0.3 -1
outer loop
vertex 50 1 61
vertex 47.5 1 61
vertex 50 11.5 64
endloop
endfacet
facet normal 0 0.3 -1
outer loop
vertex 47.5 9.5 63.5
vertex 50 11.5 64
vertex 47.5 1 61
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex 50 11.5 64
vertex 47.5 11.5 64
vertex 50 15 67.5
endloop
endfacet
facet normal -0 0.3 -1
outer loop
vertex 47.5 9.5 63.5
vertex 47.5 10 63.5
vertex 50 11.5 64
endloop
endfacet
facet normal 0 0.3 -1
outer loop
vertex 47.5 10 63.5
vertex 47.5 11.5 64
vertex 50 11.5 64
endloop
endfacet
facet normal 0 0.7 0.7
outer loop
vertex 50 41 44
vertex 47.5 41 44
vertex 50 16.5 69
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex 47.5 19.5 63.5
vertex 47.5 38.5 44.5
vertex 50 40 43
endloop
endfacet
facet normal 0 0.7 0.7
outer loop
vertex 47.5 29.5 55.5
vertex 50 16.5 69
vertex 47.5 41 44
endloop
endfacet
facet normal -0 -0.7 -0.7
outer loop
vertex 50 15 67.5
vertex 47.5 15 67.5
vertex 50 40 43
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex 47.5 19.5 63.5
vertex 50 40 43
vertex 47.5 15 67.5
endloop
endfacet
facet normal 0 0.7 0.7
outer loop
vertex 47.5 28 57
vertex 50 16.5 69
vertex 47.5 29.5 55.5
endloop
endfacet
facet normal -0 0.7 0.7
outer loop
vertex 47.5 28 57
vertex 47.5 16.5 69
vertex 50 16.5 69
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex 47.5 11.5 64
vertex 47.5 15 67.5
vertex 50 15 67.5
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex 50 16.5 69
vertex 47.5 16.5 69
vertex 50 20 72.5
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex 47.5 16.5 69
vertex 47.5 20 72.5
vertex 50 20 72.5
endloop
endfacet
facet normal 0 1 -0.3
outer loop
vertex 50 20 72.5
vertex 47.5 20 72.5
vertex 50 23 83
endloop
endfacet
facet normal 0 1 -0.3
outer loop
vertex 47.5 23 83
vertex 50 23 83
vertex 47.5 20 72.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 50 23 83
vertex 47.5 23 83
vertex 50 58 83
endloop
endfacet
facet normal 0 -0.9 0.5
outer loop
vertex 47.5 54 64
vertex 47.5 47 50
vertex 50 47 50
endloop
endfacet
facet normal 0 -0.9 0.5
outer loop
vertex 47.5 54 64
vertex 50 47 50
vertex 47.5 54.5 64.5
endloop
endfacet
facet normal 0 -0.9 0.5
outer loop
vertex 50 47 50
vertex 50 55 66
vertex 47.5 55 66
endloop
endfacet
facet normal -0 -0.9 0.5
outer loop
vertex 47.5 54.5 64.5
vertex 50 47 50
vertex 47.5 55 66
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 47.5 51 83
vertex 50 58 83
vertex 47.5 23 83
endloop
endfacet
facet normal 0 -1 0.2
outer loop
vertex 47.5 57 76.5
vertex 47.5 55 66
vertex 50 55 66
endloop
endfacet
facet normal 0 -1 0.2
outer loop
vertex 47.5 57 76.5
vertex 50 55 66
vertex 47.5 57 78.5
endloop
endfacet
facet normal 0 -1 0.2
outer loop
vertex 50 58 83
vertex 47.5 58 83
vertex 50 55 66
endloop
endfacet
facet normal -0 -1 0.2
outer loop
vertex 47.5 57 78.5
vertex 50 55 66
vertex 47.5 58 83
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 47.5 51 83
vertex 47.5 57 83
vertex 50 58 83
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 47.5 57 83
vertex 47.5 58 83
vertex 50 58 83
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 47.5 -57 85
vertex 47.5 -58 85
vertex 50 -58 85
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex 47.5 -57 85
vertex 50 -58 85
vertex 47.5 -51 85
endloop
endfacet
facet normal 0 1 -0.2
outer loop
vertex 50 -58 85
vertex 47.5 -58 85
vertex 50 -55 102
endloop
endfacet
facet normal 0 1 -0.2
outer loop
vertex 47.5 -57 89.5
vertex 50 -55 102
vertex 47.5 -58 85
endloop
endfacet
facet normal 0 1 -0.2
outer loop
vertex 47.5 -57 89.5
vertex 47.5 -57 91.5
vertex 50 -55 102
endloop
endfacet
facet normal 0 1 -0.2
outer loop
vertex 47.5 -57 91.5
vertex 47.5 -55 102
vertex 50 -55 102
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex 47.5 -51 85
vertex 50 -58 85
vertex 47.5 -23 85
endloop
endfacet
facet normal 0 0.9 -0.5
outer loop
vertex 50 -55 102
vertex 47.5 -55 102
vertex 50 -47 118
endloop
endfacet
facet normal -0 0.9 -0.5
outer loop
vertex 47.5 -54.5 103.5
vertex 50 -47 118
vertex 47.5 -55 102
endloop
endfacet
facet normal 0 0.9 -0.5
outer loop
vertex 47.5 -54.5 103.5
vertex 47.5 -54 104
vertex 50 -47 118
endloop
endfacet
facet normal 0 0.9 -0.5
outer loop
vertex 47.5 -54 104
vertex 47.5 -47 118
vertex 50 -47 118
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 50 -58 85
vertex 50 -23 85
vertex 47.5 -23 85
endloop
endfacet
facet normal 0 -1 0.3
outer loop
vertex 47.5 -23 85
vertex 50 -23 85
vertex 47.5 -20 95.5
endloop
endfacet
facet normal 0 -1 0.3
outer loop
vertex 50 -23 85
vertex 50 -20 95.5
vertex 47.5 -20 95.5
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex 47.5 -18 97.5
vertex 47.5 -20 95.5
vertex 50 -20 95.5
endloop
endfacet
facet normal -0 -0.7 0.7
outer loop
vertex 47.5 -18 97.5
vertex 50 -20 95.5
vertex 47.5 -17.5 98
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex 50 -20 95.5
vertex 50 -16.5 99
vertex 47.5 -16.5 99
endloop
endfacet
facet normal -0 -0.7 0.7
outer loop
vertex 47.5 -17.5 98
vertex 50 -20 95.5
vertex 47.5 -16.5 99
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex 47.5 -11.5 104
vertex 47.5 -15 100.5
vertex 50 -15 100.5
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex 47.5 -28 111
vertex 47.5 -16.5 99
vertex 50 -16.5 99
endloop
endfacet
facet normal 0 0.7 0.7
outer loop
vertex 50 -15 100.5
vertex 47.5 -15 100.5
vertex 50 -40 125
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex 47.5 -29.5 112.5
vertex 47.5 -28 111
vertex 50 -16.5 99
endloop
endfacet
facet normal 0 0.7 0.7
outer loop
vertex 47.5 -19.5 104.5
vertex 50 -40 125
vertex 47.5 -15 100.5
endloop
endfacet
facet normal -0 -0.7 -0.7
outer loop
vertex 47.5 -29.5 112.5
vertex 50 -16.5 99
vertex 47.5 -41 124
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex 47.5 -41 124
vertex 50 -16.5 99
vertex 50 -41 124
endloop
endfacet
facet normal -0 0.7 0.7
outer loop
vertex 47.5 -38.5 123.5
vertex 50 -40 125
vertex 47.5 -19.5 104.5
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex 47.5 -11.5 104
vertex 50 -15 100.5
vertex 50 -11.5 104
endloop
endfacet
facet normal 0 -0.3 1
outer loop
vertex 47.5 -10 104.5
vertex 47.5 -11.5 104
vertex 50 -11.5 104
endloop
endfacet
facet normal 0 -0.3 1
outer loop
vertex 47.5 -10 104.5
vertex 50 -11.5 104
vertex 47.5 -9.5 104.5
endloop
endfacet
facet normal 0 -0.3 1
outer loop
vertex 50 -11.5 104
vertex 50 -1 107
vertex 47.5 -1 107
endloop
endfacet
facet normal 0 -0.3 1
outer loop
vertex 47.5 -9.5 104.5
vertex 50 -11.5 104
vertex 47.5 -1 107
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 47.5 -1 107
vertex 50 -1 107
vertex 47.5 -1 142
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex 47.5 -41 124
vertex 50 -47 118
vertex 47.5 -47 118
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex 50 -47 118
vertex 47.5 -41 124
vertex 50 -41 124
endloop
endfacet
facet normal -0 0.7 0.7
outer loop
vertex 47.5 -38.5 123.5
vertex 47.5 -40 125
vertex 50 -40 125
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex 50 -40 125
vertex 47.5 -40 125
vertex 50 -34 131
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex 47.5 -40 125
vertex 47.5 -34 131
vertex 50 -34 131
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex 50 -34 131
vertex 47.5 -34 131
vertex 50 -18 139
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex 47.5 -34 131
vertex 47.5 -18 139
vertex 50 -18 139
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 50 -1 107
vertex 50 -1 142
vertex 47.5 -1 142
endloop
endfacet
facet normal 0 0.2 -1
outer loop
vertex 50 -18 139
vertex 47.5 -18 139
vertex 50 -1 142
endloop
endfacet
facet normal 0 0.2 -1
outer loop
vertex 47.5 -1 142
vertex 50 -1 142
vertex 47.5 -18 139
endloop
endfacet
facet normal 0 0.7 0.7
outer loop
vertex 50 11.5 104
vertex 50 15 100.5
vertex 47.5 15 100.5
endloop
endfacet
facet normal 0 1 0.3
outer loop
vertex 47.5 20 95.5
vertex 50 23 85
vertex 47.5 23 85
endloop
endfacet
facet normal 0 1 0.3
outer loop
vertex 50 20 95.5
vertex 50 23 85
vertex 47.5 20 95.5
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 47.5 51 85
vertex 47.5 23 85
vertex 50 23 85
endloop
endfacet
facet normal 0 0.7 0.7
outer loop
vertex 50 20 95.5
vertex 47.5 20 95.5
vertex 50 16.5 99
endloop
endfacet
facet normal -0 0.7 0.7
outer loop
vertex 47.5 16.5 99
vertex 50 16.5 99
vertex 47.5 20 95.5
endloop
endfacet
facet normal 0 0.3 1
outer loop
vertex 50 1 107
vertex 50 11.5 104
vertex 47.5 11.5 104
endloop
endfacet
facet normal -0 0.3 1
outer loop
vertex 47.5 1 107
vertex 50 1 107
vertex 47.5 11.5 104
endloop
endfacet
facet normal -0 0.7 0.7
outer loop
vertex 47.5 11.5 104
vertex 50 11.5 104
vertex 47.5 15 100.5
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 50 1 107
vertex 47.5 1 107
vertex 50 1 142
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex 50 16.5 99
vertex 47.5 16.5 99
vertex 50 41 124
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex 47.5 15 100.5
vertex 50 15 100.5
vertex 47.5 40 125
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex 50 15 100.5
vertex 50 40 125
vertex 47.5 40 125
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex 47.5 41 124
vertex 50 41 124
vertex 47.5 16.5 99
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 50 23 85
vertex 50 58 85
vertex 47.5 58 85
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex 47.5 51 85
vertex 50 23 85
vertex 47.5 56.5 85
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex 47.5 56.5 85
vertex 50 23 85
vertex 47.5 58 85
endloop
endfacet
facet normal 0 -1 -0.2
outer loop
vertex 47.5 56 97.5
vertex 47.5 58 85
vertex 50 58 85
endloop
endfacet
facet normal -0 -1 -0.2
outer loop
vertex 50 58 85
vertex 50 55 102
vertex 47.5 55 102
endloop
endfacet
facet normal 0 -1 -0.2
outer loop
vertex 47.5 55.5 100
vertex 47.5 56 97.5
vertex 50 58 85
endloop
endfacet
facet normal 0 -1 -0.2
outer loop
vertex 47.5 55.5 100
vertex 50 58 85
vertex 47.5 55 102
endloop
endfacet
facet normal -0 -0.9 -0.5
outer loop
vertex 50 55 102
vertex 50 47 118
vertex 47.5 47 118
endloop
endfacet
facet normal 0 -0.9 -0.5
outer loop
vertex 47.5 47 118
vertex 47.5 55 102
vertex 50 55 102
endloop
endfacet
facet normal -0 1 0
outer loop
vertex 47.5 1 142
vertex 50 1 142
vertex 47.5 1 107
endloop
endfacet
facet normal -0 -0.5 -0.9
outer loop
vertex 50 18 139
vertex 47.5 18 139
vertex 50 34 131
endloop
endfacet
facet normal 0 -0.5 -0.9
outer loop
vertex 47.5 34 131
vertex 50 34 131
vertex 47.5 18 139
endloop
endfacet
facet normal -0 -0.2 -1
outer loop
vertex 50 1 142
vertex 47.5 1 142
vertex 50 18 139
endloop
endfacet
facet normal 0 -0.2 -1
outer loop
vertex 47.5 18 139
vertex 50 18 139
vertex 47.5 1 142
endloop
endfacet
facet normal -0 -0.7 -0.7
outer loop
vertex 50 41 124
vertex 47.5 41 124
vertex 50 47 118
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex 47.5 40 125
vertex 50 40 125
vertex 47.5 34 131
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex 47.5 41 124
vertex 47.5 47 118
vertex 50 47 118
endloop
endfacet
facet normal -0 -0.7 -0.7
outer loop
vertex 50 34 131
vertex 47.5 34 131
vertex 50 40 125
endloop
endfacet
facet normal -0.9 0 0.4
outer loop
vertex 40 67 36.5
vertex 41.5 69.5 39
vertex 40 69.5 36.5
endloop
endfacet
facet normal -0.9 0 0.4
outer loop
vertex 40 67 36.5
vertex 41.5 67 39
vertex 41.5 69.5 39
endloop
endfacet
facet normal -0.4 0 0.9
outer loop
vertex 40 67 36.5
vertex 40 69.5 36.5
vertex 37.5 67 35
endloop
endfacet
facet normal -0.4 0 0.9
outer loop
vertex 37.5 67 35
vertex 40 69.5 36.5
vertex 37.5 69.5 35
endloop
endfacet
facet normal -0.9 0 -0.4
outer loop
vertex 41.5 67 39
vertex 40 69.5 41.5
vertex 41.5 69.5 39
endloop
endfacet
facet normal -0.9 0 -0.4
outer loop
vertex 41.5 67 39
vertex 40 67 41.5
vertex 40 69.5 41.5
endloop
endfacet
facet normal -0.4 0 -0.9
outer loop
vertex 40 67 41.5
vertex 37.5 69.5 43
vertex 40 69.5 41.5
endloop
endfacet
facet normal -0.4 0 -0.9
outer loop
vertex 40 67 41.5
vertex 37.5 67 43
vertex 37.5 69.5 43
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 37.5 67 35
vertex 37.5 69.5 35
vertex 32 67 35
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 32 67 35
vertex 37.5 69.5 35
vertex 32 69.5 35
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 37.5 67 43
vertex 32 69.5 43
vertex 37.5 69.5 43
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 32 69.5 43
vertex 37.5 67 43
vertex 32 67 43
endloop
endfacet
facet normal 0.4 -0 0.9
outer loop
vertex 31.5 67 35.5
vertex 32 67 35
vertex 32 69.5 35
endloop
endfacet
facet normal 0.4 -0 0.9
outer loop
vertex 31.5 67 35.5
vertex 32 69.5 35
vertex 29.5 65.5 36.5
endloop
endfacet
facet normal 0.4 0 0.9
outer loop
vertex 32 69.5 35
vertex 29.5 69.5 36.5
vertex 29.5 65.5 36.5
endloop
endfacet
facet normal 0.9 -0 0.4
outer loop
vertex 29.5 65.5 36.5
vertex 29.5 69.5 36.5
vertex 28.5 64.5 39
endloop
endfacet
facet normal 0.4 0 -0.9
outer loop
vertex 31.5 67 42.5
vertex 32 69.5 43
vertex 32 67 43
endloop
endfacet
facet normal 0.4 -0 -0.9
outer loop
vertex 31.5 67 42.5
vertex 29.5 69.5 41.5
vertex 32 69.5 43
endloop
endfacet
facet normal 0.4 0 -0.9
outer loop
vertex 31.5 67 42.5
vertex 29.5 65.5 41.5
vertex 29.5 69.5 41.5
endloop
endfacet
facet normal 0.9 0 -0.4
outer loop
vertex 28.5 69.5 39
vertex 29.5 69.5 41.5
vertex 29.5 65.5 41.5
endloop
endfacet
facet normal 0.9 0 0.4
outer loop
vertex 29.5 69.5 36.5
vertex 28.5 69.5 39
vertex 28.5 64.5 39
endloop
endfacet
facet normal 0.9 0 -0.4
outer loop
vertex 28.5 69.5 39
vertex 29.5 65.5 41.5
vertex 28.5 64.5 39
endloop
endfacet
facet normal -0.7 -0.3 0.7
outer loop
vertex -50 -65.5 151
vertex -48 -61.5 155
vertex -50 -61.5 153
endloop
endfacet
facet normal -0.7 -0.3 0.7
outer loop
vertex -50 -65.5 151
vertex -48 -67 152.5
vertex -48 -61.5 155
endloop
endfacet
facet normal -0.7 -0.7 0.3
outer loop
vertex -50 -65.5 151
vertex -50 -67.5 147
vertex -48 -69.5 147
endloop
endfacet
facet normal -0.7 -0.7 0.3
outer loop
vertex -50 -65.5 151
vertex -48 -69.5 147
vertex -48 -67 152.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -65.5 151
vertex -50 -61.5 153
vertex -50 -67.5 147
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 -61.5 153
vertex -50 -55 138
vertex -50 -55 135
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -61.5 153
vertex -50 -52.5 139
vertex -50 -55 138
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -61.5 153
vertex -50 -18 139
vertex -50 -52.5 139
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -61.5 153
vertex -50 -55 135
vertex -50 -55 102
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 -52.5 134
vertex -50 -55 102
vertex -50 -55 135
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex -50 -52.5 139
vertex -50 -34 131
vertex -50 -50 138
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 -52.5 134
vertex -50 -50 135
vertex -50 -47 118
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex -50 -50 138
vertex -50 -41 124
vertex -50 -50 135
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -50 138
vertex -50 -40 125
vertex -50 -41 124
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -52.5 139
vertex -50 -18 139
vertex -50 -34 131
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -50 138
vertex -50 -34 131
vertex -50 -40 125
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -50 135
vertex -50 -41 124
vertex -50 -47 118
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex -48 -67 152.5
vertex -22 -67 152.5
vertex -48 -61.5 155
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex -48 -67 152.5
vertex -48 -69.5 147
vertex -22 -69.5 147
endloop
endfacet
facet normal -0.7 0 0.7
outer loop
vertex -50 -61.5 153
vertex -48 -61.5 155
vertex -48 61.5 155
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -61.5 153
vertex -50 -1 142
vertex -50 -18 139
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex -50 -61.5 153
vertex -50 1 142
vertex -50 -1 142
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -61.5 153
vertex -50 -55 102
vertex -50 -58 85
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 -61.5 153
vertex -50 -67.5 21
vertex -50 -67.5 147
endloop
endfacet
facet normal -0.7 -0.7 0
outer loop
vertex -50 -67.5 147
vertex -48 -69.5 21
vertex -48 -69.5 147
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 -61.5 153
vertex -50 -58 85
vertex -50 -58 83
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -52.5 134
vertex -50 -47 118
vertex -50 -55 102
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -61.5 153
vertex -50 -58 83
vertex -50 -67.5 21
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -58 85
vertex -50 -23 85
vertex -50 -58 83
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex -50 -40 125
vertex -50 -15 100.5
vertex -50 -41 124
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -41 124
vertex -50 -15 100.5
vertex -50 -16.5 99
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex -50 -1 142
vertex -50 1 107
vertex -50 -1 107
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 -15 100.5
vertex -50 -11.5 104
vertex -50 -1 107
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -15 100.5
vertex -50 -1 107
vertex -50 -16.5 99
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -23 85
vertex -50 -20 95.5
vertex -50 -23 83
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 -1 107
vertex -50 -20 95.5
vertex -50 -16.5 99
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 -1 107
vertex -50 -23 83
vertex -50 -20 95.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 1 107
vertex -50 -23 83
vertex -50 -1 107
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 1 107
vertex -50 11.5 104
vertex -50 -23 83
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 16.5 99
vertex -50 -20 72.5
vertex -50 -23 83
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex -48 -67 152.5
vertex -22 -69.5 147
vertex -22 -67 152.5
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex -48 -61.5 155
vertex -22 -67 152.5
vertex -22 -61.5 155
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -48 -61.5 155
vertex -22 -61.5 155
vertex -22 -51.5 155
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -48 -61.5 155
vertex -22 -51.5 155
vertex -22 -44 155
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -48 -69.5 147
vertex -22 -69.5 128
vertex -22 -69.5 147
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -48 -61.5 155
vertex -22 -44 155
vertex -22 -42.5 155
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex -22 -67 152.5
vertex -22 -61.5 155
vertex -22 -61.5 155
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -22 -61.5 155
vertex -22 -61.5 155
vertex -22 -51.5 155
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -22 -60.5 147
vertex -22 -52.5 146
vertex -22 -52.5 147
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 -65 145.5
vertex -22 -66.5 141
vertex -22 -66.5 128
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -60.5 147
vertex -22 -60.5 144.5
vertex -22 -52.5 146
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -52.5 146
vertex -22 -60.5 144.5
vertex -22 -52 145.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -52 145.5
vertex -22 -60.5 144.5
vertex -22 -51.5 145
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -48 -61.5 155
vertex -22 -42.5 155
vertex -22 42.5 155
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -42.5 155
vertex -22 -42 154.5
vertex -22 42 154.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -42 154.5
vertex -22 -41.5 154
vertex -22 41.5 154
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -41.5 154
vertex -22 -41.5 146
vertex -22 41.5 146
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -51.5 145
vertex -22 -60.5 144.5
vertex -22 60.5 144.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -41.5 146
vertex -22 -42 145.5
vertex -22 42 145.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -42 145.5
vertex -22 -42.5 145
vertex -22 42.5 145
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -22 -51.5 145
vertex -22 60.5 144.5
vertex -22 -42.5 145
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -48 -69.5 147
vertex -22 -69.5 40
vertex -22 -69.5 128
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 -60.5 147
vertex -22 -65 145.5
vertex -22 -66.5 40
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -60.5 147
vertex -22 -66.5 40
vertex -22 -60.5 144.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 -65 145.5
vertex -22 -66.5 128
vertex -22 -66.5 40
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -69.5 128
vertex -22 -69.5 40
vertex -22 -66.5 128
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -61.5 153
vertex -50 67.5 147
vertex -50 1 142
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -48 -61.5 155
vertex -47.5 42.5 155
vertex -47.5 51.5 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -48 -61.5 155
vertex -47.5 51.5 155
vertex -48 61.5 155
endloop
endfacet
facet normal -0.7 0 0.7
outer loop
vertex -50 -61.5 153
vertex -48 61.5 155
vertex -50 61.5 153
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 -61.5 153
vertex -50 61.5 153
vertex -50 67.5 147
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 67.5 147
vertex -50 18 139
vertex -50 1 142
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 -1 142
vertex -50 1 142
vertex -50 1 107
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -48 -61.5 155
vertex -22 42.5 155
vertex -47.5 42.5 155
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 67.5 147
vertex -50 52.5 139
vertex -50 18 139
endloop
endfacet
facet normal -0.7 0.3 0.7
outer loop
vertex -50 61.5 153
vertex -48 61.5 155
vertex -50 65.5 151
endloop
endfacet
facet normal -0.7 0.3 0.7
outer loop
vertex -48 61.5 155
vertex -48 67 152.5
vertex -50 65.5 151
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 61.5 153
vertex -50 65.5 151
vertex -50 67.5 147
endloop
endfacet
facet normal -0.7 0.7 0.3
outer loop
vertex -50 65.5 151
vertex -48 69.5 147
vertex -50 67.5 147
endloop
endfacet
facet normal -0.7 0.7 0.3
outer loop
vertex -50 65.5 151
vertex -48 67 152.5
vertex -48 69.5 147
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 67.5 147
vertex -50 55 138
vertex -50 52.5 139
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 67.5 147
vertex -50 55 135
vertex -50 55 138
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 18 139
vertex -50 52.5 139
vertex -50 34 131
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 40 125
vertex -50 34 131
vertex -50 50 138
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 34 131
vertex -50 52.5 139
vertex -50 50 138
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 50 138
vertex -50 50 135
vertex -50 41 124
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 40 125
vertex -50 50 138
vertex -50 41 124
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 47 118
vertex -50 50 135
vertex -50 52.5 134
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 47 118
vertex -50 52.5 134
vertex -50 55 135
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 47 118
vertex -50 41 124
vertex -50 50 135
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 67.5 147
vertex -50 47 118
vertex -50 55 135
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 67.5 147
vertex -50 55 102
vertex -50 47 118
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -47.5 51.5 155
vertex -22 61.5 155
vertex -48 61.5 155
endloop
endfacet
facet normal -0 0.4 0.9
outer loop
vertex -48 61.5 155
vertex -22 61.5 155
vertex -48 67 152.5
endloop
endfacet
facet normal 0 0.9 0.4
outer loop
vertex -48 67 152.5
vertex -22 69.5 147
vertex -48 69.5 147
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 41 124
vertex -50 16.5 99
vertex -50 40 125
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 15 100.5
vertex -50 40 125
vertex -50 16.5 99
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 11.5 104
vertex -50 15 100.5
vertex -50 -23 83
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 16.5 99
vertex -50 -23 83
vertex -50 15 100.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 16.5 99
vertex -50 20 95.5
vertex -50 15 67.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 23 85
vertex -50 58 85
vertex -50 23 83
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 67.5 147
vertex -50 58 85
vertex -50 55 102
endloop
endfacet
facet normal -0.7 0.7 0
outer loop
vertex -50 67.5 147
vertex -48 69.5 147
vertex -48 69.5 21
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -48 69.5 147
vertex -22 69.5 147
vertex -48 69.5 21
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -42.5 155
vertex -22 42 154.5
vertex -22 42.5 155
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -42 154.5
vertex -22 41.5 154
vertex -22 42 154.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -41.5 154
vertex -22 41.5 146
vertex -22 41.5 154
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -22 -41.5 146
vertex -22 42 145.5
vertex -22 41.5 146
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -22 -42 145.5
vertex -22 42.5 145
vertex -22 42 145.5
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -22 -42.5 145
vertex -22 60.5 144.5
vertex -22 42.5 145
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -47.5 51.5 155
vertex -22 51.5 155
vertex -22 61.5 155
endloop
endfacet
facet normal 0 0.4 0.9
outer loop
vertex -48 67 152.5
vertex -22 61.5 155
vertex -22 67 152.5
endloop
endfacet
facet normal -0 0.9 0.4
outer loop
vertex -48 67 152.5
vertex -22 67 152.5
vertex -22 69.5 147
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -22 44 155
vertex -22 44 155
vertex -22 51.5 155
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -22 42.5 145
vertex -22 60.5 144.5
vertex -22 51.5 145
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -22 44 155
vertex -22 61.5 155
vertex -22 51.5 155
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -22 52.5 147
vertex -22 52.5 146
vertex -22 60.5 147
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 60.5 147
vertex -22 52.5 146
vertex -22 52 145.5
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -22 51.5 145
vertex -22 60.5 144.5
vertex -22 52 145.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 60.5 147
vertex -22 52 145.5
vertex -22 60.5 144.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 60.5 147
vertex -22 60.5 144.5
vertex -22 65 145.5
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -22 69.5 147
vertex -22 69.5 128
vertex -48 69.5 21
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 65 145.5
vertex -22 60.5 144.5
vertex -22 60.5 23.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 65 145.5
vertex -22 60.5 23.5
vertex -22 66.5 141
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 66.5 141
vertex -22 60.5 23.5
vertex -22 66.5 128
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 66.5 128
vertex -22 66.5 40
vertex -22 69.5 128
endloop
endfacet
facet normal -0.7 -0.7 -0
outer loop
vertex -50 -67.5 147
vertex -50 -67.5 21
vertex -48 -69.5 21
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 -67.5 21
vertex -50 -58 83
vertex -50 -55 66
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -48 -69.5 147
vertex -48 -69.5 21
vertex -22 -69.5 21
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex -50 -23 85
vertex -50 -23 83
vertex -50 -58 83
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 16.5 99
vertex -50 -16.5 69
vertex -50 -20 72.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -16.5 69
vertex -50 16.5 99
vertex -50 -15 67.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 16.5 99
vertex -50 -11.5 64
vertex -50 -15 67.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 -15 67.5
vertex -50 -40 43
vertex -50 -16.5 69
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 -16.5 69
vertex -50 -40 43
vertex -50 -41 44
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 -67.5 21
vertex -50 -55 66
vertex -50 -47 50
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -67.5 21
vertex -50 -47 50
vertex -50 -55 33
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -47 50
vertex -50 -41 44
vertex -50 -50 33
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 -40 43
vertex -50 -50 33
vertex -50 -41 44
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 -47 50
vertex -50 -52.5 34
vertex -50 -55 33
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 -47 50
vertex -50 -50 33
vertex -50 -52.5 34
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 -34 37
vertex -50 -50 30
vertex -50 -50 33
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -40 43
vertex -50 -34 37
vertex -50 -50 33
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 -67.5 21
vertex -50 -55 33
vertex -50 -55 30
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 -67.5 21
vertex -50 -55 30
vertex -50 -52.5 29
endloop
endfacet
facet normal -0.7 -0.7 -0.3
outer loop
vertex -50 -67.5 21
vertex -50 -65.5 17
vertex -48 -69.5 21
endloop
endfacet
facet normal -0.7 -0.7 -0.3
outer loop
vertex -48 -69.5 21
vertex -50 -65.5 17
vertex -48 -67 15.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex -50 -67.5 21
vertex -50 -61.5 15
vertex -50 -65.5 17
endloop
endfacet
facet normal -0.7 -0.3 -0.7
outer loop
vertex -50 -65.5 17
vertex -50 -61.5 15
vertex -48 -61.5 13
endloop
endfacet
facet normal -0.7 -0.3 -0.7
outer loop
vertex -50 -65.5 17
vertex -48 -61.5 13
vertex -48 -67 15.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 -67.5 21
vertex -50 -52.5 29
vertex -50 -18 29
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 -52.5 29
vertex -50 -50 30
vertex -50 -18 29
endloop
endfacet
facet normal 0 -0.9 -0.4
outer loop
vertex -48 -69.5 21
vertex -48 -67 15.5
vertex -22 -69.5 21
endloop
endfacet
facet normal 0 -0.4 -0.9
outer loop
vertex -48 -67 15.5
vertex -48 -61.5 13
vertex -22 -67 15.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -48 -61.5 13
vertex -47.5 -51.5 13
vertex -22 -51.5 13
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex -50 -34 37
vertex -50 -18 29
vertex -50 -50 30
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex -50 -1 61
vertex -50 1 26
vertex -50 -1 26
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 -67.5 21
vertex -50 -18 29
vertex -50 -1 26
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 -67.5 21
vertex -50 -1 26
vertex -50 1 26
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -67.5 21
vertex -50 65.5 17
vertex -50 -61.5 15
endloop
endfacet
facet normal -0.7 -0 -0.7
outer loop
vertex -50 -61.5 15
vertex -48 61.5 13
vertex -48 -61.5 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -48 -61.5 13
vertex -48 61.5 13
vertex -47.5 -51.5 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -47.5 -51.5 13
vertex -48 61.5 13
vertex -47.5 -42.5 13
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 -67.5 21
vertex -50 1 26
vertex -50 65.5 17
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -47.5 -42.5 13
vertex -47.5 51.5 13
vertex -22 -44 13
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -48 -69.5 147
vertex -22 -69.5 21
vertex -22 -69.5 40
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -66.5 128
vertex -22 -69.5 40
vertex -22 -66.5 40
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -66.5 40
vertex -22 -66.5 27
vertex -22 -60.5 144.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -66.5 27
vertex -22 -65 22.5
vertex -22 -60.5 144.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 -65 22.5
vertex -22 -60.5 23.5
vertex -22 -60.5 144.5
endloop
endfacet
facet normal 0 -0.9 -0.4
outer loop
vertex -48 -67 15.5
vertex -22 -67 15.5
vertex -22 -69.5 21
endloop
endfacet
facet normal 0 -0.4 -0.9
outer loop
vertex -48 -61.5 13
vertex -22 -61.5 13
vertex -22 -67 15.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -48 -61.5 13
vertex -22 -51.5 13
vertex -22 -61.5 13
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -65 22.5
vertex -22 -60.5 21
vertex -22 -60.5 23.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 -52 22.5
vertex -22 -60.5 23.5
vertex -22 -60.5 21
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -22 -52 22.5
vertex -22 -51.5 23
vertex -22 -60.5 23.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -52 22.5
vertex -22 -60.5 21
vertex -22 -52.5 22
endloop
endfacet
facet normal 0 -0.4 -0.9
outer loop
vertex -22 -67 15.5
vertex -22 -61.5 13
vertex -22 -61.5 13
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -52.5 22
vertex -22 -60.5 21
vertex -22 -52.5 21
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -22 -51.5 23
vertex -22 -42.5 23
vertex -22 -60.5 23.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -22 -42.5 23
vertex -22 -42 23.5
vertex -22 -60.5 23.5
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -22 -42.5 23
vertex -22 -42 22.5
vertex -22 -42 23.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 -44 13
vertex -22 -42.5 13
vertex -22 -44 13
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -22 -42 22.5
vertex -22 42 22.5
vertex -22 -42 23.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -42 22.5
vertex -22 -41.5 22
vertex -22 41.5 22
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -41.5 22
vertex -22 -41.5 14
vertex -22 41.5 14
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 -44 13
vertex -22 42.5 13
vertex -22 -42.5 13
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -22 -42.5 13
vertex -22 42 13.5
vertex -22 -42 13.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -41.5 14
vertex -22 -42 13.5
vertex -22 41.5 14
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 16.5 99
vertex -50 15 67.5
vertex -50 11.5 64
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 16.5 99
vertex -50 -1 61
vertex -50 -11.5 64
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 16.5 99
vertex -50 1 61
vertex -50 -1 61
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 16.5 99
vertex -50 11.5 64
vertex -50 1 61
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 20 95.5
vertex -50 23 85
vertex -50 15 67.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 23 85
vertex -50 23 83
vertex -50 15 67.5
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 16.5 69
vertex -50 15 67.5
vertex -50 23 83
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 20 72.5
vertex -50 16.5 69
vertex -50 23 83
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex -50 1 61
vertex -50 1 26
vertex -50 -1 61
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex -50 16.5 69
vertex -50 41 44
vertex -50 15 67.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 15 67.5
vertex -50 41 44
vertex -50 40 43
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex -50 58 85
vertex -50 58 83
vertex -50 23 83
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 67.5 147
vertex -50 65.5 17
vertex -50 58 85
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 55 66
vertex -50 52.5 34
vertex -50 47 50
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 65.5 17
vertex -50 58 83
vertex -50 58 85
endloop
endfacet
facet normal -0.7 0.7 0
outer loop
vertex -50 67.5 147
vertex -48 69.5 21
vertex -50 67.5 21
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 67.5 147
vertex -50 67.5 21
vertex -50 65.5 17
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 65.5 17
vertex -50 55 66
vertex -50 58 83
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -22 69.5 128
vertex -37.5 69.5 43
vertex -40 69.5 41.5
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -22 69.5 128
vertex -40 69.5 41.5
vertex -41.5 69.5 39
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -22 69.5 128
vertex -41.5 69.5 39
vertex -48 69.5 21
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 18 29
vertex -50 34 37
vertex -50 50 30
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 65.5 17
vertex -50 1 26
vertex -50 18 29
endloop
endfacet
facet normal -0.7 0 -0.7
outer loop
vertex -50 -61.5 15
vertex -50 61.5 15
vertex -48 61.5 13
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 -61.5 15
vertex -50 65.5 17
vertex -50 61.5 15
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -47.5 -42.5 13
vertex -48 61.5 13
vertex -47.5 51.5 13
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 41 44
vertex -50 47 50
vertex -50 50 33
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 34 37
vertex -50 40 43
vertex -50 50 30
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex -50 41 44
vertex -50 50 30
vertex -50 40 43
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 41 44
vertex -50 50 33
vertex -50 50 30
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -50 47 50
vertex -50 52.5 34
vertex -50 50 33
endloop
endfacet
facet normal -1 -0 0
outer loop
vertex -50 55 66
vertex -50 55 33
vertex -50 52.5 34
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 65.5 17
vertex -50 55 33
vertex -50 55 66
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -48 69.5 21
vertex -41.5 69.5 39
vertex -40 69.5 36.5
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -48 69.5 21
vertex -40 69.5 36.5
vertex -37.5 69.5 35
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 18 29
vertex -50 50 30
vertex -50 52.5 29
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 65.5 17
vertex -50 18 29
vertex -50 52.5 29
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 65.5 17
vertex -50 55 30
vertex -50 55 33
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -50 65.5 17
vertex -50 52.5 29
vertex -50 55 30
endloop
endfacet
facet normal -0.7 0.7 -0.3
outer loop
vertex -50 67.5 21
vertex -48 69.5 21
vertex -50 65.5 17
endloop
endfacet
facet normal -0.7 0.7 -0.3
outer loop
vertex -48 69.5 21
vertex -48 67 15.5
vertex -50 65.5 17
endloop
endfacet
facet normal -0.7 0.3 -0.7
outer loop
vertex -50 61.5 15
vertex -50 65.5 17
vertex -48 61.5 13
endloop
endfacet
facet normal -0.7 0.3 -0.7
outer loop
vertex -48 61.5 13
vertex -50 65.5 17
vertex -48 67 15.5
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -48 69.5 21
vertex -32 69.5 35
vertex -29.5 69.5 36.5
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -48 69.5 21
vertex -29.5 69.5 36.5
vertex -22 69.5 40
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -48 69.5 21
vertex -37.5 69.5 35
vertex -32 69.5 35
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -47.5 51.5 13
vertex -48 61.5 13
vertex -22 51.5 13
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex -48 69.5 21
vertex -22 67 15.5
vertex -48 67 15.5
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex -48 61.5 13
vertex -48 67 15.5
vertex -22 67 15.5
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -22 69.5 128
vertex -32 69.5 43
vertex -37.5 69.5 43
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -22 69.5 128
vertex -29.5 69.5 41.5
vertex -32 69.5 43
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -22 69.5 128
vertex -28.5 69.5 39
vertex -29.5 69.5 41.5
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -22 69.5 128
vertex -22 69.5 40
vertex -28.5 69.5 39
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 69.5 128
vertex -22 66.5 40
vertex -22 69.5 40
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 66.5 128
vertex -22 60.5 23.5
vertex -22 66.5 40
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 -44 13
vertex -47.5 51.5 13
vertex -22 42.5 13
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 42.5 23
vertex -22 -42 23.5
vertex -22 42 22.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -42 22.5
vertex -22 41.5 22
vertex -22 42 22.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -22 42.5 23
vertex -22 51.5 23
vertex -22 -42 23.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -41.5 22
vertex -22 41.5 14
vertex -22 41.5 22
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -22 -42 13.5
vertex -22 42 13.5
vertex -22 41.5 14
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -22 -42.5 13
vertex -22 42.5 13
vertex -22 42 13.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -22 51.5 23
vertex -22 60.5 23.5
vertex -22 -42 23.5
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex -22 69.5 40
vertex -29.5 69.5 36.5
vertex -28.5 69.5 39
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -48 69.5 21
vertex -22 69.5 40
vertex -22 69.5 21
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -48 61.5 13
vertex -22 61.5 13
vertex -22 51.5 13
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex -48 69.5 21
vertex -22 69.5 21
vertex -22 67 15.5
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex -48 61.5 13
vertex -22 67 15.5
vertex -22 61.5 13
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 51.5 23
vertex -22 52 22.5
vertex -22 60.5 23.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 52 22.5
vertex -22 52.5 22
vertex -22 60.5 21
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -22 52 22.5
vertex -22 60.5 21
vertex -22 60.5 23.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 66.5 40
vertex -22 60.5 21
vertex -22 66.5 27
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 66.5 40
vertex -22 60.5 23.5
vertex -22 60.5 21
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 66.5 27
vertex -22 60.5 21
vertex -22 65 22.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 52.5 22
vertex -22 52.5 21
vertex -22 60.5 21
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex -22 61.5 13
vertex -22 67 15.5
vertex -22 61.5 13
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -47.5 -65.5 151
vertex -47.5 -52.5 146
vertex -47.5 -61.5 152.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -65.5 151
vertex -47.5 -52.5 144
vertex -47.5 -52.5 146
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -61.5 152.5
vertex -47.5 -52.5 146
vertex -47.5 -52.5 152.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -65.5 151
vertex -47.5 -55 138
vertex -47.5 -52.5 144
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -52.5 146
vertex -47.5 -52.5 144
vertex -47.5 -52 145.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -65.5 151
vertex -47.5 -55 135
vertex -47.5 -55 138
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -47.5 -65.5 151
vertex -47.5 -53.5 132.5
vertex -47.5 -55 135
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -53 139
vertex -47.5 -52.5 144
vertex -47.5 -55 138
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -52.5 139
vertex -47.5 -52.5 139
vertex -47.5 -52.5 139
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -52.5 139
vertex -47.5 -52.5 139
vertex -47.5 -52 139
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -52.5 139
vertex -47.5 -52 139
vertex -47.5 -52 139
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex -47.5 -65.5 151
vertex -47.5 -61.5 152.5
vertex -31.5 -61.5 152.5
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex -47.5 -65.5 151
vertex -31.5 -67 147
vertex -47.5 -67 147
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -47.5 -61.5 152.5
vertex -47.5 -52.5 152.5
vertex -31.5 -61.5 152.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -52 145.5
vertex -47.5 -52.5 144
vertex -47.5 -51.5 145
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -51.5 145
vertex -47.5 -52.5 144
vertex -47.5 -42 143.5
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -47.5 -51.5 145
vertex -47.5 -42 143.5
vertex -47.5 -42.5 145
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -50 138
vertex -47.5 -52 139
vertex -47.5 -52.5 139
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -52 139
vertex -47.5 -50 138
vertex -47.5 -44 135
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -42 145.5
vertex -47.5 -42.5 145
vertex -47.5 -42 143.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -53.5 132.5
vertex -47.5 -52.5 134
vertex -47.5 -55 135
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -53 132
vertex -47.5 -52.5 134
vertex -47.5 -52.5 134
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -53 132
vertex -47.5 -52.5 133.5
vertex -47.5 -52.5 134
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -53.5 132.5
vertex -47.5 -53 132
vertex -47.5 -52.5 134
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -65.5 151
vertex -47.5 -56 97.5
vertex -47.5 -53.5 132.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -50 138
vertex -47.5 -50 135
vertex -47.5 -44 135
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -52.5 134
vertex -47.5 -44 135
vertex -47.5 -50 135
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -52.5 134
vertex -47.5 -52.5 134
vertex -47.5 -44 135
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -52.5 134
vertex -47.5 -45 128.5
vertex -47.5 -44 135
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -42 143.5
vertex -47.5 -45.5 119.5
vertex -47.5 -34 131
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -46.5 118.5
vertex -47.5 -52.5 133.5
vertex -47.5 -52.5 130.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -46.5 118.5
vertex -47.5 -52.5 130.5
vertex -47.5 -47 118
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -34 131
vertex -47.5 -45.5 119.5
vertex -47.5 -40 125
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -45.5 119.5
vertex -47.5 -41 124
vertex -47.5 -40 125
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex -47.5 -65.5 151
vertex -31.5 -61.5 152.5
vertex -31.5 -65.5 151
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex -47.5 -65.5 151
vertex -31.5 -65.5 151
vertex -31.5 -67 147
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -47.5 -52.5 152.5
vertex -31.5 -52.5 152.5
vertex -31.5 -61.5 152.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -42 145.5
vertex -47.5 -42 143.5
vertex -47.5 -18 139
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -42 143.5
vertex -47.5 -34 131
vertex -47.5 -18 139
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -42 145.5
vertex -47.5 -18 139
vertex -47.5 -1 142
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -41.5 152.5
vertex -47.5 -41.5 146
vertex -47.5 41.5 146
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -41.5 146
vertex -47.5 -42 145.5
vertex -47.5 42 145.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -42 145.5
vertex -47.5 -1 142
vertex -47.5 42 145.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -47.5 -41.5 152.5
vertex -47.5 41.5 152.5
vertex -31.5 -41.5 152.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -65.5 151
vertex -47.5 -58 85
vertex -47.5 -56 97.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -65.5 151
vertex -47.5 -67 147
vertex -47.5 -67 21
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -55 102.5
vertex -47.5 -55 104.5
vertex -47.5 -55 102
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -55.5 100
vertex -47.5 -55 102
vertex -47.5 -55 104.5
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -47.5 -67 147
vertex -31.5 -67 147
vertex -47.5 -67 21
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -55 102.5
vertex -47.5 -47 118
vertex -47.5 -52.5 130.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -57 83
vertex -47.5 -56.5 85
vertex -47.5 -58 85
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -40 125
vertex -47.5 -41 124
vertex -47.5 -15 100.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -41 124
vertex -47.5 -16.5 99
vertex -47.5 -15 100.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -1 142
vertex -47.5 -1 107
vertex -47.5 1 107
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -15 100.5
vertex -47.5 8.5 103.5
vertex -47.5 -11.5 104
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 1 107
vertex -47.5 -1 107
vertex -47.5 -11.5 104
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 1 107
vertex -47.5 -11.5 104
vertex -47.5 8.5 103.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -51 85
vertex -47.5 -23 83
vertex -47.5 -23 85
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -20 95.5
vertex -47.5 8.5 103.5
vertex -47.5 -16.5 99
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -23 85
vertex -47.5 8.5 103.5
vertex -47.5 -20 95.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -15 100.5
vertex -47.5 -16.5 99
vertex -47.5 8.5 103.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -23 85
vertex -47.5 -23 83
vertex -47.5 8.5 103.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 8.5 103.5
vertex -47.5 -23 83
vertex -47.5 -20 72.5
endloop
endfacet
facet normal -0.7 0.3 -0.7
outer loop
vertex -31.5 -65.5 151
vertex -31.5 -61.5 152.5
vertex -23 -60.5 144.5
endloop
endfacet
facet normal -0.7 0.7 -0.3
outer loop
vertex -31.5 -65.5 151
vertex -23 -60.5 144.5
vertex -31.5 -67 147
endloop
endfacet
facet normal -0.7 0 -0.7
outer loop
vertex -31.5 -61.5 152.5
vertex -31.5 -52.5 152.5
vertex -23 -60.5 144.5
endloop
endfacet
facet normal -0.7 0 -0.7
outer loop
vertex -31.5 -52.5 152.5
vertex -24.5 -52.5 146
vertex -23 -60.5 144.5
endloop
endfacet
facet normal -0.7 -0 -0.7
outer loop
vertex -24.5 -52.5 146
vertex -24 -52 145.5
vertex -23 -60.5 144.5
endloop
endfacet
facet normal -0.7 0 -0.7
outer loop
vertex -24 -52 145.5
vertex -23.5 -51.5 145
vertex -23 -60.5 144.5
endloop
endfacet
facet normal -0.7 0 -0.7
outer loop
vertex -31.5 -41.5 152.5
vertex -31.5 41.5 152.5
vertex -24.5 -41.5 146
endloop
endfacet
facet normal -0.7 0 -0.7
outer loop
vertex -24.5 -41.5 146
vertex -24.5 41.5 146
vertex -24 -42 145.5
endloop
endfacet
facet normal -0.7 -0 -0.7
outer loop
vertex -23.5 -51.5 145
vertex -23 60.5 144.5
vertex -23 -60.5 144.5
endloop
endfacet
facet normal -0.7 0 -0.7
outer loop
vertex -23.5 -51.5 145
vertex -23.5 -42.5 145
vertex -23 60.5 144.5
endloop
endfacet
facet normal -0.7 -0 -0.7
outer loop
vertex -24 -42 145.5
vertex -23 60.5 144.5
vertex -23.5 -42.5 145
endloop
endfacet
facet normal -0.6 0.8 0
outer loop
vertex -31.5 -67 147
vertex -23 -60.5 144.5
vertex -31.5 -67 21
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -41.5 152.5
vertex -47.5 41.5 146
vertex -47.5 41.5 152.5
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -47.5 -41.5 146
vertex -47.5 42 145.5
vertex -47.5 41.5 146
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 42 145.5
vertex -47.5 -1 142
vertex -47.5 1 142
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 42 145.5
vertex -47.5 1 142
vertex -47.5 18 139
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 42 145.5
vertex -47.5 18 139
vertex -47.5 40.5 143.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 18 139
vertex -47.5 37 139
vertex -47.5 40.5 143.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -1 142
vertex -47.5 1 107
vertex -47.5 1 142
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 34 131
vertex -47.5 37 139
vertex -47.5 18 139
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -31.5 -41.5 152.5
vertex -47.5 41.5 152.5
vertex -31.5 41.5 152.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 42 145.5
vertex -47.5 40.5 143.5
vertex -47.5 42.5 145
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 42.5 145
vertex -47.5 40.5 143.5
vertex -47.5 60.5 144.5
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -47.5 42.5 145
vertex -47.5 60.5 144.5
vertex -47.5 51.5 145
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 51 139
vertex -47.5 50 138
vertex -47.5 52.5 139
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 51 139
vertex -47.5 50 138
vertex -47.5 50 138
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 52.5 152.5
vertex -47.5 52.5 146
vertex -47.5 61.5 152.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 61.5 152.5
vertex -47.5 52.5 146
vertex -47.5 52 145.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 61.5 152.5
vertex -47.5 52 145.5
vertex -47.5 60.5 144.5
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -47.5 61.5 152.5
vertex -47.5 67 147
vertex -47.5 65.5 151
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -47.5 51.5 145
vertex -47.5 60.5 144.5
vertex -47.5 52 145.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 61.5 152.5
vertex -47.5 60.5 144.5
vertex -47.5 60 133
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 51 139
vertex -47.5 52.5 139
vertex -47.5 60 144.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 52.5 139
vertex -47.5 55 138
vertex -47.5 60 144.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 55 135
vertex -47.5 60 144.5
vertex -47.5 55 138
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 61.5 152.5
vertex -47.5 60 133
vertex -47.5 59.5 127
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -47.5 52.5 152.5
vertex -47.5 61.5 152.5
vertex -31.5 52.5 152.5
endloop
endfacet
facet normal 0 -0.4 -0.9
outer loop
vertex -47.5 61.5 152.5
vertex -47.5 65.5 151
vertex -31.5 65.5 151
endloop
endfacet
facet normal 0 -0.9 -0.4
outer loop
vertex -47.5 65.5 151
vertex -47.5 67 147
vertex -31.5 65.5 151
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 37 139
vertex -47.5 34 131
vertex -47.5 38 139
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 38 139
vertex -47.5 34 131
vertex -47.5 42.5 134.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 37 128
vertex -47.5 42.5 134.5
vertex -47.5 34 131
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 40 125
vertex -47.5 50 135
vertex -47.5 40 125.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 50 138
vertex -47.5 50 138
vertex -47.5 50 135
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 50 138
vertex -47.5 40 125.5
vertex -47.5 50 135
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 50 135
vertex -47.5 41 124
vertex -47.5 52.5 134
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 38.5 123.5
vertex -47.5 41 124
vertex -47.5 40 125
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 29.5 112.5
vertex -47.5 41 124
vertex -47.5 38.5 123.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 40 125
vertex -47.5 41 124
vertex -47.5 50 135
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 52.5 134
vertex -47.5 41 124
vertex -47.5 47 118
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 55 135
vertex -47.5 54 104
vertex -47.5 60 144.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 52.5 134
vertex -47.5 54 104
vertex -47.5 55 135
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 60 133
vertex -47.5 60.5 144.5
vertex -47.5 54.5 103.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 61.5 152.5
vertex -47.5 59.5 127
vertex -47.5 58 83
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -47.5 61.5 152.5
vertex -31.5 61.5 152.5
vertex -31.5 52.5 152.5
endloop
endfacet
facet normal 0 -0.4 -0.9
outer loop
vertex -47.5 61.5 152.5
vertex -31.5 65.5 151
vertex -31.5 61.5 152.5
endloop
endfacet
facet normal 0 -0.9 -0.4
outer loop
vertex -47.5 67 147
vertex -31.5 67 147
vertex -31.5 65.5 151
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 9.5 104.5
vertex -47.5 1 107
vertex -47.5 8.5 103.5
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -47.5 10 104.5
vertex -47.5 13.5 101
vertex -47.5 11.5 104
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -47.5 13.5 101
vertex -47.5 15 100.5
vertex -47.5 11.5 104
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 28 111
vertex -47.5 32 116
vertex -47.5 16.5 99
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 11.5 104
vertex -47.5 15 100.5
vertex -47.5 15 100.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 19.5 104.5
vertex -47.5 15 100.5
vertex -47.5 10 95
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 15 100.5
vertex -47.5 10 95
vertex -47.5 15 100.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 16.5 99
vertex -47.5 16 96
vertex -47.5 17 97.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 5.5 88.5
vertex -47.5 16 96
vertex -47.5 16.5 99
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 20 95.5
vertex -47.5 17.5 97
vertex -47.5 -6 67.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 5.5 88.5
vertex -47.5 16.5 99
vertex -47.5 32 116
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -47.5 17 97.5
vertex -47.5 20 95.5
vertex -47.5 16.5 99
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 17 97.5
vertex -47.5 17.5 97
vertex -47.5 20 95.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 54 104
vertex -47.5 52.5 134
vertex -47.5 47 118
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 54.5 103.5
vertex -47.5 55 102
vertex -47.5 60 133
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 57 91.5
vertex -47.5 60 133
vertex -47.5 55 102
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 61.5 152.5
vertex -47.5 65.5 17
vertex -47.5 67 147
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -47.5 67 147
vertex -47.5 67 21
vertex -31.5 67 147
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 51 83
vertex -47.5 51 85
vertex -47.5 23 85
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 57 89.5
vertex -47.5 58 85
vertex -47.5 59.5 127
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 59.5 127
vertex -47.5 58 85
vertex -47.5 58 83
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 57 85
vertex -47.5 58 83
vertex -47.5 58 85
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 61.5 152.5
vertex -47.5 58 83
vertex -47.5 65.5 17
endloop
endfacet
facet normal -0.7 0 -0.7
outer loop
vertex -24.5 -41.5 146
vertex -31.5 41.5 152.5
vertex -24.5 41.5 146
endloop
endfacet
facet normal -0.7 0 -0.7
outer loop
vertex -24 -42 145.5
vertex -24.5 41.5 146
vertex -24 42 145.5
endloop
endfacet
facet normal -0.7 0 -0.7
outer loop
vertex -24 -42 145.5
vertex -24 42 145.5
vertex -23.5 42.5 145
endloop
endfacet
facet normal -0.7 0 -0.7
outer loop
vertex -24 -42 145.5
vertex -23.5 42.5 145
vertex -23 60.5 144.5
endloop
endfacet
facet normal -0.7 0 -0.7
outer loop
vertex -31.5 52.5 152.5
vertex -31.5 61.5 152.5
vertex -24.5 52.5 146
endloop
endfacet
facet normal -0.7 -0 -0.7
outer loop
vertex -31.5 61.5 152.5
vertex -23 60.5 144.5
vertex -24.5 52.5 146
endloop
endfacet
facet normal -0.7 -0.3 -0.7
outer loop
vertex -31.5 61.5 152.5
vertex -31.5 65.5 151
vertex -23 60.5 144.5
endloop
endfacet
facet normal -0.7 -0.7 -0.3
outer loop
vertex -31.5 65.5 151
vertex -31.5 67 147
vertex -23 60.5 144.5
endloop
endfacet
facet normal -0.7 0 -0.7
outer loop
vertex -23.5 42.5 145
vertex -23.5 51.5 145
vertex -23 60.5 144.5
endloop
endfacet
facet normal -0.7 0 -0.7
outer loop
vertex -24.5 52.5 146
vertex -23 60.5 144.5
vertex -24 52 145.5
endloop
endfacet
facet normal -0.7 -0 -0.7
outer loop
vertex -23.5 51.5 145
vertex -24 52 145.5
vertex -23 60.5 144.5
endloop
endfacet
facet normal -0.6 -0.8 0
outer loop
vertex -31.5 67 147
vertex -23 60.5 23.5
vertex -23 60.5 144.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -65.5 151
vertex -47.5 -61.5 15.5
vertex -47.5 -58 85
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -57 83
vertex -47.5 -58 85
vertex -47.5 -58 83
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -51 85
vertex -47.5 -51 83
vertex -47.5 -23 83
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -65.5 151
vertex -47.5 -67 21
vertex -47.5 -61.5 15.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -58 85
vertex -47.5 -60.5 30
vertex -47.5 -58 83
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -57 78.5
vertex -47.5 -58 83
vertex -47.5 -60.5 30
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -57 76.5
vertex -47.5 -60.5 28.5
vertex -47.5 -55 66
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -54.5 64.5
vertex -47.5 -55 66
vertex -47.5 -60.5 28.5
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -31.5 -67 147
vertex -31.5 -67 21
vertex -47.5 -67 21
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -18 70.5
vertex -47.5 8.5 103.5
vertex -47.5 -20 72.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -17.5 70
vertex -47.5 -16.5 69
vertex -47.5 -5.5 79.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -17.5 70
vertex -47.5 -5.5 79.5
vertex -47.5 -13.5 75.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -28 57
vertex -47.5 -5.5 79.5
vertex -47.5 -16.5 69
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -19.5 63.5
vertex -47.5 -15 67.5
vertex -47.5 -8 75.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -11.5 64
vertex -47.5 -14.5 67.5
vertex -47.5 -15 67.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -8 75.5
vertex -47.5 -15 67.5
vertex -47.5 -14.5 67.5
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -47.5 -14.5 67.5
vertex -47.5 -11.5 64
vertex -47.5 -12.5 67.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -19.5 63.5
vertex -47.5 -15 67.5
vertex -47.5 -19.5 63.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -12.5 67.5
vertex -47.5 -11.5 64
vertex -47.5 -9.5 64.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -10 63.5
vertex -47.5 -9.5 64.5
vertex -47.5 -11.5 64
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -47.5 -9.5 63.5
vertex -47.5 -1 61
vertex -47.5 -6 67.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -54 64
vertex -47.5 -60 23.5
vertex -47.5 -47 50
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -61.5 15.5
vertex -47.5 -60.5 30
vertex -47.5 -58 85
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -60.5 28.5
vertex -47.5 -60.5 23.5
vertex -47.5 -54.5 64.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -47 50
vertex -47.5 -60 23.5
vertex -47.5 -55 33
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -47 33.5
vertex -47.5 -41 44
vertex -47.5 -47 50
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -38.5 44.5
vertex -47.5 -29.5 55.5
vertex -47.5 -41 44
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -38.5 44.5
vertex -47.5 -41 44
vertex -47.5 -40 43
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -47 33.5
vertex -47.5 -40 43
vertex -47.5 -41 44
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -47 50
vertex -47.5 -55 33
vertex -47.5 -52.5 34
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -47 50
vertex -47.5 -52.5 34
vertex -47.5 -50 33
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -47 33.5
vertex -47.5 -47 50
vertex -47.5 -50 33
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -50 33
vertex -47.5 -50 30
vertex -47.5 -49.5 30
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -50 33
vertex -47.5 -49.5 30
vertex -47.5 -47 33.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -40 43
vertex -47.5 -47 33.5
vertex -47.5 -41 35.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -40 43
vertex -47.5 -41 35.5
vertex -47.5 -34 37
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -37 29.5
vertex -47.5 -41 35.5
vertex -47.5 -42.5 33.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -37 29.5
vertex -47.5 -34 37
vertex -47.5 -41 35.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -37 29.5
vertex -47.5 -36.5 29.5
vertex -47.5 -34 37
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -61.5 15.5
vertex -47.5 -60.5 28.5
vertex -47.5 -60.5 30
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -60 23.5
vertex -47.5 -55 30
vertex -47.5 -55 33
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -55 30
vertex -47.5 -60 23.5
vertex -47.5 -52.5 29
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -52.5 29
vertex -47.5 -60 23.5
vertex -47.5 -51 29
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -61.5 15.5
vertex -47.5 -60.5 23.5
vertex -47.5 -60.5 28.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -52 22.5
vertex -47.5 -51.5 23
vertex -47.5 -60.5 23.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -67 21
vertex -47.5 -65.5 17
vertex -47.5 -61.5 15.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -52 22.5
vertex -47.5 -60.5 23.5
vertex -47.5 -61.5 15.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -52 22.5
vertex -47.5 -61.5 15.5
vertex -47.5 -52.5 22
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -52.5 22
vertex -47.5 -61.5 15.5
vertex -47.5 -52.5 15.5
endloop
endfacet
facet normal -0 0.9 0.4
outer loop
vertex -47.5 -67 21
vertex -31.5 -67 21
vertex -47.5 -65.5 17
endloop
endfacet
facet normal 0 0.4 0.9
outer loop
vertex -47.5 -65.5 17
vertex -31.5 -61.5 15.5
vertex -47.5 -61.5 15.5
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -47.5 -61.5 15.5
vertex -31.5 -52.5 15.5
vertex -47.5 -52.5 15.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -50 30
vertex -47.5 -51 29
vertex -47.5 -49.5 30
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -52.5 29
vertex -47.5 -51 29
vertex -47.5 -50 30
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -51.5 23
vertex -47.5 -42.5 23
vertex -47.5 -60.5 23.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -42.5 23
vertex -47.5 -41 23.5
vertex -47.5 -60.5 23.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -42.5 23
vertex -47.5 -42 22.5
vertex -47.5 -41 23.5
endloop
endfacet
facet normal 0 0.9 0.4
outer loop
vertex -47.5 -65.5 17
vertex -31.5 -67 21
vertex -31.5 -65.5 17
endloop
endfacet
facet normal -0 0.4 0.9
outer loop
vertex -47.5 -65.5 17
vertex -31.5 -65.5 17
vertex -31.5 -61.5 15.5
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -47.5 -61.5 15.5
vertex -31.5 -61.5 15.5
vertex -31.5 -52.5 15.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -34 37
vertex -47.5 -36.5 29.5
vertex -47.5 -18 29
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -1 61
vertex -47.5 -1 26
vertex -47.5 1 26
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -36.5 29.5
vertex -47.5 -41 23.5
vertex -47.5 -18 29
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -42 22.5
vertex -47.5 -18 29
vertex -47.5 -41 23.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -42 22.5
vertex -47.5 -1 26
vertex -47.5 -18 29
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -42 22.5
vertex -47.5 -41.5 22
vertex -47.5 41.5 22
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -42 22.5
vertex -47.5 42 22.5
vertex -47.5 -1 26
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -41.5 22
vertex -47.5 -41.5 15.5
vertex -47.5 41.5 15.5
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -47.5 -41.5 15.5
vertex -31.5 -41.5 15.5
vertex -31.5 41.5 15.5
endloop
endfacet
facet normal -0.6 0.8 0
outer loop
vertex -31.5 -67 21
vertex -23 -60.5 144.5
vertex -23 -60.5 23.5
endloop
endfacet
facet normal -0.7 0 0.7
outer loop
vertex -31.5 -61.5 15.5
vertex -24.5 -52.5 22
vertex -31.5 -52.5 15.5
endloop
endfacet
facet normal -0.7 0.7 0.3
outer loop
vertex -31.5 -67 21
vertex -23 -60.5 23.5
vertex -31.5 -65.5 17
endloop
endfacet
facet normal -0.7 0.3 0.7
outer loop
vertex -31.5 -65.5 17
vertex -23 -60.5 23.5
vertex -31.5 -61.5 15.5
endloop
endfacet
facet normal -0.7 0 0.7
outer loop
vertex -31.5 -61.5 15.5
vertex -23 -60.5 23.5
vertex -24.5 -52.5 22
endloop
endfacet
facet normal -0.7 0 0.7
outer loop
vertex -24 -52 22.5
vertex -23 -60.5 23.5
vertex -23.5 -51.5 23
endloop
endfacet
facet normal -0.7 -0 0.7
outer loop
vertex -24.5 -52.5 22
vertex -23 -60.5 23.5
vertex -24 -52 22.5
endloop
endfacet
facet normal -0.7 0 0.7
outer loop
vertex -23.5 -51.5 23
vertex -23 -60.5 23.5
vertex -23.5 -42.5 23
endloop
endfacet
facet normal -0.7 0 0.7
outer loop
vertex -31.5 -41.5 15.5
vertex -24.5 -41.5 22
vertex -24.5 41.5 22
endloop
endfacet
facet normal -0.7 -0 0.7
outer loop
vertex -23.5 -42.5 23
vertex -23 -60.5 23.5
vertex -24 42 22.5
endloop
endfacet
facet normal -0.7 0 0.7
outer loop
vertex -24.5 -41.5 22
vertex -24 -42 22.5
vertex -24 42 22.5
endloop
endfacet
facet normal -0.7 0 0.7
outer loop
vertex -24 -42 22.5
vertex -23.5 -42.5 23
vertex -24 42 22.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 20 95.5
vertex -47.5 -6 67.5
vertex -47.5 23 85
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 23 85
vertex -47.5 -1 61
vertex -47.5 23 83
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 23 85
vertex -47.5 -6 67.5
vertex -47.5 -1 61
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -1 61
vertex -47.5 16.5 69
vertex -47.5 23 83
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 51 83
vertex -47.5 23 85
vertex -47.5 23 83
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 20 72.5
vertex -47.5 23 83
vertex -47.5 16.5 69
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 1 61
vertex -47.5 11.5 64
vertex -47.5 -1 61
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -1 61
vertex -47.5 11.5 64
vertex -47.5 15 67.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -1 61
vertex -47.5 15 67.5
vertex -47.5 16.5 69
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 1 61
vertex -47.5 -1 61
vertex -47.5 1 26
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 16.5 69
vertex -47.5 15 67.5
vertex -47.5 41 44
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 15 67.5
vertex -47.5 40 43
vertex -47.5 41 44
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 57 85
vertex -47.5 56.5 83
vertex -47.5 58 83
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 55.5 68
vertex -47.5 55 66
vertex -47.5 55.5 65.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 47 50
vertex -47.5 52.5 34.5
vertex -47.5 55.5 65.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 47 50
vertex -47.5 55.5 65.5
vertex -47.5 55 66
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 67 147
vertex -47.5 65.5 17
vertex -47.5 67 21
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 65.5 17
vertex -47.5 58 83
vertex -47.5 56 70.5
endloop
endfacet
facet normal 0 -1 -0
outer loop
vertex -31.5 67 147
vertex -41.5 67 39
vertex -40 67 41.5
endloop
endfacet
facet normal 0 -1 -0
outer loop
vertex -31.5 67 147
vertex -47.5 67 21
vertex -41.5 67 39
endloop
endfacet
facet normal 0 -1 -0
outer loop
vertex -31.5 67 147
vertex -40 67 41.5
vertex -37.5 67 43
endloop
endfacet
facet normal 0 -1 -0
outer loop
vertex -31.5 67 147
vertex -37.5 67 43
vertex -32 67 43
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 42 22.5
vertex -47.5 1 26
vertex -47.5 -1 26
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -42 22.5
vertex -47.5 41.5 22
vertex -47.5 42 22.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -41.5 22
vertex -47.5 41.5 15.5
vertex -47.5 41.5 22
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -47.5 -41.5 15.5
vertex -31.5 41.5 15.5
vertex -47.5 41.5 15.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 42 22.5
vertex -47.5 18 29
vertex -47.5 1 26
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -47.5 18 29
vertex -47.5 42 23.5
vertex -47.5 34 37
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 42 22.5
vertex -47.5 42 23.5
vertex -47.5 18 29
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 44.5 41
vertex -47.5 41 44
vertex -47.5 40 43
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 34 37
vertex -47.5 44.5 41
vertex -47.5 40 43
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -47.5 41 44
vertex -47.5 52.5 34.5
vertex -47.5 47 50
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 41 44
vertex -47.5 44.5 41
vertex -47.5 52.5 34.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 34 37
vertex -47.5 42 23.5
vertex -47.5 44.5 41
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 44.5 41
vertex -47.5 45 40.5
vertex -47.5 52.5 34.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 52.5 34
vertex -47.5 45 39.5
vertex -47.5 44 33
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 52.5 34
vertex -47.5 44 33
vertex -47.5 50 33
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 44 33
vertex -47.5 50 30
vertex -47.5 50 33
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 52.5 34.5
vertex -47.5 52.5 34
vertex -47.5 55.5 65.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 55.5 65.5
vertex -47.5 52.5 34
vertex -47.5 52.5 34
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 53 34
vertex -47.5 55.5 65.5
vertex -47.5 52.5 34
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 53.5 33.5
vertex -47.5 55 33
vertex -47.5 56 70.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 65.5 17
vertex -47.5 56 70.5
vertex -47.5 55 33
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -47.5 67 21
vertex -40 67 36.5
vertex -41.5 67 39
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -47.5 67 21
vertex -37.5 67 35
vertex -40 67 36.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 42.5 23
vertex -47.5 42 23.5
vertex -47.5 42 22.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 52 29
vertex -47.5 50 30
vertex -47.5 44 33
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 50 30
vertex -47.5 52 29
vertex -47.5 52.5 29
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 42.5 23
vertex -47.5 51.5 23
vertex -47.5 42 23.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 51.5 23
vertex -47.5 52.5 23.5
vertex -47.5 42 23.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 51.5 23
vertex -47.5 52 22.5
vertex -47.5 52.5 23.5
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -47.5 52 29
vertex -47.5 52.5 29
vertex -47.5 52.5 29
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 52.5 29
vertex -47.5 52.5 29
vertex -47.5 52.5 29
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 53 29
vertex -47.5 52.5 23.5
vertex -47.5 55 30
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 65.5 17
vertex -47.5 55 33
vertex -47.5 55 30
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 52 22.5
vertex -47.5 52.5 22
vertex -47.5 52.5 23.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 65.5 17
vertex -47.5 55 30
vertex -47.5 52.5 23.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 52.5 22
vertex -47.5 52.5 15.5
vertex -47.5 61.5 15.5
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -47.5 52.5 22
vertex -47.5 65.5 17
vertex -47.5 52.5 23.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 52.5 22
vertex -47.5 61.5 15.5
vertex -47.5 65.5 17
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -47.5 52.5 15.5
vertex -31.5 61.5 15.5
vertex -47.5 61.5 15.5
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex -47.5 67 21
vertex -47.5 65.5 17
vertex -31.5 65.5 17
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex -47.5 61.5 15.5
vertex -31.5 65.5 17
vertex -47.5 65.5 17
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -47.5 67 21
vertex -31.5 67 21
vertex -37.5 67 35
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -31.5 67 21
vertex -32 67 35
vertex -37.5 67 35
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -47.5 52.5 15.5
vertex -31.5 52.5 15.5
vertex -31.5 61.5 15.5
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex -47.5 67 21
vertex -31.5 65.5 17
vertex -31.5 67 21
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex -47.5 61.5 15.5
vertex -31.5 61.5 15.5
vertex -31.5 65.5 17
endloop
endfacet
facet normal 0 -1 -0
outer loop
vertex -31.5 67 147
vertex -32 67 43
vertex -31.5 67 42.5
endloop
endfacet
facet normal -0.6 -0.8 -0
outer loop
vertex -31.5 67 147
vertex -31.5 67 42.5
vertex -29.5 65.5 41.5
endloop
endfacet
facet normal -0.6 -0.8 0
outer loop
vertex -31.5 67 147
vertex -29.5 65.5 41.5
vertex -28.5 64.5 39
endloop
endfacet
facet normal -0.6 -0.8 0
outer loop
vertex -31.5 67 147
vertex -28.5 64.5 39
vertex -23 60.5 23.5
endloop
endfacet
facet normal -0.7 0 0.7
outer loop
vertex -31.5 -41.5 15.5
vertex -24.5 41.5 22
vertex -31.5 41.5 15.5
endloop
endfacet
facet normal -0.7 0 0.7
outer loop
vertex -24 42 22.5
vertex -23 -60.5 23.5
vertex -23.5 42.5 23
endloop
endfacet
facet normal -0.7 0 0.7
outer loop
vertex -23.5 42.5 23
vertex -23 -60.5 23.5
vertex -23.5 51.5 23
endloop
endfacet
facet normal -0.7 0 0.7
outer loop
vertex -24.5 -41.5 22
vertex -24 42 22.5
vertex -24.5 41.5 22
endloop
endfacet
facet normal -0.7 0 0.7
outer loop
vertex -23.5 51.5 23
vertex -23 -60.5 23.5
vertex -23 60.5 23.5
endloop
endfacet
facet normal -0.6 -0.8 0
outer loop
vertex -23 60.5 23.5
vertex -29.5 65.5 36.5
vertex -31.5 67 35.5
endloop
endfacet
facet normal -0.6 -0.8 -0
outer loop
vertex -23 60.5 23.5
vertex -28.5 64.5 39
vertex -29.5 65.5 36.5
endloop
endfacet
facet normal -0 -1 0
outer loop
vertex -31.5 67 21
vertex -31.5 67 35.5
vertex -32 67 35
endloop
endfacet
facet normal -0.6 -0.8 0
outer loop
vertex -31.5 67 21
vertex -23 60.5 23.5
vertex -31.5 67 35.5
endloop
endfacet
facet normal -0.7 0 0.7
outer loop
vertex -31.5 52.5 15.5
vertex -23 60.5 23.5
vertex -31.5 61.5 15.5
endloop
endfacet
facet normal -0.7 -0 0.7
outer loop
vertex -31.5 52.5 15.5
vertex -24.5 52.5 22
vertex -23 60.5 23.5
endloop
endfacet
facet normal -0.7 -0.7 0.3
outer loop
vertex -31.5 67 21
vertex -31.5 65.5 17
vertex -23 60.5 23.5
endloop
endfacet
facet normal -0.7 -0.3 0.7
outer loop
vertex -31.5 61.5 15.5
vertex -23 60.5 23.5
vertex -31.5 65.5 17
endloop
endfacet
facet normal -0.7 -0 0.7
outer loop
vertex -23.5 51.5 23
vertex -23 60.5 23.5
vertex -24 52 22.5
endloop
endfacet
facet normal -0.7 0 0.7
outer loop
vertex -24.5 52.5 22
vertex -24 52 22.5
vertex -23 60.5 23.5
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -47.5 -52.5 152.5
vertex -47.5 -52.5 146
vertex -31.5 -52.5 152.5
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -47.5 -41.5 152.5
vertex -31.5 -41.5 152.5
vertex -47.5 -41.5 146
endloop
endfacet
facet normal 0 -0.9 -0.4
outer loop
vertex -47.5 -52.5 146
vertex -47.5 -52 145.5
vertex -24.5 -52.5 146
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -47.5 -52.5 146
vertex -24.5 -52.5 146
vertex -31.5 -52.5 152.5
endloop
endfacet
facet normal 0 -0.4 -0.9
outer loop
vertex -47.5 -52 145.5
vertex -47.5 -51.5 145
vertex -24 -52 145.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -47.5 -51.5 145
vertex -47.5 -42.5 145
vertex -23.5 -51.5 145
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex -47.5 -41.5 146
vertex -24 -42 145.5
vertex -47.5 -42 145.5
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex -47.5 -42 145.5
vertex -23.5 -42.5 145
vertex -47.5 -42.5 145
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -47.5 -41.5 146
vertex -31.5 -41.5 152.5
vertex -24.5 -41.5 146
endloop
endfacet
facet normal 0 -0.9 -0.4
outer loop
vertex -47.5 -52 145.5
vertex -24 -52 145.5
vertex -24.5 -52.5 146
endloop
endfacet
facet normal 0 -0.4 -0.9
outer loop
vertex -47.5 -51.5 145
vertex -23.5 -51.5 145
vertex -24 -52 145.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -47.5 -42.5 145
vertex -23.5 -42.5 145
vertex -23.5 -51.5 145
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex -47.5 -41.5 146
vertex -24.5 -41.5 146
vertex -24 -42 145.5
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex -47.5 -42 145.5
vertex -24 -42 145.5
vertex -23.5 -42.5 145
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 -52.5 147
vertex -22 -52.5 146
vertex -22 -51.5 145
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -22 -51.5 155
vertex -22 -51.5 155
vertex -22 -44 155
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 -44 155
vertex -22 -44 147
vertex -22 -42.5 155
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -22 -52.5 147
vertex -22 -42.5 145
vertex -22 -44 147
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -22 -42.5 155
vertex -22 -41.5 154
vertex -22 -42 154.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -42.5 155
vertex -22 -41.5 146
vertex -22 -41.5 154
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 -44 147
vertex -22 -41.5 146
vertex -22 -42.5 155
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 -52.5 146
vertex -22 -52 145.5
vertex -22 -51.5 145
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -52.5 147
vertex -22 -51.5 145
vertex -22 -42.5 145
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -22 -44 147
vertex -22 -42 145.5
vertex -22 -41.5 146
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -22 -44 147
vertex -22 -42.5 145
vertex -22 -42 145.5
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -47.5 41.5 152.5
vertex -47.5 41.5 146
vertex -31.5 41.5 152.5
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -47.5 52.5 152.5
vertex -31.5 52.5 152.5
vertex -47.5 52.5 146
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -47.5 42.5 155
vertex -22 51.5 155
vertex -47.5 51.5 155
endloop
endfacet
facet normal 0 -0.9 -0.4
outer loop
vertex -47.5 41.5 146
vertex -47.5 42 145.5
vertex -24.5 41.5 146
endloop
endfacet
facet normal 0 -0.4 -0.9
outer loop
vertex -47.5 42 145.5
vertex -47.5 42.5 145
vertex -24 42 145.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -47.5 42.5 145
vertex -47.5 51.5 145
vertex -23.5 42.5 145
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex -47.5 51.5 145
vertex -47.5 52 145.5
vertex -23.5 51.5 145
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -47.5 41.5 146
vertex -24.5 41.5 146
vertex -31.5 41.5 152.5
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex -47.5 52.5 146
vertex -24 52 145.5
vertex -47.5 52 145.5
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -47.5 52.5 146
vertex -31.5 52.5 152.5
vertex -24.5 52.5 146
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -47.5 42.5 155
vertex -22 42.5 155
vertex -22 44 155
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -47.5 42.5 155
vertex -22 44 155
vertex -22 51.5 155
endloop
endfacet
facet normal 0 -0.9 -0.4
outer loop
vertex -47.5 42 145.5
vertex -24 42 145.5
vertex -24.5 41.5 146
endloop
endfacet
facet normal 0 -0.4 -0.9
outer loop
vertex -47.5 42.5 145
vertex -23.5 42.5 145
vertex -24 42 145.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -47.5 51.5 145
vertex -23.5 51.5 145
vertex -23.5 42.5 145
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex -47.5 52 145.5
vertex -24 52 145.5
vertex -23.5 51.5 145
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex -47.5 52.5 146
vertex -24.5 52.5 146
vertex -24 52 145.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -22 42 154.5
vertex -22 44 155
vertex -22 42.5 155
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 42 154.5
vertex -22 41.5 154
vertex -22 44 155
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 41.5 154
vertex -22 42.5 145
vertex -22 44 155
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 41.5 154
vertex -22 41.5 146
vertex -22 42.5 145
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -22 42.5 155
vertex -22 44 155
vertex -22 44 155
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 44 155
vertex -22 42.5 145
vertex -22 44 147
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -22 44 147
vertex -22 52.5 146
vertex -22 52.5 147
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 41.5 146
vertex -22 42 145.5
vertex -22 42.5 145
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -22 44 147
vertex -22 42.5 145
vertex -22 51.5 145
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -22 44 147
vertex -22 51.5 145
vertex -22 52 145.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -22 44 147
vertex -22 52 145.5
vertex -22 52.5 146
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -47.5 -52.5 22
vertex -47.5 -52.5 15.5
vertex -31.5 -52.5 15.5
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -47.5 -41.5 22
vertex -31.5 -41.5 15.5
vertex -47.5 -41.5 15.5
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex -47.5 -52 22.5
vertex -47.5 -52.5 22
vertex -24 -52 22.5
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -47.5 -52.5 22
vertex -31.5 -52.5 15.5
vertex -24.5 -52.5 22
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex -47.5 -52 22.5
vertex -23.5 -51.5 23
vertex -47.5 -51.5 23
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -47.5 -51.5 23
vertex -23.5 -42.5 23
vertex -47.5 -42.5 23
endloop
endfacet
facet normal 0 0.9 0.4
outer loop
vertex -47.5 -42 22.5
vertex -24.5 -41.5 22
vertex -47.5 -41.5 22
endloop
endfacet
facet normal 0 0.4 0.9
outer loop
vertex -47.5 -42.5 23
vertex -24 -42 22.5
vertex -47.5 -42 22.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -47.5 -51.5 13
vertex -47.5 -42.5 13
vertex -22 -51.5 13
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -47.5 -41.5 22
vertex -24.5 -41.5 22
vertex -31.5 -41.5 15.5
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex -47.5 -52.5 22
vertex -24.5 -52.5 22
vertex -24 -52 22.5
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex -47.5 -52 22.5
vertex -24 -52 22.5
vertex -23.5 -51.5 23
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -47.5 -51.5 23
vertex -23.5 -51.5 23
vertex -23.5 -42.5 23
endloop
endfacet
facet normal -0 0.9 0.4
outer loop
vertex -47.5 -42 22.5
vertex -24 -42 22.5
vertex -24.5 -41.5 22
endloop
endfacet
facet normal -0 0.4 0.9
outer loop
vertex -47.5 -42.5 23
vertex -23.5 -42.5 23
vertex -24 -42 22.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -47.5 -42.5 13
vertex -22 -44 13
vertex -22 -51.5 13
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -52 22.5
vertex -22 -52.5 22
vertex -22 -44 21
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -52 22.5
vertex -22 -44 21
vertex -22 -51.5 23
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 -51.5 23
vertex -22 -44 21
vertex -22 -42.5 23
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -22 -42.5 23
vertex -22 -41.5 22
vertex -22 -42 22.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -52.5 22
vertex -22 -52.5 21
vertex -22 -44 21
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 -42.5 23
vertex -22 -44 21
vertex -22 -44 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 -44 13
vertex -22 -44 13
vertex -22 -44 13
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 -42.5 23
vertex -22 -41.5 14
vertex -22 -41.5 22
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 -42.5 23
vertex -22 -44 13
vertex -22 -41.5 14
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -22 -44 13
vertex -22 -42 13.5
vertex -22 -41.5 14
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -22 -44 13
vertex -22 -42.5 13
vertex -22 -42 13.5
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -47.5 41.5 22
vertex -47.5 41.5 15.5
vertex -31.5 41.5 15.5
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -47.5 52.5 22
vertex -31.5 52.5 15.5
vertex -47.5 52.5 15.5
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex -47.5 42 22.5
vertex -47.5 41.5 22
vertex -24 42 22.5
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex -47.5 42.5 23
vertex -47.5 42 22.5
vertex -23.5 42.5 23
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -47.5 42.5 23
vertex -23.5 51.5 23
vertex -47.5 51.5 23
endloop
endfacet
facet normal 0 0.4 0.9
outer loop
vertex -47.5 51.5 23
vertex -24 52 22.5
vertex -47.5 52 22.5
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -47.5 41.5 22
vertex -31.5 41.5 15.5
vertex -24.5 41.5 22
endloop
endfacet
facet normal 0 0.9 0.4
outer loop
vertex -47.5 52 22.5
vertex -24.5 52.5 22
vertex -47.5 52.5 22
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -47.5 52.5 22
vertex -24.5 52.5 22
vertex -31.5 52.5 15.5
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex -47.5 41.5 22
vertex -24.5 41.5 22
vertex -24 42 22.5
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex -47.5 42 22.5
vertex -24 42 22.5
vertex -23.5 42.5 23
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -47.5 42.5 23
vertex -23.5 42.5 23
vertex -23.5 51.5 23
endloop
endfacet
facet normal -0 0.4 0.9
outer loop
vertex -47.5 51.5 23
vertex -23.5 51.5 23
vertex -24 52 22.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -47.5 51.5 13
vertex -22 51.5 13
vertex -22 42.5 13
endloop
endfacet
facet normal -0 0.9 0.4
outer loop
vertex -47.5 52 22.5
vertex -24 52 22.5
vertex -24.5 52.5 22
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 42.5 23
vertex -22 42 22.5
vertex -22 44 21
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 42 22.5
vertex -22 41.5 22
vertex -22 44 21
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -22 42.5 23
vertex -22 52.5 21
vertex -22 51.5 23
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -22 51.5 23
vertex -22 52.5 22
vertex -22 52 22.5
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -22 41.5 22
vertex -22 42.5 13
vertex -22 44 21
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 41.5 22
vertex -22 41.5 14
vertex -22 42.5 13
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 41.5 14
vertex -22 42 13.5
vertex -22 42.5 13
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -22 42.5 23
vertex -22 44 21
vertex -22 52.5 21
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 42.5 13
vertex -22 44 13
vertex -22 44 21
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 42.5 13
vertex -22 51.5 13
vertex -22 44 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 44 13
vertex -22 51.5 13
vertex -22 51.5 13
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -22 51.5 23
vertex -22 52.5 21
vertex -22 52.5 22
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -22 -61.5 155
vertex -22 -51.5 155
vertex -22 -51.5 155
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex -22 -67 152.5
vertex -22 -69.5 147
vertex -16 -67 152.5
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex -22 -67 152.5
vertex -16 -61.5 155
vertex -22 -61.5 155
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex -22 -67 152.5
vertex -16 -67 152.5
vertex -16 -61.5 155
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -16 -67 152.5
vertex -16 -60.5 147
vertex -16 -61.5 155
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex -22 -69.5 147
vertex -16 -69.5 147
vertex -16 -67 152.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -16 -67 152.5
vertex -16 -69.5 147
vertex -16 -65 145.5
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex -22 -60.5 147
vertex -16 -60.5 147
vertex -16 -65 145.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -16 -67 152.5
vertex -16 -65 145.5
vertex -16 -60.5 147
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -22 -61.5 155
vertex -16 -44 155
vertex -22 -51.5 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 -60.5 147
vertex -22 -52.5 147
vertex -16 -60.5 147
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -22 -61.5 155
vertex -16 -61.5 155
vertex -16 -44 155
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -16 -61.5 155
vertex -16 -60.5 147
vertex -16 -44 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 -52.5 147
vertex -16 -44 147
vertex -16 -60.5 147
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex -22 -65 145.5
vertex -16 -66.5 141
vertex -22 -66.5 141
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex -22 -60.5 147
vertex -16 -65 145.5
vertex -22 -65 145.5
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -22 -69.5 147
vertex -22 -69.5 128
vertex -16 -69.5 147
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex -22 -65 145.5
vertex -16 -65 145.5
vertex -16 -66.5 141
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -16 -69.5 147
vertex -16 -66.5 141
vertex -16 -65 145.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -16 -69.5 147
vertex -16 -69.5 128
vertex -16 -66.5 141
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -22 -51.5 155
vertex -16 -44 155
vertex -22 -44 155
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -22 -44 155
vertex -16 -44 155
vertex -22 -44 147
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 -52.5 147
vertex -22 -44 147
vertex -16 -44 147
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -16 -60.5 147
vertex -16 -44 147
vertex -16 -44 155
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -22 -44 147
vertex -16 -44 155
vertex -16 -44 147
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -22 -66.5 141
vertex -16 -66.5 128
vertex -22 -66.5 128
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -22 -66.5 141
vertex -16 -66.5 141
vertex -16 -66.5 128
endloop
endfacet
facet normal 0 -1 -0
outer loop
vertex -16 -69.5 147
vertex -22 -69.5 128
vertex -16 -69.5 128
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -16 -66.5 141
vertex -16 -69.5 128
vertex -16 -66.5 128
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 -69.5 128
vertex -22 -66.5 128
vertex -16 -69.5 128
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 -66.5 128
vertex -16 -66.5 128
vertex -16 -69.5 128
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -22 44 155
vertex -22 44 147
vertex -16 44 147
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 44 147
vertex -22 52.5 147
vertex -16 44 147
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -22 44 155
vertex -16 44 147
vertex -16 44 155
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -22 44 155
vertex -16 44 155
vertex -16 61.5 155
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -16 44 155
vertex -16 44 147
vertex -16 60.5 147
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -22 44 155
vertex -16 61.5 155
vertex -22 61.5 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -16 44 147
vertex -22 52.5 147
vertex -22 60.5 147
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -16 44 155
vertex -16 60.5 147
vertex -16 61.5 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -16 44 147
vertex -22 60.5 147
vertex -16 60.5 147
endloop
endfacet
facet normal 0 0.4 0.9
outer loop
vertex -22 61.5 155
vertex -16 67 152.5
vertex -22 67 152.5
endloop
endfacet
facet normal 0 -0.4 -0.9
outer loop
vertex -22 60.5 147
vertex -22 65 145.5
vertex -16 60.5 147
endloop
endfacet
facet normal 0 0.9 0.4
outer loop
vertex -22 67 152.5
vertex -16 69.5 147
vertex -22 69.5 147
endloop
endfacet
facet normal -0 0.4 0.9
outer loop
vertex -22 61.5 155
vertex -16 61.5 155
vertex -16 67 152.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -16 60.5 147
vertex -16 67 152.5
vertex -16 61.5 155
endloop
endfacet
facet normal -0 0.9 0.4
outer loop
vertex -22 67 152.5
vertex -16 67 152.5
vertex -16 69.5 147
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -16 60.5 147
vertex -16 65 145.5
vertex -16 67 152.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -16 67 152.5
vertex -16 65 145.5
vertex -16 69.5 147
endloop
endfacet
facet normal 0 -0.9 -0.4
outer loop
vertex -22 65 145.5
vertex -22 66.5 141
vertex -16 65 145.5
endloop
endfacet
facet normal 0 -0.4 -0.9
outer loop
vertex -22 65 145.5
vertex -16 65 145.5
vertex -16 60.5 147
endloop
endfacet
facet normal 0 -0.9 -0.4
outer loop
vertex -22 66.5 141
vertex -16 66.5 141
vertex -16 65 145.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -16 69.5 147
vertex -16 65 145.5
vertex -16 66.5 141
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -22 69.5 147
vertex -16 69.5 147
vertex -16 69.5 128
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -16 69.5 147
vertex -16 66.5 141
vertex -16 69.5 128
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -22 66.5 141
vertex -22 66.5 128
vertex -16 66.5 141
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -22 69.5 147
vertex -16 69.5 128
vertex -22 69.5 128
endloop
endfacet
facet normal 0 -1 -0
outer loop
vertex -16 66.5 141
vertex -22 66.5 128
vertex -16 66.5 128
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -16 66.5 141
vertex -16 66.5 128
vertex -16 69.5 128
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 66.5 128
vertex -22 69.5 128
vertex -16 66.5 128
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 69.5 128
vertex -16 69.5 128
vertex -16 66.5 128
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -22 -69.5 40
vertex -16 -66.5 40
vertex -22 -66.5 40
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -22 -69.5 40
vertex -16 -69.5 40
vertex -16 -66.5 40
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -22 -69.5 40
vertex -22 -69.5 21
vertex -16 -69.5 40
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -22 -66.5 40
vertex -16 -66.5 27
vertex -22 -66.5 27
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -22 -66.5 40
vertex -16 -66.5 40
vertex -16 -66.5 27
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -16 -69.5 40
vertex -16 -66.5 27
vertex -16 -66.5 40
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 -61.5 13
vertex -22 -51.5 13
vertex -22 -61.5 13
endloop
endfacet
facet normal 0 0.9 0.4
outer loop
vertex -22 -66.5 27
vertex -16 -65 22.5
vertex -22 -65 22.5
endloop
endfacet
facet normal 0 -1 -0
outer loop
vertex -16 -69.5 40
vertex -22 -69.5 21
vertex -16 -69.5 21
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -16 -69.5 40
vertex -16 -69.5 21
vertex -16 -66.5 27
endloop
endfacet
facet normal -0 0.9 0.4
outer loop
vertex -22 -66.5 27
vertex -16 -66.5 27
vertex -16 -65 22.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -16 -66.5 27
vertex -16 -69.5 21
vertex -16 -65 22.5
endloop
endfacet
facet normal -0 0.4 0.9
outer loop
vertex -22 -65 22.5
vertex -16 -65 22.5
vertex -16 -60.5 21
endloop
endfacet
facet normal 0 -0.9 -0.4
outer loop
vertex -22 -69.5 21
vertex -22 -67 15.5
vertex -16 -69.5 21
endloop
endfacet
facet normal 0 0.4 0.9
outer loop
vertex -22 -65 22.5
vertex -16 -60.5 21
vertex -22 -60.5 21
endloop
endfacet
facet normal 0 -0.4 -0.9
outer loop
vertex -22 -67 15.5
vertex -22 -61.5 13
vertex -16 -67 15.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -16 -65 22.5
vertex -16 -69.5 21
vertex -16 -67 15.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -16 -65 22.5
vertex -16 -67 15.5
vertex -16 -60.5 21
endloop
endfacet
facet normal 0 -0.9 -0.4
outer loop
vertex -22 -67 15.5
vertex -16 -67 15.5
vertex -16 -69.5 21
endloop
endfacet
facet normal 0 -0.4 -0.9
outer loop
vertex -22 -61.5 13
vertex -16 -61.5 13
vertex -16 -67 15.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -16 -67 15.5
vertex -16 -61.5 13
vertex -16 -60.5 21
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -22 -60.5 21
vertex -16 -44 21
vertex -22 -52.5 21
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 -61.5 13
vertex -22 -51.5 13
vertex -16 -61.5 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -16 -61.5 13
vertex -22 -51.5 13
vertex -22 -44 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -22 -60.5 21
vertex -16 -60.5 21
vertex -16 -44 21
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -16 -61.5 13
vertex -16 -44 13
vertex -16 -60.5 21
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 -51.5 13
vertex -22 -44 13
vertex -22 -44 13
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -22 -52.5 21
vertex -16 -44 21
vertex -22 -44 21
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -22 -44 21
vertex -16 -44 21
vertex -22 -44 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 -44 13
vertex -22 -44 13
vertex -16 -44 13
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -16 -60.5 21
vertex -16 -44 13
vertex -16 -44 21
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -16 -61.5 13
vertex -22 -44 13
vertex -16 -44 13
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -22 -44 13
vertex -16 -44 21
vertex -16 -44 13
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -22 66.5 40
vertex -16 69.5 40
vertex -22 69.5 40
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -22 66.5 40
vertex -16 66.5 40
vertex -16 69.5 40
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -22 66.5 40
vertex -22 66.5 27
vertex -16 66.5 40
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -16 66.5 40
vertex -16 66.5 27
vertex -16 69.5 40
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -22 69.5 40
vertex -16 69.5 40
vertex -16 69.5 21
endloop
endfacet
facet normal 0 -1 -0
outer loop
vertex -16 66.5 40
vertex -22 66.5 27
vertex -16 66.5 27
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -22 44 21
vertex -16 44 21
vertex -22 52.5 21
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -22 44 21
vertex -22 44 13
vertex -16 44 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 44 13
vertex -22 51.5 13
vertex -16 44 13
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -22 44 21
vertex -16 44 13
vertex -16 44 21
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -16 44 21
vertex -16 44 13
vertex -16 60.5 21
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 51.5 13
vertex -22 61.5 13
vertex -22 51.5 13
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -22 69.5 40
vertex -16 69.5 21
vertex -22 69.5 21
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex -22 65 22.5
vertex -22 60.5 21
vertex -16 65 22.5
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex -22 66.5 27
vertex -22 65 22.5
vertex -16 66.5 27
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -16 69.5 40
vertex -16 66.5 27
vertex -16 69.5 21
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex -22 65 22.5
vertex -16 65 22.5
vertex -16 66.5 27
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -16 66.5 27
vertex -16 65 22.5
vertex -16 69.5 21
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -22 52.5 21
vertex -16 60.5 21
vertex -22 60.5 21
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 51.5 13
vertex -22 61.5 13
vertex -16 44 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -16 44 13
vertex -22 61.5 13
vertex -22 61.5 13
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -16 44 21
vertex -16 60.5 21
vertex -22 52.5 21
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -16 44 13
vertex -22 61.5 13
vertex -16 61.5 13
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -16 44 13
vertex -16 61.5 13
vertex -16 60.5 21
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex -22 61.5 13
vertex -22 67 15.5
vertex -16 61.5 13
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex -22 69.5 21
vertex -16 67 15.5
vertex -22 67 15.5
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex -22 60.5 21
vertex -16 60.5 21
vertex -16 65 22.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -16 65 22.5
vertex -16 60.5 21
vertex -16 67 15.5
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex -22 69.5 21
vertex -16 69.5 21
vertex -16 67 15.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -16 65 22.5
vertex -16 67 15.5
vertex -16 69.5 21
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -16 60.5 21
vertex -16 61.5 13
vertex -16 67 15.5
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex -22 67 15.5
vertex -16 67 15.5
vertex -16 61.5 13
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex -47.5 -52.5 139
vertex -50 -55 138
vertex -50 -52.5 139
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex -47.5 -53 139
vertex -50 -55 138
vertex -47.5 -52.5 139
endloop
endfacet
facet normal -0 0.5 -0.9
outer loop
vertex -47.5 -52.5 139
vertex -50 -55 138
vertex -47.5 -52.5 139
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex -47.5 -53 139
vertex -47.5 -55 138
vertex -50 -55 138
endloop
endfacet
facet normal 0 -0.5 -0.9
outer loop
vertex -47.5 -50 138
vertex -50 -52.5 139
vertex -50 -50 138
endloop
endfacet
facet normal -0 -0.5 -0.9
outer loop
vertex -47.5 -50 138
vertex -47.5 -52.5 139
vertex -50 -52.5 139
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -50 -55 138
vertex -47.5 -55 138
vertex -50 -55 135
endloop
endfacet
facet normal 0 0.5 0.9
outer loop
vertex -47.5 -55 135
vertex -50 -52.5 134
vertex -50 -55 135
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex -47.5 -55 135
vertex -50 -55 135
vertex -47.5 -55 138
endloop
endfacet
facet normal 0 0.5 0.9
outer loop
vertex -47.5 -55 135
vertex -47.5 -52.5 134
vertex -50 -52.5 134
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex -47.5 -50 135
vertex -50 -50 138
vertex -50 -50 135
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex -50 -52.5 134
vertex -47.5 -52.5 134
vertex -50 -50 135
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -47.5 -50 135
vertex -47.5 -50 138
vertex -50 -50 138
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex -47.5 -52.5 134
vertex -47.5 -50 135
vertex -50 -50 135
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex -50 50 138
vertex -50 52.5 139
vertex -47.5 52.5 139
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex -50 50 138
vertex -47.5 52.5 139
vertex -47.5 50 138
endloop
endfacet
facet normal 0 -0.5 -0.9
outer loop
vertex -50 52.5 139
vertex -50 55 138
vertex -47.5 55 138
endloop
endfacet
facet normal 0 -0.5 -0.9
outer loop
vertex -50 52.5 139
vertex -47.5 55 138
vertex -47.5 52.5 139
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -50 50 138
vertex -47.5 50 138
vertex -50 50 135
endloop
endfacet
facet normal -0 0.5 0.9
outer loop
vertex -50 52.5 134
vertex -50 50 135
vertex -47.5 50 135
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex -47.5 50 135
vertex -50 50 135
vertex -47.5 50 138
endloop
endfacet
facet normal 0 0.5 0.9
outer loop
vertex -50 52.5 134
vertex -47.5 50 135
vertex -47.5 52.5 134
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -50 55 135
vertex -47.5 55 135
vertex -50 55 138
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex -50 52.5 134
vertex -47.5 52.5 134
vertex -50 55 135
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -50 55 138
vertex -47.5 55 135
vertex -47.5 55 138
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex -47.5 55 135
vertex -50 55 135
vertex -47.5 52.5 134
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex -47.5 -52.5 34
vertex -50 -55 33
vertex -50 -52.5 34
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -50 -55 33
vertex -47.5 -55 33
vertex -50 -55 30
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex -47.5 -52.5 34
vertex -47.5 -55 33
vertex -50 -55 33
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex -47.5 -55 30
vertex -50 -55 30
vertex -47.5 -55 33
endloop
endfacet
facet normal 0 -0.5 -0.9
outer loop
vertex -47.5 -50 33
vertex -50 -52.5 34
vertex -50 -50 33
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex -47.5 -50 30
vertex -50 -50 33
vertex -50 -50 30
endloop
endfacet
facet normal -0 -0.5 -0.9
outer loop
vertex -47.5 -50 33
vertex -47.5 -52.5 34
vertex -50 -52.5 34
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -47.5 -50 30
vertex -47.5 -50 33
vertex -50 -50 33
endloop
endfacet
facet normal -0 0.5 0.9
outer loop
vertex -50 -55 30
vertex -47.5 -55 30
vertex -50 -52.5 29
endloop
endfacet
facet normal 0 0.5 0.9
outer loop
vertex -47.5 -55 30
vertex -47.5 -52.5 29
vertex -50 -52.5 29
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex -50 -52.5 29
vertex -47.5 -52.5 29
vertex -50 -50 30
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex -47.5 -50 30
vertex -50 -50 30
vertex -47.5 -52.5 29
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex -50 50 33
vertex -50 52.5 34
vertex -47.5 52.5 34
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -50 50 33
vertex -47.5 50 33
vertex -50 50 30
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex -47.5 52.5 34
vertex -47.5 50 33
vertex -50 50 33
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex -47.5 52.5 34
vertex -50 50 33
vertex -47.5 52.5 34
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex -47.5 50 30
vertex -50 50 30
vertex -47.5 50 33
endloop
endfacet
facet normal 0 -0.5 -0.9
outer loop
vertex -50 52.5 34
vertex -50 55 33
vertex -47.5 55 33
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -50 55 30
vertex -47.5 55 30
vertex -50 55 33
endloop
endfacet
facet normal -0 -0.5 -0.9
outer loop
vertex -47.5 53 34
vertex -47.5 52.5 34
vertex -50 52.5 34
endloop
endfacet
facet normal -0 -0.5 -0.9
outer loop
vertex -47.5 53 34
vertex -50 52.5 34
vertex -47.5 53.5 33.5
endloop
endfacet
facet normal 0 -0.5 -0.9
outer loop
vertex -47.5 53.5 33.5
vertex -50 52.5 34
vertex -47.5 55 33
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -50 55 33
vertex -47.5 55 30
vertex -47.5 55 33
endloop
endfacet
facet normal -0 0.5 0.9
outer loop
vertex -50 50 30
vertex -47.5 50 30
vertex -50 52.5 29
endloop
endfacet
facet normal 0 0.5 0.9
outer loop
vertex -47.5 50 30
vertex -47.5 52.5 29
vertex -50 52.5 29
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex -50 52.5 29
vertex -47.5 52.5 29
vertex -50 55 30
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex -47.5 53 29
vertex -47.5 55 30
vertex -50 55 30
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex -47.5 52.5 29
vertex -50 55 30
vertex -47.5 52.5 29
endloop
endfacet
facet normal -0 -0.5 0.9
outer loop
vertex -47.5 52.5 29
vertex -47.5 53 29
vertex -50 55 30
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -53 139
vertex -47.5 -52.5 139
vertex -47.5 -52.5 144
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -52.5 139
vertex -47.5 -52.5 139
vertex -47.5 -52.5 144
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -47.5 -52.5 139
vertex -47.5 -52 139
vertex -47.5 -52.5 144
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -52.5 144
vertex -47.5 -52 139
vertex -47.5 -42 143.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -52 139
vertex -47.5 -42 143.5
vertex -47.5 -52 139
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -52 139
vertex -47.5 -44 135
vertex -47.5 -42 143.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -53 132
vertex -47.5 -52.5 130.5
vertex -47.5 -52.5 133.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -53.5 132.5
vertex -47.5 -55 104.5
vertex -47.5 -53 132
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -53 132
vertex -47.5 -55 104.5
vertex -47.5 -52.5 130.5
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -47.5 -52.5 133.5
vertex -47.5 -45.5 119.5
vertex -47.5 -52.5 134
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -42 143.5
vertex -47.5 -44 135
vertex -47.5 -45.5 119.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -45 128.5
vertex -47.5 -52.5 134
vertex -47.5 -45.5 119.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -44 135
vertex -47.5 -45 128.5
vertex -47.5 -45.5 119.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -46.5 118.5
vertex -47.5 -45.5 119.5
vertex -47.5 -52.5 133.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -55.5 100
vertex -47.5 -55 104.5
vertex -47.5 -53.5 132.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -55 102.5
vertex -47.5 -52.5 130.5
vertex -47.5 -55 104.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -56 97.5
vertex -47.5 -55.5 100
vertex -47.5 -53.5 132.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -51 85
vertex -47.5 -56.5 85
vertex -47.5 -51 83
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 8.5 103.5
vertex -47.5 -13.5 75.5
vertex -47.5 -5.5 79.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 19.5 104.5
vertex -47.5 10 95
vertex -47.5 -29.5 55.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 -60.5 144.5
vertex -23 -60.5 144.5
vertex -22 60.5 144.5
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -23 -60.5 144.5
vertex -22 -60.5 144.5
vertex -23 -60.5 23.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 37 139
vertex -47.5 38 139
vertex -47.5 40.5 143.5
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -47.5 38 139
vertex -47.5 51 139
vertex -47.5 40.5 143.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 51 139
vertex -47.5 60.5 144.5
vertex -47.5 40.5 143.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 38 139
vertex -47.5 50 138
vertex -47.5 51 139
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 51 139
vertex -47.5 60 144.5
vertex -47.5 60.5 144.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 38 139
vertex -47.5 42.5 134.5
vertex -47.5 50 138
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 37 128
vertex -47.5 40 125.5
vertex -47.5 42.5 134.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 42.5 134.5
vertex -47.5 40 125.5
vertex -47.5 50 138
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 54.5 103.5
vertex -47.5 60.5 144.5
vertex -47.5 60 144.5
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex -47.5 9.5 104.5
vertex -47.5 13.5 101
vertex -47.5 10 104.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 9.5 104.5
vertex -47.5 8.5 103.5
vertex -47.5 13.5 101
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 29.5 112.5
vertex -47.5 38.5 123.5
vertex -47.5 32 116
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 28 111
vertex -47.5 29.5 112.5
vertex -47.5 32 116
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 5.5 88.5
vertex -47.5 32 116
vertex -47.5 38.5 123.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 8.5 103.5
vertex -47.5 10 95
vertex -47.5 13.5 101
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 13.5 101
vertex -47.5 10 95
vertex -47.5 15 100.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 5.5 88.5
vertex -47.5 38.5 123.5
vertex -47.5 -8 75.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 19.5 104.5
vertex -47.5 -29.5 55.5
vertex -47.5 38.5 123.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 8.5 103.5
vertex -47.5 -5.5 79.5
vertex -47.5 10 95
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 38.5 123.5
vertex -47.5 -19.5 63.5
vertex -47.5 -8 75.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 5.5 88.5
vertex -47.5 -6 67.5
vertex -47.5 16 96
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 17.5 97
vertex -47.5 17 97.5
vertex -47.5 -6 67.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 16 96
vertex -47.5 -6 67.5
vertex -47.5 17 97.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 60 144.5
vertex -47.5 54 104
vertex -47.5 54.5 103.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 57 91.5
vertex -47.5 59.5 127
vertex -47.5 60 133
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 57 91.5
vertex -47.5 57 89.5
vertex -47.5 59.5 127
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 57 85
vertex -47.5 51 85
vertex -47.5 56.5 83
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex -22 60.5 144.5
vertex -23 -60.5 144.5
vertex -23 60.5 144.5
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -23 60.5 144.5
vertex -22 60.5 23.5
vertex -22 60.5 144.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -57 83
vertex -47.5 -51 83
vertex -47.5 -56.5 85
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -57 78.5
vertex -47.5 -60.5 30
vertex -47.5 -57 76.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -54 64
vertex -47.5 -54.5 64.5
vertex -47.5 -60 23.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -18 70.5
vertex -47.5 -17.5 70
vertex -47.5 8.5 103.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 8.5 103.5
vertex -47.5 -17.5 70
vertex -47.5 -13.5 75.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -29.5 55.5
vertex -47.5 -19.5 63.5
vertex -47.5 38.5 123.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -5.5 79.5
vertex -47.5 -29.5 55.5
vertex -47.5 10 95
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -8 75.5
vertex -47.5 -6 67.5
vertex -47.5 5.5 88.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -14.5 67.5
vertex -47.5 -12.5 67.5
vertex -47.5 -8 75.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -8 75.5
vertex -47.5 -12.5 67.5
vertex -47.5 -6 67.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -12.5 67.5
vertex -47.5 -9.5 64.5
vertex -47.5 -6 67.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -28 57
vertex -47.5 -29.5 55.5
vertex -47.5 -5.5 79.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -19.5 63.5
vertex -47.5 -19.5 63.5
vertex -47.5 -29.5 55.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -38.5 44.5
vertex -47.5 -19.5 63.5
vertex -47.5 -29.5 55.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -10 63.5
vertex -47.5 -9.5 63.5
vertex -47.5 -9.5 64.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -9.5 63.5
vertex -47.5 -6 67.5
vertex -47.5 -9.5 64.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -57 76.5
vertex -47.5 -60.5 30
vertex -47.5 -60.5 28.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -54.5 64.5
vertex -47.5 -60.5 23.5
vertex -47.5 -60 23.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -47 33.5
vertex -47.5 -49.5 30
vertex -47.5 -42.5 33.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -47 33.5
vertex -47.5 -42.5 33.5
vertex -47.5 -41 35.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -37 29.5
vertex -47.5 -42.5 33.5
vertex -47.5 -49.5 30
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 -60.5 23.5
vertex -47.5 -51 29
vertex -47.5 -60 23.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 -49.5 30
vertex -47.5 -51 29
vertex -47.5 -41 23.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -51 29
vertex -47.5 -60.5 23.5
vertex -47.5 -41 23.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -49.5 30
vertex -47.5 -41 23.5
vertex -47.5 -37 29.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 -37 29.5
vertex -47.5 -41 23.5
vertex -47.5 -36.5 29.5
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -22 -60.5 144.5
vertex -22 -60.5 23.5
vertex -23 -60.5 23.5
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -22 -60.5 23.5
vertex -23 60.5 23.5
vertex -23 -60.5 23.5
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -22 -60.5 23.5
vertex -22 -42 23.5
vertex -23 60.5 23.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 51 83
vertex -47.5 56.5 83
vertex -47.5 51 85
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 55.5 68
vertex -47.5 55.5 65.5
vertex -47.5 56 70.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 53 34
vertex -47.5 56 70.5
vertex -47.5 55.5 65.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 44.5 41
vertex -47.5 44 33
vertex -47.5 45 39.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 45 40.5
vertex -47.5 44.5 41
vertex -47.5 52.5 34
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 52.5 34
vertex -47.5 44.5 41
vertex -47.5 45 39.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 45 40.5
vertex -47.5 52.5 34
vertex -47.5 52.5 34.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 44.5 41
vertex -47.5 42 23.5
vertex -47.5 44 33
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 53 34
vertex -47.5 53.5 33.5
vertex -47.5 56 70.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 52 29
vertex -47.5 44 33
vertex -47.5 42 23.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -47.5 42 23.5
vertex -47.5 52.5 29
vertex -47.5 52 29
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 42 23.5
vertex -47.5 52.5 23.5
vertex -47.5 52.5 29
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -47.5 52.5 29
vertex -47.5 52.5 29
vertex -47.5 52.5 23.5
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex -47.5 52.5 29
vertex -47.5 52.5 23.5
vertex -47.5 53 29
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -23 60.5 23.5
vertex -22 60.5 23.5
vertex -23 60.5 144.5
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -22 -42 23.5
vertex -22 60.5 23.5
vertex -23 60.5 23.5
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex -50 -34 131
vertex -47.5 -34 131
vertex -50 -40 125
endloop
endfacet
facet normal -0 0.7 -0.7
outer loop
vertex -47.5 -45.5 119.5
vertex -50 -47 118
vertex -47.5 -41 124
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex -47.5 -40 125
vertex -50 -40 125
vertex -47.5 -34 131
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex -50 -47 118
vertex -50 -41 124
vertex -47.5 -41 124
endloop
endfacet
facet normal 0 0.2 -1
outer loop
vertex -47.5 -18 139
vertex -50 -18 139
vertex -47.5 -1 142
endloop
endfacet
facet normal 0 0.2 -1
outer loop
vertex -50 -18 139
vertex -50 -1 142
vertex -47.5 -1 142
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex -47.5 -34 131
vertex -50 -34 131
vertex -47.5 -18 139
endloop
endfacet
facet normal 0 0.5 -0.9
outer loop
vertex -50 -18 139
vertex -47.5 -18 139
vertex -50 -34 131
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex -47.5 -1 142
vertex -50 -1 142
vertex -47.5 -1 107
endloop
endfacet
facet normal 0 0.9 -0.5
outer loop
vertex -47.5 -55 102.5
vertex -50 -55 102
vertex -47.5 -47 118
endloop
endfacet
facet normal 0 0.9 -0.5
outer loop
vertex -47.5 -55 102.5
vertex -47.5 -55 102
vertex -50 -55 102
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex -47.5 -46.5 118.5
vertex -50 -47 118
vertex -47.5 -45.5 119.5
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex -47.5 -46.5 118.5
vertex -47.5 -47 118
vertex -50 -47 118
endloop
endfacet
facet normal 0 0.9 -0.5
outer loop
vertex -50 -47 118
vertex -47.5 -47 118
vertex -50 -55 102
endloop
endfacet
facet normal 0 1 -0.2
outer loop
vertex -50 -55 102
vertex -47.5 -55 102
vertex -50 -58 85
endloop
endfacet
facet normal -0 1 -0.2
outer loop
vertex -47.5 -55.5 100
vertex -50 -58 85
vertex -47.5 -55 102
endloop
endfacet
facet normal 0 1 -0.2
outer loop
vertex -47.5 -56 97.5
vertex -50 -58 85
vertex -47.5 -55.5 100
endloop
endfacet
facet normal 0 1 -0.2
outer loop
vertex -47.5 -56 97.5
vertex -47.5 -58 85
vertex -50 -58 85
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -50 -58 85
vertex -47.5 -58 85
vertex -50 -23 85
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -47.5 -56.5 85
vertex -50 -23 85
vertex -47.5 -58 85
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -47.5 -56.5 85
vertex -47.5 -51 85
vertex -50 -23 85
endloop
endfacet
facet normal -0 0.7 0.7
outer loop
vertex -50 -40 125
vertex -47.5 -40 125
vertex -50 -15 100.5
endloop
endfacet
facet normal -0 -0.7 -0.7
outer loop
vertex -47.5 -41 124
vertex -50 -41 124
vertex -47.5 -16.5 99
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex -50 -41 124
vertex -50 -16.5 99
vertex -47.5 -16.5 99
endloop
endfacet
facet normal 0 0.7 0.7
outer loop
vertex -47.5 -15 100.5
vertex -50 -15 100.5
vertex -47.5 -40 125
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -50 -1 142
vertex -50 -1 107
vertex -47.5 -1 107
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex -50 -11.5 104
vertex -47.5 -15 100.5
vertex -47.5 -11.5 104
endloop
endfacet
facet normal 0 -0.3 1
outer loop
vertex -50 -11.5 104
vertex -47.5 -11.5 104
vertex -50 -1 107
endloop
endfacet
facet normal 0 -0.3 1
outer loop
vertex -47.5 -1 107
vertex -50 -1 107
vertex -47.5 -11.5 104
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex -50 -16.5 99
vertex -47.5 -20 95.5
vertex -47.5 -16.5 99
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex -50 -20 95.5
vertex -47.5 -20 95.5
vertex -50 -16.5 99
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -47.5 -51 85
vertex -47.5 -23 85
vertex -50 -23 85
endloop
endfacet
facet normal 0 -1 0.3
outer loop
vertex -47.5 -20 95.5
vertex -50 -20 95.5
vertex -47.5 -23 85
endloop
endfacet
facet normal 0 -1 0.3
outer loop
vertex -50 -23 85
vertex -47.5 -23 85
vertex -50 -20 95.5
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex -50 -15 100.5
vertex -47.5 -15 100.5
vertex -50 -11.5 104
endloop
endfacet
facet normal 0 -0.2 -1
outer loop
vertex -50 1 142
vertex -47.5 18 139
vertex -47.5 1 142
endloop
endfacet
facet normal 0 -0.2 -1
outer loop
vertex -50 1 142
vertex -50 18 139
vertex -47.5 18 139
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -50 1 107
vertex -50 1 142
vertex -47.5 1 142
endloop
endfacet
facet normal -0 -0.5 -0.9
outer loop
vertex -47.5 34 131
vertex -47.5 18 139
vertex -50 18 139
endloop
endfacet
facet normal 0 -0.5 -0.9
outer loop
vertex -50 18 139
vertex -50 34 131
vertex -47.5 34 131
endloop
endfacet
facet normal -0 -0.7 -0.7
outer loop
vertex -47.5 37 128
vertex -47.5 34 131
vertex -50 34 131
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex -50 40 125
vertex -47.5 40 125
vertex -50 34 131
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex -47.5 37 128
vertex -50 34 131
vertex -47.5 40 125.5
endloop
endfacet
facet normal -0 -0.7 -0.7
outer loop
vertex -47.5 40 125.5
vertex -50 34 131
vertex -47.5 40 125
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex -47.5 38.5 123.5
vertex -47.5 40 125
vertex -50 40 125
endloop
endfacet
facet normal -0 -0.7 -0.7
outer loop
vertex -50 47 118
vertex -47.5 41 124
vertex -50 41 124
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex -47.5 41 124
vertex -50 47 118
vertex -47.5 47 118
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex -47.5 1 107
vertex -50 1 107
vertex -47.5 1 142
endloop
endfacet
facet normal -0 0.3 1
outer loop
vertex -50 1 107
vertex -47.5 1 107
vertex -50 11.5 104
endloop
endfacet
facet normal -0 0.3 1
outer loop
vertex -47.5 9.5 104.5
vertex -50 11.5 104
vertex -47.5 1 107
endloop
endfacet
facet normal -0 0.7 0.7
outer loop
vertex -50 11.5 104
vertex -47.5 11.5 104
vertex -50 15 100.5
endloop
endfacet
facet normal -0 0.3 1
outer loop
vertex -47.5 9.5 104.5
vertex -47.5 10 104.5
vertex -50 11.5 104
endloop
endfacet
facet normal 0 0.3 1
outer loop
vertex -47.5 10 104.5
vertex -47.5 11.5 104
vertex -50 11.5 104
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex -50 41 124
vertex -47.5 41 124
vertex -50 16.5 99
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex -47.5 19.5 104.5
vertex -47.5 38.5 123.5
vertex -50 40 125
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex -47.5 29.5 112.5
vertex -50 16.5 99
vertex -47.5 41 124
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex -50 15 100.5
vertex -47.5 15 100.5
vertex -50 40 125
endloop
endfacet
facet normal -0 -0.7 0.7
outer loop
vertex -47.5 19.5 104.5
vertex -50 40 125
vertex -47.5 15 100.5
endloop
endfacet
facet normal -0 0.7 -0.7
outer loop
vertex -47.5 28 111
vertex -50 16.5 99
vertex -47.5 29.5 112.5
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex -47.5 28 111
vertex -47.5 16.5 99
vertex -50 16.5 99
endloop
endfacet
facet normal 0 0.7 0.7
outer loop
vertex -47.5 11.5 104
vertex -47.5 15 100.5
vertex -50 15 100.5
endloop
endfacet
facet normal -0 0.7 0.7
outer loop
vertex -50 16.5 99
vertex -47.5 16.5 99
vertex -50 20 95.5
endloop
endfacet
facet normal 0 0.7 0.7
outer loop
vertex -47.5 16.5 99
vertex -47.5 20 95.5
vertex -50 20 95.5
endloop
endfacet
facet normal -0 1 0.3
outer loop
vertex -50 20 95.5
vertex -47.5 20 95.5
vertex -50 23 85
endloop
endfacet
facet normal 0 1 0.3
outer loop
vertex -47.5 23 85
vertex -50 23 85
vertex -47.5 20 95.5
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -50 23 85
vertex -47.5 23 85
vertex -50 58 85
endloop
endfacet
facet normal -0 -0.9 -0.5
outer loop
vertex -47.5 54 104
vertex -47.5 47 118
vertex -50 47 118
endloop
endfacet
facet normal -0 -0.9 -0.5
outer loop
vertex -47.5 54 104
vertex -50 47 118
vertex -47.5 54.5 103.5
endloop
endfacet
facet normal 0 -0.9 -0.5
outer loop
vertex -50 47 118
vertex -50 55 102
vertex -47.5 55 102
endloop
endfacet
facet normal 0 -0.9 -0.5
outer loop
vertex -47.5 54.5 103.5
vertex -50 47 118
vertex -47.5 55 102
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -47.5 51 85
vertex -50 58 85
vertex -47.5 23 85
endloop
endfacet
facet normal -0 -1 -0.2
outer loop
vertex -47.5 57 91.5
vertex -47.5 55 102
vertex -50 55 102
endloop
endfacet
facet normal -0 -1 -0.2
outer loop
vertex -47.5 57 91.5
vertex -50 55 102
vertex -47.5 57 89.5
endloop
endfacet
facet normal 0 -1 -0.2
outer loop
vertex -50 58 85
vertex -47.5 58 85
vertex -50 55 102
endloop
endfacet
facet normal 0 -1 -0.2
outer loop
vertex -47.5 57 89.5
vertex -50 55 102
vertex -47.5 58 85
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -47.5 51 85
vertex -47.5 57 85
vertex -50 58 85
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -47.5 57 85
vertex -47.5 58 85
vertex -50 58 85
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -47.5 -57 83
vertex -47.5 -58 83
vertex -50 -58 83
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex -47.5 -57 83
vertex -50 -58 83
vertex -47.5 -51 83
endloop
endfacet
facet normal -0 1 0.2
outer loop
vertex -50 -58 83
vertex -47.5 -58 83
vertex -50 -55 66
endloop
endfacet
facet normal -0 1 0.2
outer loop
vertex -47.5 -57 78.5
vertex -50 -55 66
vertex -47.5 -58 83
endloop
endfacet
facet normal -0 1 0.2
outer loop
vertex -47.5 -57 78.5
vertex -47.5 -57 76.5
vertex -50 -55 66
endloop
endfacet
facet normal 0 1 0.2
outer loop
vertex -47.5 -57 76.5
vertex -47.5 -55 66
vertex -50 -55 66
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex -47.5 -51 83
vertex -50 -58 83
vertex -47.5 -23 83
endloop
endfacet
facet normal -0 0.9 0.5
outer loop
vertex -50 -55 66
vertex -47.5 -55 66
vertex -50 -47 50
endloop
endfacet
facet normal 0 0.9 0.5
outer loop
vertex -47.5 -54.5 64.5
vertex -50 -47 50
vertex -47.5 -55 66
endloop
endfacet
facet normal -0 0.9 0.5
outer loop
vertex -47.5 -54.5 64.5
vertex -47.5 -54 64
vertex -50 -47 50
endloop
endfacet
facet normal 0 0.9 0.5
outer loop
vertex -47.5 -54 64
vertex -47.5 -47 50
vertex -50 -47 50
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -50 -58 83
vertex -50 -23 83
vertex -47.5 -23 83
endloop
endfacet
facet normal -0 -1 -0.3
outer loop
vertex -47.5 -23 83
vertex -50 -23 83
vertex -47.5 -20 72.5
endloop
endfacet
facet normal 0 -1 -0.3
outer loop
vertex -50 -23 83
vertex -50 -20 72.5
vertex -47.5 -20 72.5
endloop
endfacet
facet normal -0 -0.7 -0.7
outer loop
vertex -47.5 -18 70.5
vertex -47.5 -20 72.5
vertex -50 -20 72.5
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex -47.5 -18 70.5
vertex -50 -20 72.5
vertex -47.5 -17.5 70
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex -50 -20 72.5
vertex -50 -16.5 69
vertex -47.5 -16.5 69
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex -47.5 -17.5 70
vertex -50 -20 72.5
vertex -47.5 -16.5 69
endloop
endfacet
facet normal -0 -0.7 -0.7
outer loop
vertex -47.5 -11.5 64
vertex -47.5 -15 67.5
vertex -50 -15 67.5
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex -47.5 -28 57
vertex -47.5 -16.5 69
vertex -50 -16.5 69
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex -50 -15 67.5
vertex -47.5 -15 67.5
vertex -50 -40 43
endloop
endfacet
facet normal -0 -0.7 0.7
outer loop
vertex -47.5 -29.5 55.5
vertex -47.5 -28 57
vertex -50 -16.5 69
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex -47.5 -19.5 63.5
vertex -50 -40 43
vertex -47.5 -15 67.5
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex -47.5 -29.5 55.5
vertex -50 -16.5 69
vertex -47.5 -41 44
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex -47.5 -41 44
vertex -50 -16.5 69
vertex -50 -41 44
endloop
endfacet
facet normal -0 0.7 -0.7
outer loop
vertex -47.5 -38.5 44.5
vertex -50 -40 43
vertex -47.5 -19.5 63.5
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex -47.5 -11.5 64
vertex -50 -15 67.5
vertex -50 -11.5 64
endloop
endfacet
facet normal -0 -0.3 -1
outer loop
vertex -47.5 -10 63.5
vertex -47.5 -11.5 64
vertex -50 -11.5 64
endloop
endfacet
facet normal 0 -0.3 -1
outer loop
vertex -47.5 -10 63.5
vertex -50 -11.5 64
vertex -47.5 -9.5 63.5
endloop
endfacet
facet normal 0 -0.3 -1
outer loop
vertex -50 -11.5 64
vertex -50 -1 61
vertex -47.5 -1 61
endloop
endfacet
facet normal -0 -0.3 -1
outer loop
vertex -47.5 -9.5 63.5
vertex -50 -11.5 64
vertex -47.5 -1 61
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex -47.5 -1 61
vertex -50 -1 61
vertex -47.5 -1 26
endloop
endfacet
facet normal -0 0.7 0.7
outer loop
vertex -47.5 -41 44
vertex -50 -47 50
vertex -47.5 -47 50
endloop
endfacet
facet normal 0 0.7 0.7
outer loop
vertex -50 -47 50
vertex -47.5 -41 44
vertex -50 -41 44
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex -47.5 -38.5 44.5
vertex -47.5 -40 43
vertex -50 -40 43
endloop
endfacet
facet normal -0 0.7 0.7
outer loop
vertex -50 -40 43
vertex -47.5 -40 43
vertex -50 -34 37
endloop
endfacet
facet normal 0 0.7 0.7
outer loop
vertex -47.5 -40 43
vertex -47.5 -34 37
vertex -50 -34 37
endloop
endfacet
facet normal -0 0.5 0.9
outer loop
vertex -50 -34 37
vertex -47.5 -34 37
vertex -50 -18 29
endloop
endfacet
facet normal 0 0.5 0.9
outer loop
vertex -47.5 -34 37
vertex -47.5 -18 29
vertex -50 -18 29
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -50 -1 61
vertex -50 -1 26
vertex -47.5 -1 26
endloop
endfacet
facet normal -0 0.2 1
outer loop
vertex -50 -18 29
vertex -47.5 -18 29
vertex -50 -1 26
endloop
endfacet
facet normal 0 0.2 1
outer loop
vertex -47.5 -1 26
vertex -50 -1 26
vertex -47.5 -18 29
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex -50 11.5 64
vertex -50 15 67.5
vertex -47.5 15 67.5
endloop
endfacet
facet normal 0 1 -0.3
outer loop
vertex -47.5 20 72.5
vertex -50 23 83
vertex -47.5 23 83
endloop
endfacet
facet normal 0 1 -0.3
outer loop
vertex -50 20 72.5
vertex -50 23 83
vertex -47.5 20 72.5
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -47.5 51 83
vertex -47.5 23 83
vertex -50 23 83
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex -50 20 72.5
vertex -47.5 20 72.5
vertex -50 16.5 69
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex -47.5 16.5 69
vertex -50 16.5 69
vertex -47.5 20 72.5
endloop
endfacet
facet normal 0 0.3 -1
outer loop
vertex -50 1 61
vertex -50 11.5 64
vertex -47.5 11.5 64
endloop
endfacet
facet normal 0 0.3 -1
outer loop
vertex -47.5 1 61
vertex -50 1 61
vertex -47.5 11.5 64
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex -47.5 11.5 64
vertex -50 11.5 64
vertex -47.5 15 67.5
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -50 1 61
vertex -47.5 1 61
vertex -50 1 26
endloop
endfacet
facet normal -0 0.7 0.7
outer loop
vertex -50 16.5 69
vertex -47.5 16.5 69
vertex -50 41 44
endloop
endfacet
facet normal -0 -0.7 -0.7
outer loop
vertex -47.5 15 67.5
vertex -50 15 67.5
vertex -47.5 40 43
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex -50 15 67.5
vertex -50 40 43
vertex -47.5 40 43
endloop
endfacet
facet normal 0 0.7 0.7
outer loop
vertex -47.5 41 44
vertex -50 41 44
vertex -47.5 16.5 69
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -50 23 83
vertex -50 58 83
vertex -47.5 58 83
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex -47.5 51 83
vertex -50 23 83
vertex -47.5 56.5 83
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex -47.5 56.5 83
vertex -50 23 83
vertex -47.5 58 83
endloop
endfacet
facet normal 0 -1 0.2
outer loop
vertex -47.5 56 70.5
vertex -47.5 58 83
vertex -50 58 83
endloop
endfacet
facet normal 0 -1 0.2
outer loop
vertex -50 58 83
vertex -50 55 66
vertex -47.5 55 66
endloop
endfacet
facet normal 0 -1 0.2
outer loop
vertex -47.5 55.5 68
vertex -47.5 56 70.5
vertex -50 58 83
endloop
endfacet
facet normal -0 -1 0.2
outer loop
vertex -47.5 55.5 68
vertex -50 58 83
vertex -47.5 55 66
endloop
endfacet
facet normal 0 -0.9 0.5
outer loop
vertex -50 55 66
vertex -50 47 50
vertex -47.5 47 50
endloop
endfacet
facet normal 0 -0.9 0.5
outer loop
vertex -47.5 47 50
vertex -47.5 55 66
vertex -50 55 66
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex -47.5 1 26
vertex -50 1 26
vertex -47.5 1 61
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex -50 18 29
vertex -47.5 18 29
vertex -50 34 37
endloop
endfacet
facet normal 0 -0.5 0.9
outer loop
vertex -47.5 34 37
vertex -50 34 37
vertex -47.5 18 29
endloop
endfacet
facet normal 0 -0.2 1
outer loop
vertex -50 1 26
vertex -47.5 1 26
vertex -50 18 29
endloop
endfacet
facet normal 0 -0.2 1
outer loop
vertex -47.5 18 29
vertex -50 18 29
vertex -47.5 1 26
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex -50 41 44
vertex -47.5 41 44
vertex -50 47 50
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex -47.5 40 43
vertex -50 40 43
vertex -47.5 34 37
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex -47.5 41 44
vertex -47.5 47 50
vertex -50 47 50
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex -50 34 37
vertex -47.5 34 37
vertex -50 40 43
endloop
endfacet
facet normal 0.9 0 -0.4
outer loop
vertex -40 67 41.5
vertex -41.5 69.5 39
vertex -40 69.5 41.5
endloop
endfacet
facet normal 0.9 0 -0.4
outer loop
vertex -40 67 41.5
vertex -41.5 67 39
vertex -41.5 69.5 39
endloop
endfacet
facet normal 0.4 0 -0.9
outer loop
vertex -40 67 41.5
vertex -40 69.5 41.5
vertex -37.5 67 43
endloop
endfacet
facet normal 0.4 0 -0.9
outer loop
vertex -37.5 67 43
vertex -40 69.5 41.5
vertex -37.5 69.5 43
endloop
endfacet
facet normal 0.9 0 0.4
outer loop
vertex -41.5 67 39
vertex -40 69.5 36.5
vertex -41.5 69.5 39
endloop
endfacet
facet normal 0.9 -0 0.4
outer loop
vertex -41.5 67 39
vertex -40 67 36.5
vertex -40 69.5 36.5
endloop
endfacet
facet normal 0.4 0 0.9
outer loop
vertex -40 67 36.5
vertex -37.5 69.5 35
vertex -40 69.5 36.5
endloop
endfacet
facet normal 0.4 -0 0.9
outer loop
vertex -40 67 36.5
vertex -37.5 67 35
vertex -37.5 69.5 35
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -37.5 67 43
vertex -37.5 69.5 43
vertex -32 67 43
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -32 67 43
vertex -37.5 69.5 43
vertex -32 69.5 43
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -37.5 69.5 35
vertex -37.5 67 35
vertex -32 69.5 35
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -37.5 67 35
vertex -32 67 35
vertex -32 69.5 35
endloop
endfacet
facet normal -0.4 0 -0.9
outer loop
vertex -31.5 67 42.5
vertex -32 67 43
vertex -32 69.5 43
endloop
endfacet
facet normal -0.4 -0 -0.9
outer loop
vertex -31.5 67 42.5
vertex -32 69.5 43
vertex -29.5 65.5 41.5
endloop
endfacet
facet normal -0.4 -0 -0.9
outer loop
vertex -32 69.5 43
vertex -29.5 69.5 41.5
vertex -29.5 65.5 41.5
endloop
endfacet
facet normal -0.9 0 -0.4
outer loop
vertex -29.5 65.5 41.5
vertex -29.5 69.5 41.5
vertex -28.5 64.5 39
endloop
endfacet
facet normal -0.4 0 0.9
outer loop
vertex -31.5 67 35.5
vertex -32 69.5 35
vertex -32 67 35
endloop
endfacet
facet normal -0.4 -0 0.9
outer loop
vertex -31.5 67 35.5
vertex -29.5 69.5 36.5
vertex -32 69.5 35
endloop
endfacet
facet normal -0.4 0 0.9
outer loop
vertex -31.5 67 35.5
vertex -29.5 65.5 36.5
vertex -29.5 69.5 36.5
endloop
endfacet
facet normal -0.9 0 0.4
outer loop
vertex -28.5 69.5 39
vertex -29.5 69.5 36.5
vertex -29.5 65.5 36.5
endloop
endfacet
facet normal -0.9 -0 -0.4
outer loop
vertex -29.5 69.5 41.5
vertex -28.5 69.5 39
vertex -28.5 64.5 39
endloop
endfacet
facet normal -0.9 0 0.4
outer loop
vertex -28.5 69.5 39
vertex -29.5 65.5 36.5
vertex -28.5 64.5 39
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex -42 -68.5 155
vertex -42 -68.5 157
vertex -43 -65.5 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -42 -68.5 155
vertex -43 -65.5 155
vertex -42 -65.5 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -42 -68.5 155
vertex -42 -65.5 155
vertex -39 -69.5 155
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex -42 -68.5 155
vertex -39 -69.5 155
vertex -42 -68.5 157
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex -43 -65.5 155
vertex -42 -68.5 157
vertex -43 -65.5 157
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex -39 -69.5 155
vertex -39 -69.5 157
vertex -42 -68.5 157
endloop
endfacet
facet normal -0.7 -0.3 0.7
outer loop
vertex -42 -68.5 157
vertex -41 -67.5 158
vertex -43 -65.5 157
endloop
endfacet
facet normal -0.7 -0.3 0.7
outer loop
vertex -43 -65.5 157
vertex -41 -67.5 158
vertex -42 -65.5 158
endloop
endfacet
facet normal -0.3 -0.7 0.7
outer loop
vertex -42 -68.5 157
vertex -39 -69.5 157
vertex -41 -67.5 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -42 -65.5 158
vertex -41 -67.5 158
vertex -39 -68.5 158
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -42 -65.5 158
vertex -40 -61.5 158
vertex -41 -60.5 158
endloop
endfacet
facet normal -0.3 -0.7 0.7
outer loop
vertex -41 -67.5 158
vertex -39 -69.5 157
vertex -39 -68.5 158
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex -39 -69.5 155
vertex -38.5 -47 155
vertex -38 -48.5 155
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -39 -69.5 155
vertex -38 -48.5 155
vertex -25 -48.5 155
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -35 -54.5 158
vertex -37 -48.5 158
vertex -36 -53.5 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -40 -53.5 158
vertex -37 -48.5 158
vertex -38 -48 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -40 -53.5 158
vertex -38 -48 158
vertex -38.5 -47 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -40 -53.5 158
vertex -36 -53.5 158
vertex -37 -48.5 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -39 -69.5 155
vertex -25 -48.5 155
vertex -18 -51 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -39 -69.5 155
vertex -18 -51 155
vertex -16.5 -51.5 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -35 -54.5 158
vertex -16.5 -51.5 158
vertex -17.5 -51 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -35 -54.5 158
vertex -24 -48.5 158
vertex -37 -48.5 158
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -23.5 -48 155
vertex -18 -51 155
vertex -25 -48.5 155
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -23 -47 155
vertex -18 -51 155
vertex -23.5 -48 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -24 -45.5 155
vertex -18 -51 155
vertex -23 -47 155
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -35 -54.5 158
vertex -17.5 -51 158
vertex -24 -48.5 158
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -24 -48.5 158
vertex -18 -50 158
vertex -23 -47 158
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -23 -47 158
vertex -18 -50 158
vertex -23.5 -46 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -43 -65.5 155
vertex -43 65.5 155
vertex -42 -65.5 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -42 -65.5 155
vertex -42 68.5 155
vertex -39 -69.5 155
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -43 -65.5 155
vertex -43 -65.5 157
vertex -43 65.5 157
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -39 -69.5 155
vertex -37 45.5 155
vertex -38.5 -47 155
endloop
endfacet
facet normal -0.7 0 0.7
outer loop
vertex -43 -65.5 157
vertex -42 -65.5 158
vertex -43 65.5 157
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -42 -65.5 158
vertex -41 -60.5 158
vertex -41 67.5 158
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -38.5 -47 155
vertex -37 45.5 155
vertex -38 -46 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -41 -60.5 158
vertex -41 -54.5 158
vertex -41 67.5 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -41 -54.5 158
vertex -40 -53.5 158
vertex -41 67.5 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -40 -53.5 158
vertex -38.5 -47 158
vertex -40 53.5 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -40 53.5 158
vertex -38.5 -47 158
vertex -38 -45.5 158
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -40 53.5 158
vertex -38 -45.5 158
vertex -25 -45.5 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -18 30 158
vertex -25 -45.5 158
vertex -23.5 -46 158
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -38 -46 155
vertex -18 50 155
vertex -37 -45.5 155
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -37 -45.5 155
vertex -18 50 155
vertex -24 -45.5 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -35 -54.5 158
vertex -11 -51.5 158
vertex -16.5 -51.5 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -35 -54.5 158
vertex -5.5 -51.5 158
vertex -11 -51.5 158
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -39 -69.5 155
vertex 39 -69.5 157
vertex -39 -69.5 157
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -42 -65.5 158
vertex 41 -67.5 158
vertex -40 -61.5 158
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex -39 -69.5 157
vertex 39 -69.5 157
vertex -39 -68.5 158
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -42 -65.5 158
vertex -39 -68.5 158
vertex 41 -67.5 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -40 -61.5 158
vertex 41 -67.5 158
vertex -36 -61.5 158
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -18 -50 158
vertex -24 -48.5 158
vertex -17.5 -51 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -11 -51.5 155
vertex -15.5 -51 155
vertex -12 -51 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -15.5 -51 155
vertex -12.5 -50 155
vertex -12 -51 155
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -16.5 -51.5 158
vertex -12 -51 158
vertex -15.5 -51 158
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -15.5 -51 158
vertex -12 -51 158
vertex -15 -50 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -16.5 -51.5 158
vertex -11 -51.5 158
vertex -12 -51 158
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -36 -61.5 158
vertex 41 -67.5 158
vertex -35 -60.5 158
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -35 -60.5 158
vertex 41 -67.5 158
vertex -35 -54.5 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -39 -69.5 155
vertex -16.5 -51.5 155
vertex 42 -68.5 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -35 -54.5 158
vertex 35 -54.5 158
vertex -5.5 -51.5 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -10 -51 155
vertex -5.5 -51.5 155
vertex -11 -51.5 155
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -10 -51 155
vertex -7 -50 155
vertex -6.5 -51 155
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -10 -51 155
vertex -6.5 -51 155
vertex -5.5 -51.5 155
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -11 -51.5 158
vertex -6.5 -51 158
vertex -10 -51 158
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -10 -51 158
vertex -6.5 -51 158
vertex -9.5 -50 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -11 -51.5 158
vertex -5.5 -51.5 158
vertex -6.5 -51 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -4.5 -51 155
vertex 0 -51.5 155
vertex -5.5 -51.5 155
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -4.5 -51 155
vertex -1.5 -50 155
vertex -1 -51 155
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -4.5 -51 155
vertex -1 -51 155
vertex 0 -51.5 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -5.5 -51.5 158
vertex -1 -51 158
vertex -4.5 -51 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -4.5 -51 158
vertex -1.5 -50 158
vertex -4 -50 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -5.5 -51.5 158
vertex 0 -51.5 158
vertex -1 -51 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -4.5 -51 158
vertex -1 -51 158
vertex -1.5 -50 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -18 30 158
vertex -23.5 -46 158
vertex -18 -50 158
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -18 50 155
vertex -18 -51 155
vertex -24 -45.5 155
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -15 50 155
vertex -12.5 -50 155
vertex -15.5 -51 155
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -12.5 50 158
vertex -15 -50 158
vertex -12 -51 158
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -9.5 50 155
vertex -7 -50 155
vertex -10 -51 155
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -7 50 158
vertex -9.5 -50 158
vertex -6.5 -51 158
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -4 50 155
vertex -1.5 -50 155
vertex -4.5 -51 155
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -1.5 50 158
vertex -4 -50 158
vertex -1.5 -50 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -39 -69.5 155
vertex -38.5 47 155
vertex -38 46 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -39 -69.5 155
vertex -38 46 155
vertex -37 45.5 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -39 -69.5 155
vertex -42 68.5 155
vertex -38.5 47 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -38 -46 155
vertex -37 45.5 155
vertex -25 45.5 155
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -25 -45.5 158
vertex -38 46 158
vertex -38.5 47 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -25 -45.5 158
vertex -37 45.5 158
vertex -38 46 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -42 -65.5 155
vertex -43 65.5 155
vertex -42 68.5 155
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -43 -65.5 155
vertex -43 65.5 157
vertex -43 65.5 155
endloop
endfacet
facet normal -0.7 0 0.7
outer loop
vertex -42 -65.5 158
vertex -42 65.5 158
vertex -43 65.5 157
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -42 -65.5 158
vertex -41 67.5 158
vertex -42 65.5 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -40 -53.5 158
vertex -41 54.5 158
vertex -41 67.5 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -40 -53.5 158
vertex -40 53.5 158
vertex -41 54.5 158
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -40 53.5 158
vertex -25 -45.5 158
vertex -38.5 47 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -38 -46 155
vertex -25 45.5 155
vertex -23.5 46 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -38 -46 155
vertex -23.5 46 155
vertex -18 50 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -25 -45.5 158
vertex -18 30 158
vertex -37 45.5 158
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -40 53.5 158
vertex -38.5 47 158
vertex -38 48 158
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -40 53.5 158
vertex -38 48 158
vertex -37 48.5 158
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -40 53.5 158
vertex -37 48.5 158
vertex -36 53.5 158
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -36 53.5 158
vertex -37 48.5 158
vertex -25 48.5 158
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -42 68.5 155
vertex -38 48 155
vertex -38.5 47 155
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -42 68.5 155
vertex -37 48.5 155
vertex -38 48 155
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -43 65.5 155
vertex -43 65.5 157
vertex -42 68.5 155
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -42 68.5 155
vertex -42 68.5 157
vertex -39 69.5 155
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -42 68.5 155
vertex -43 65.5 157
vertex -42 68.5 157
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -39 69.5 155
vertex -42 68.5 157
vertex -39 69.5 157
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -41 54.5 158
vertex -41 60.5 158
vertex -41 67.5 158
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -41 60.5 158
vertex -40 61.5 158
vertex -41 67.5 158
endloop
endfacet
facet normal -0.7 0.3 0.7
outer loop
vertex -43 65.5 157
vertex -41 67.5 158
vertex -42 68.5 157
endloop
endfacet
facet normal -0.7 0.3 0.7
outer loop
vertex -43 65.5 157
vertex -42 65.5 158
vertex -41 67.5 158
endloop
endfacet
facet normal -0.3 0.7 0.7
outer loop
vertex -42 68.5 157
vertex -41 67.5 158
vertex -39 69.5 157
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -41 67.5 158
vertex -40 61.5 158
vertex -36 61.5 158
endloop
endfacet
facet normal -0.3 0.7 0.7
outer loop
vertex -41 67.5 158
vertex -39 68.5 158
vertex -39 69.5 157
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -42 68.5 155
vertex -25 48.5 155
vertex -37 48.5 155
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -41 67.5 158
vertex -36 61.5 158
vertex -35 60.5 158
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -37 45.5 158
vertex -18 30 158
vertex -25 45.5 158
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -25 45.5 158
vertex -18 30 158
vertex -23.5 46 158
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -23 47 155
vertex -18 50 155
vertex -23.5 46 155
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -23.5 48 155
vertex -18 50 155
vertex -23 47 155
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -35 54.5 158
vertex -25 48.5 158
vertex -18 51 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -23.5 46 158
vertex -18 51 158
vertex -23 47 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -23 47 158
vertex -18 51 158
vertex -23.5 48 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -23.5 48 158
vertex -18 51 158
vertex -25 48.5 158
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -42 68.5 155
vertex -23.5 48 155
vertex -25 48.5 155
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -42 68.5 155
vertex -18 50 155
vertex -23.5 48 155
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -36 53.5 158
vertex -25 48.5 158
vertex -35 54.5 158
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -42 68.5 155
vertex -17.5 51 155
vertex -18 50 155
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -42 68.5 155
vertex -16.5 51.5 155
vertex -17.5 51 155
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -35 54.5 158
vertex -18 51 158
vertex -16.5 51.5 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -12.5 -50 155
vertex -15 50 155
vertex -12.5 50 155
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -12.5 50 158
vertex -15 50 158
vertex -15 -50 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -7 -50 155
vertex -9.5 50 155
vertex -7 50 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -9.5 -50 158
vertex -7 50 158
vertex -9.5 50 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -1.5 -50 155
vertex -4 50 155
vertex -1.5 50 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -4 -50 158
vertex -1.5 50 158
vertex -4 50 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -18 30 158
vertex -18 51 158
vertex -23.5 46 158
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -15.5 51 155
vertex -12.5 50 155
vertex -15 50 155
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -15.5 51 155
vertex -12 51 155
vertex -12.5 50 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -12 51 155
vertex -15.5 51 155
vertex -11 51.5 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -15 50 158
vertex -12 51 158
vertex -15.5 51 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -15.5 51 158
vertex -11 51.5 158
vertex -16.5 51.5 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -15 50 158
vertex -12.5 50 158
vertex -12 51 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -15.5 51 158
vertex -12 51 158
vertex -11 51.5 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -35 54.5 158
vertex 35 60.5 158
vertex -35 60.5 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -42 68.5 155
vertex -39 69.5 155
vertex 39 69.5 155
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -39 69.5 155
vertex -39 69.5 157
vertex 39 69.5 157
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -41 67.5 158
vertex -35 60.5 158
vertex 35 60.5 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -41 67.5 158
vertex 39 68.5 158
vertex -39 68.5 158
endloop
endfacet
facet normal -0 0.7 0.7
outer loop
vertex -39 69.5 157
vertex -39 68.5 158
vertex 39 68.5 158
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -10 51 155
vertex -7 50 155
vertex -9.5 50 155
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -11 51.5 155
vertex -6.5 51 155
vertex -10 51 155
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -10 51 155
vertex -6.5 51 155
vertex -7 50 155
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -11 51.5 155
vertex -5.5 51.5 155
vertex -6.5 51 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -10 51 158
vertex -5.5 51.5 158
vertex -11 51.5 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -9.5 50 158
vertex -6.5 51 158
vertex -10 51 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -9.5 50 158
vertex -7 50 158
vertex -6.5 51 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -10 51 158
vertex -6.5 51 158
vertex -5.5 51.5 158
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -5.5 51.5 155
vertex -1 51 155
vertex -4.5 51 155
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -4.5 51 155
vertex -1.5 50 155
vertex -4 50 155
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -4.5 51 155
vertex -1 51 155
vertex -1.5 50 155
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -5.5 51.5 155
vertex 0 51.5 155
vertex -1 51 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -4 50 158
vertex -1 51 158
vertex -4.5 51 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -4.5 51 158
vertex 0 51.5 158
vertex -5.5 51.5 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -4 50 158
vertex -1.5 50 158
vertex -1 51 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -4.5 51 158
vertex -1 51 158
vertex 0 51.5 158
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -35 54.5 158
vertex -16.5 51.5 158
vertex 35 60.5 158
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -42 68.5 155
vertex 39 69.5 155
vertex -16.5 51.5 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 42 -68.5 155
vertex -16.5 -51.5 155
vertex -15.5 -51 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 42 -68.5 155
vertex -15.5 -51 155
vertex -11 -51.5 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 42 -68.5 155
vertex -11 -51.5 155
vertex -5.5 -51.5 155
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 35 -54.5 158
vertex 0 -51.5 158
vertex -5.5 -51.5 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 0 -51.5 155
vertex 1 -51 155
vertex 5.5 -51.5 155
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 1.5 -50 155
vertex 4.5 -51 155
vertex 1 -51 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 1.5 -50 155
vertex 4 -50 155
vertex 4.5 -51 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 1 -51 155
vertex 4.5 -51 155
vertex 5.5 -51.5 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 0 -51.5 158
vertex 4.5 -51 158
vertex 1 -51 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 1 -51 158
vertex 4 -50 158
vertex 1.5 -50 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 0 -51.5 158
vertex 5.5 -51.5 158
vertex 4.5 -51 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 1 -51 158
vertex 4.5 -51 158
vertex 4 -50 158
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 6.5 -51 155
vertex 11 -51.5 155
vertex 5.5 -51.5 155
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 7 -50 155
vertex 10 -51 155
vertex 6.5 -51 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 6.5 -51 155
vertex 10 -51 155
vertex 11 -51.5 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 7 -50 155
vertex 9.5 -50 155
vertex 10 -51 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 5.5 -51.5 158
vertex 10 -51 158
vertex 6.5 -51 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 6.5 -51 158
vertex 9.5 -50 158
vertex 7 -50 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 6.5 -51 158
vertex 10 -51 158
vertex 9.5 -50 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 5.5 -51.5 158
vertex 11 -51.5 158
vertex 10 -51 158
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -39 -69.5 155
vertex 39 -69.5 155
vertex 39 -69.5 157
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -39 -69.5 155
vertex 42 -68.5 155
vertex 39 -69.5 155
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex -39 -68.5 158
vertex 39 -69.5 157
vertex 39 -68.5 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -39 -68.5 158
vertex 39 -68.5 158
vertex 41 -67.5 158
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -35 -54.5 158
vertex 41 -67.5 158
vertex 36 -61.5 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 42 -68.5 155
vertex -5.5 -51.5 155
vertex 0 -51.5 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 42 -68.5 155
vertex 0 -51.5 155
vertex 5.5 -51.5 155
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -35 -54.5 158
vertex 36 -61.5 158
vertex 35 -60.5 158
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -35 -54.5 158
vertex 35 -60.5 158
vertex 35 -54.5 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 35 -54.5 158
vertex 5.5 -51.5 158
vertex 0 -51.5 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 42 -68.5 155
vertex 5.5 -51.5 155
vertex 11 -51.5 155
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 35 -54.5 158
vertex 11 -51.5 158
vertex 5.5 -51.5 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 35 -54.5 158
vertex 16.5 -51.5 158
vertex 11 -51.5 158
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 12 -51 155
vertex 16.5 -51.5 155
vertex 11 -51.5 155
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 12.5 -50 155
vertex 15.5 -51 155
vertex 12 -51 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 12 -51 155
vertex 15.5 -51 155
vertex 16.5 -51.5 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 12.5 -50 155
vertex 15 -50 155
vertex 15.5 -51 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 11 -51.5 158
vertex 15.5 -51 158
vertex 12 -51 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 12 -51 158
vertex 15 -50 158
vertex 12.5 -50 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 11 -51.5 158
vertex 16.5 -51.5 158
vertex 15.5 -51 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 12 -51 158
vertex 15.5 -51 158
vertex 15 -50 158
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 18 -50 155
vertex 23.5 -48 155
vertex 17.5 -51 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 18 -51 158
vertex 23.5 -46 158
vertex 18 -30 158
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 1.5 50 155
vertex 4 -50 155
vertex 1.5 -50 155
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 4 50 158
vertex 1.5 -50 158
vertex 4 -50 158
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 7 50 155
vertex 9.5 -50 155
vertex 7 -50 155
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 9.5 50 158
vertex 7 -50 158
vertex 9.5 -50 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 18 -50 155
vertex 18 32 155
vertex 23 -47 155
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 12.5 50 155
vertex 15 -50 155
vertex 12.5 -50 155
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 15 50 158
vertex 12.5 -50 158
vertex 15 -50 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 42 -68.5 155
vertex 11 -51.5 155
vertex 16.5 -51.5 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 42 -68.5 155
vertex 16.5 -51.5 155
vertex 17.5 -51 155
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 35 -54.5 158
vertex 18 -51 158
vertex 16.5 -51.5 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 42 -68.5 155
vertex 17.5 -51 155
vertex 25 -48.5 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 35 -54.5 158
vertex 36 -53.5 158
vertex 25 -48.5 158
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 25 -48.5 155
vertex 17.5 -51 155
vertex 23.5 -48 155
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 23.5 -48 155
vertex 18 -50 155
vertex 23 -47 155
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 23.5 -48 158
vertex 18 -51 158
vertex 25 -48.5 158
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 23 -47 158
vertex 18 -51 158
vertex 23.5 -48 158
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 23.5 -46 158
vertex 18 -51 158
vertex 23 -47 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 35 -54.5 158
vertex 25 -48.5 158
vertex 18 -51 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 25 -45.5 158
vertex 18 -30 158
vertex 23.5 -46 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 42 -68.5 155
vertex 25 -48.5 155
vertex 37 -48.5 155
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 39 -69.5 155
vertex 42 -68.5 155
vertex 39 -69.5 157
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 42 -68.5 155
vertex 43 -65.5 155
vertex 42 -68.5 157
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 42 -68.5 155
vertex 42 -68.5 157
vertex 39 -69.5 157
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 43 -65.5 155
vertex 43 -65.5 157
vertex 42 -68.5 157
endloop
endfacet
facet normal 0.3 -0.7 0.7
outer loop
vertex 39 -69.5 157
vertex 41 -67.5 158
vertex 39 -68.5 158
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex 36 -61.5 158
vertex 41 -67.5 158
vertex 40 -61.5 158
endloop
endfacet
facet normal 0.3 -0.7 0.7
outer loop
vertex 39 -69.5 157
vertex 42 -68.5 157
vertex 41 -67.5 158
endloop
endfacet
facet normal 0.7 -0.3 0.7
outer loop
vertex 42 -68.5 157
vertex 43 -65.5 157
vertex 41 -67.5 158
endloop
endfacet
facet normal 0.7 -0.3 0.7
outer loop
vertex 43 -65.5 157
vertex 42 -65.5 158
vertex 41 -67.5 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 40 -61.5 158
vertex 41 -67.5 158
vertex 41 -60.5 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 41 -67.5 158
vertex 41 -54.5 158
vertex 41 -60.5 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 42 -68.5 155
vertex 37 -48.5 155
vertex 38 -48 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 42 -68.5 155
vertex 38 -48 155
vertex 38.5 -47 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 36 -53.5 158
vertex 37 -48.5 158
vertex 25 -48.5 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 36 -53.5 158
vertex 40 -53.5 158
vertex 37 -48.5 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 40 -53.5 158
vertex 38 -48 158
vertex 37 -48.5 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 40 -53.5 158
vertex 38.5 -47 158
vertex 38 -48 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 23 -47 155
vertex 18 32 155
vertex 23.5 -46 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 23.5 -46 155
vertex 18 32 155
vertex 25 -45.5 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 25 -45.5 155
vertex 18 32 155
vertex 37 -45.5 155
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 18 -30 158
vertex 25 -45.5 158
vertex 37 45.5 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 42 -68.5 155
vertex 38.5 -47 155
vertex 38 46 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 42 -68.5 155
vertex 43 65.5 155
vertex 43 -65.5 155
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 43 -65.5 155
vertex 43 65.5 157
vertex 43 -65.5 157
endloop
endfacet
facet normal 0.7 0 0.7
outer loop
vertex 43 -65.5 157
vertex 42 65.5 158
vertex 42 -65.5 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 41 -67.5 158
vertex 42 -65.5 158
vertex 42 65.5 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 41 -67.5 158
vertex 41 67.5 158
vertex 41 -54.5 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 37 -45.5 155
vertex 38 46 155
vertex 38 -46 155
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 40 53.5 158
vertex 25 -45.5 158
vertex 37 -45.5 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 38 -46 155
vertex 38 46 155
vertex 38.5 -47 155
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 40 53.5 158
vertex 38 -46 158
vertex 38.5 -47 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 40 -53.5 158
vertex 40 53.5 158
vertex 38.5 -47 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 40 53.5 158
vertex 37 -45.5 158
vertex 38 -46 158
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 40 -53.5 158
vertex 41 -54.5 158
vertex 41 67.5 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 4 -50 155
vertex 1.5 50 155
vertex 4 50 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 1.5 -50 158
vertex 4 50 158
vertex 1.5 50 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 9.5 -50 155
vertex 7 50 155
vertex 9.5 50 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 7 -50 158
vertex 9.5 50 158
vertex 7 50 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 15 -50 155
vertex 12.5 50 155
vertex 15 50 155
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 15 50 158
vertex 12.5 50 158
vertex 12.5 -50 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 18 -30 158
vertex 23.5 46 158
vertex 18 50 158
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 0 51.5 155
vertex 4.5 51 155
vertex 1 51 155
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 1 51 155
vertex 4 50 155
vertex 1.5 50 155
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 1 51 155
vertex 4.5 51 155
vertex 4 50 155
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 0 51.5 155
vertex 5.5 51.5 155
vertex 4.5 51 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 1.5 50 158
vertex 4.5 51 158
vertex 1 51 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 1 51 158
vertex 5.5 51.5 158
vertex 0 51.5 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 1.5 50 158
vertex 4 50 158
vertex 4.5 51 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 1 51 158
vertex 4.5 51 158
vertex 5.5 51.5 158
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 5.5 51.5 155
vertex 10 51 155
vertex 6.5 51 155
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 6.5 51 155
vertex 9.5 50 155
vertex 7 50 155
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 6.5 51 155
vertex 10 51 155
vertex 9.5 50 155
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 5.5 51.5 155
vertex 11 51.5 155
vertex 10 51 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 7 50 158
vertex 10 51 158
vertex 6.5 51 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 6.5 51 158
vertex 11 51.5 158
vertex 5.5 51.5 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 7 50 158
vertex 9.5 50 158
vertex 10 51 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 6.5 51 158
vertex 10 51 158
vertex 11 51.5 158
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 39 69.5 155
vertex -15.5 51 155
vertex -16.5 51.5 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 39 69.5 155
vertex -11 51.5 155
vertex -15.5 51 155
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 35 60.5 158
vertex -16.5 51.5 158
vertex -11 51.5 158
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 39 69.5 155
vertex -5.5 51.5 155
vertex -11 51.5 155
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 35 60.5 158
vertex -11 51.5 158
vertex -5.5 51.5 158
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 35 60.5 158
vertex -5.5 51.5 158
vertex 0 51.5 158
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -41 67.5 158
vertex 35 60.5 158
vertex 36 61.5 158
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 12 51 155
vertex 15 50 155
vertex 12.5 50 155
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 11 51.5 155
vertex 15.5 51 155
vertex 12 51 155
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 12 51 155
vertex 15.5 51 155
vertex 15 50 155
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 11 51.5 155
vertex 16.5 51.5 155
vertex 15.5 51 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 12.5 50 158
vertex 15.5 51 158
vertex 12 51 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 12 51 158
vertex 16.5 51.5 158
vertex 11 51.5 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 12.5 50 158
vertex 15 50 158
vertex 15.5 51 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 12 51 158
vertex 15.5 51 158
vertex 16.5 51.5 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 18 32 155
vertex 18 50 155
vertex 23.5 46 155
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 17.5 51 155
vertex 23.5 48 155
vertex 18 50 155
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex 18 50 158
vertex 23.5 48 158
vertex 17.5 51 158
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 39 69.5 155
vertex 0 51.5 155
vertex -5.5 51.5 155
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 39 69.5 155
vertex 5.5 51.5 155
vertex 0 51.5 155
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 35 60.5 158
vertex 0 51.5 158
vertex 5.5 51.5 158
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -39 69.5 155
vertex 39 69.5 157
vertex 39 69.5 155
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -41 67.5 158
vertex 36 61.5 158
vertex 40 61.5 158
endloop
endfacet
facet normal 0 0.7 0.7
outer loop
vertex -39 69.5 157
vertex 39 68.5 158
vertex 39 69.5 157
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -41 67.5 158
vertex 40 61.5 158
vertex 41 67.5 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -41 67.5 158
vertex 41 67.5 158
vertex 39 68.5 158
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 39 69.5 155
vertex 11 51.5 155
vertex 5.5 51.5 155
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 35 60.5 158
vertex 5.5 51.5 158
vertex 11 51.5 158
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 35 60.5 158
vertex 11 51.5 158
vertex 16.5 51.5 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 37 -45.5 155
vertex 18 32 155
vertex 37 45.5 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 18 -30 158
vertex 25 45.5 158
vertex 23.5 46 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 18 -30 158
vertex 37 45.5 158
vertex 25 45.5 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 37 -45.5 155
vertex 37 45.5 155
vertex 38 46 155
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 25 -45.5 158
vertex 38 46 158
vertex 37 45.5 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 25 -45.5 158
vertex 38.5 47 158
vertex 38 46 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 42 -68.5 155
vertex 38 46 155
vertex 38.5 47 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 42 -68.5 155
vertex 38.5 47 155
vertex 39 69.5 155
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 40 53.5 158
vertex 38.5 47 158
vertex 25 -45.5 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 42 -68.5 155
vertex 39 69.5 155
vertex 43 65.5 155
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 43 -65.5 155
vertex 43 65.5 155
vertex 43 65.5 157
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 40 -53.5 158
vertex 41 54.5 158
vertex 40 53.5 158
endloop
endfacet
facet normal 0.7 -0 0.7
outer loop
vertex 43 -65.5 157
vertex 43 65.5 157
vertex 42 65.5 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 40 -53.5 158
vertex 41 67.5 158
vertex 41 54.5 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 41 -67.5 158
vertex 42 65.5 158
vertex 41 67.5 158
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 18 32 155
vertex 23.5 46 155
vertex 25 45.5 155
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 37 45.5 155
vertex 18 32 155
vertex 25 45.5 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 23.5 46 155
vertex 18 50 155
vertex 23 47 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 23 47 155
vertex 18 50 155
vertex 23.5 48 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 23.5 48 155
vertex 17.5 51 155
vertex 25 48.5 155
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 23 47 158
vertex 18 50 158
vertex 23.5 46 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 23.5 48 158
vertex 18 50 158
vertex 23 47 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 25 48.5 158
vertex 17.5 51 158
vertex 23.5 48 158
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 39 69.5 155
vertex 16.5 51.5 155
vertex 11 51.5 155
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 39 69.5 155
vertex 17.5 51 155
vertex 16.5 51.5 155
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 35 60.5 158
vertex 16.5 51.5 158
vertex 17.5 51 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 35 60.5 158
vertex 17.5 51 158
vertex 25 48.5 158
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 39 69.5 155
vertex 25 48.5 155
vertex 17.5 51 155
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 36 53.5 158
vertex 35 54.5 158
vertex 25 48.5 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 35 54.5 158
vertex 35 60.5 158
vertex 25 48.5 158
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 36 53.5 158
vertex 25 48.5 158
vertex 37 48.5 158
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 36 53.5 158
vertex 37 48.5 158
vertex 40 53.5 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 40 53.5 158
vertex 38 48 158
vertex 38.5 47 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 40 53.5 158
vertex 37 48.5 158
vertex 38 48 158
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 39 69.5 155
vertex 37 48.5 155
vertex 25 48.5 155
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 39 69.5 155
vertex 38 48 155
vertex 37 48.5 155
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 39 69.5 155
vertex 38.5 47 155
vertex 38 48 155
endloop
endfacet
facet normal 0.4 0.9 -0
outer loop
vertex 39 69.5 155
vertex 39 69.5 157
vertex 42 68.5 155
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 39 69.5 155
vertex 42 68.5 155
vertex 43 65.5 155
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex 43 65.5 155
vertex 42 68.5 155
vertex 43 65.5 157
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 42 68.5 155
vertex 39 69.5 157
vertex 42 68.5 157
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex 42 68.5 155
vertex 42 68.5 157
vertex 43 65.5 157
endloop
endfacet
facet normal 0.3 0.7 0.7
outer loop
vertex 39 69.5 157
vertex 39 68.5 158
vertex 41 67.5 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 41 54.5 158
vertex 41 67.5 158
vertex 41 60.5 158
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 41 60.5 158
vertex 41 67.5 158
vertex 40 61.5 158
endloop
endfacet
facet normal 0.3 0.7 0.7
outer loop
vertex 39 69.5 157
vertex 41 67.5 158
vertex 42 68.5 157
endloop
endfacet
facet normal 0.7 0.3 0.7
outer loop
vertex 43 65.5 157
vertex 42 68.5 157
vertex 41 67.5 158
endloop
endfacet
facet normal 0.7 0.3 0.7
outer loop
vertex 43 65.5 157
vertex 41 67.5 158
vertex 42 65.5 158
endloop
endfacet
facet normal -0.7 -0.7 -0.3
outer loop
vertex -40 -61.5 158
vertex -41 -60.5 158
vertex -41 -60.5 158
endloop
endfacet
facet normal -0.9 -0 -0.4
outer loop
vertex -41 -60.5 158
vertex -41 -54.5 158
vertex -41 -60.5 158
endloop
endfacet
facet normal -0.9 0 -0.4
outer loop
vertex -41 -60.5 158
vertex -41 -54.5 158
vertex -41 -54.5 158
endloop
endfacet
facet normal -0.7 0.7 -0.3
outer loop
vertex -41 -54.5 158
vertex -40 -53.5 158
vertex -41 -54.5 158
endloop
endfacet
facet normal -0.7 0.7 -0.3
outer loop
vertex -41 -54.5 158
vertex -40 -53.5 158
vertex -40 -53.5 158
endloop
endfacet
facet normal -0 1 -0
outer loop
vertex -40 -53.5 158
vertex -40 -53.5 158
vertex -36 -53.5 158
endloop
endfacet
facet normal -0.7 -0.7 -0
outer loop
vertex -40 -61.5 158
vertex -41 -60.5 165
vertex -41 -60.5 158
endloop
endfacet
facet normal -0.7 -0.7 -0
outer loop
vertex -40 -61.5 158
vertex -40 -61.5 165
vertex -41 -60.5 165
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -41 -60.5 158
vertex -41 -54.5 165
vertex -41 -54.5 158
endloop
endfacet
facet normal -0.7 0.7 0
outer loop
vertex -41 -54.5 158
vertex -40 -53.5 165
vertex -40 -53.5 158
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -40 -53.5 158
vertex -40 -53.5 165
vertex -36 -53.5 158
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -41 -60.5 158
vertex -41 -60.5 165
vertex -41 -54.5 165
endloop
endfacet
facet normal -0.7 0.7 0
outer loop
vertex -41 -54.5 158
vertex -41 -54.5 165
vertex -40 -53.5 165
endloop
endfacet
facet normal -0 -1 0
outer loop
vertex -40 -61.5 158
vertex -36 -61.5 158
vertex -36 -61.5 165.5
endloop
endfacet
facet normal 0.7 -0.7 0
outer loop
vertex -36 -61.5 158
vertex -35 -60.5 158
vertex -35 -60.5 165.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -35 -60.5 158
vertex -35 -54.5 158
vertex -35 -54.5 165.5
endloop
endfacet
facet normal 0.7 0.7 -0
outer loop
vertex -35 -54.5 158
vertex -36 -53.5 158
vertex -36 -53.5 165.5
endloop
endfacet
facet normal -0 -1 0
outer loop
vertex -40 -61.5 158
vertex -36 -61.5 165.5
vertex -40 -61.5 165
endloop
endfacet
facet normal -0.7 -0.7 0.3
outer loop
vertex -40 -61.5 165
vertex -38.5 -61.5 168.5
vertex -41 -60.5 165
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex -40 -61.5 165
vertex -36 -61.5 165.5
vertex -38.5 -61.5 168.5
endloop
endfacet
facet normal -0.9 -0 0.4
outer loop
vertex -41 -60.5 165
vertex -39.5 -54.5 168.5
vertex -41 -54.5 165
endloop
endfacet
facet normal -0.7 0.7 0.3
outer loop
vertex -41 -54.5 165
vertex -39.5 -54.5 168.5
vertex -40 -53.5 165
endloop
endfacet
facet normal 0.7 -0.7 0
outer loop
vertex -36 -61.5 158
vertex -35 -60.5 165.5
vertex -36 -61.5 165.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -35 -60.5 158
vertex -35 -54.5 165.5
vertex -35 -60.5 165.5
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -36 -53.5 158
vertex -40 -53.5 165
vertex -36 -53.5 165.5
endloop
endfacet
facet normal 0.7 0.7 0
outer loop
vertex -35 -54.5 158
vertex -36 -53.5 165.5
vertex -35 -54.5 165.5
endloop
endfacet
facet normal -0.7 -0.7 0.3
outer loop
vertex -41 -60.5 165
vertex -38.5 -61.5 168.5
vertex -39.5 -60.5 168.5
endloop
endfacet
facet normal -0.9 0 0.4
outer loop
vertex -41 -60.5 165
vertex -39.5 -60.5 168.5
vertex -39.5 -54.5 168.5
endloop
endfacet
facet normal -0.7 0.7 0.3
outer loop
vertex -40 -53.5 165
vertex -39.5 -54.5 168.5
vertex -38.5 -53.5 168.5
endloop
endfacet
facet normal 0.6 -0.6 -0.6
outer loop
vertex -36 -61.5 165.5
vertex -35 -60.5 165.5
vertex -20.5 -60.5 180
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex -35 -60.5 165.5
vertex -35 -54.5 165.5
vertex -20.5 -60.5 180
endloop
endfacet
facet normal 0.6 0.6 -0.6
outer loop
vertex -35 -54.5 165.5
vertex -36 -53.5 165.5
vertex -20.5 -54.5 180
endloop
endfacet
facet normal -0.6 -0.6 0.6
outer loop
vertex -38.5 -61.5 168.5
vertex -23.5 -60.5 184.5
vertex -39.5 -60.5 168.5
endloop
endfacet
facet normal -0 1 -0
outer loop
vertex -40 -53.5 165
vertex -23.5 -53.5 183.5
vertex -36 -53.5 165.5
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex -40 -53.5 165
vertex -38.5 -53.5 168.5
vertex -23.5 -53.5 183.5
endloop
endfacet
facet normal -0.6 0.6 0.6
outer loop
vertex -39.5 -54.5 168.5
vertex -23.5 -53.5 183.5
vertex -38.5 -53.5 168.5
endloop
endfacet
facet normal -0 -1 0
outer loop
vertex -36 -61.5 165.5
vertex -20.5 -61.5 181
vertex -38.5 -61.5 168.5
endloop
endfacet
facet normal -0.6 -0.6 0.6
outer loop
vertex -38.5 -61.5 168.5
vertex -23.5 -61.5 183.5
vertex -23.5 -60.5 184.5
endloop
endfacet
facet normal -0 -1 0
outer loop
vertex -38.5 -61.5 168.5
vertex -20.5 -61.5 181
vertex -23.5 -61.5 183.5
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex -36 -53.5 165.5
vertex -23.5 -53.5 183.5
vertex -20.5 -53.5 181
endloop
endfacet
facet normal 0.6 -0.6 -0.6
outer loop
vertex -36 -61.5 165.5
vertex -20.5 -60.5 180
vertex -20.5 -61.5 181
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex -35 -54.5 165.5
vertex -20.5 -54.5 180
vertex -20.5 -60.5 180
endloop
endfacet
facet normal 0.6 0.6 -0.6
outer loop
vertex -36 -53.5 165.5
vertex -20.5 -53.5 181
vertex -20.5 -54.5 180
endloop
endfacet
facet normal -0.7 0 0.7
outer loop
vertex -39.5 -54.5 168.5
vertex -39.5 -60.5 168.5
vertex -23.5 -54.5 184.5
endloop
endfacet
facet normal -0.6 0.6 0.6
outer loop
vertex -39.5 -54.5 168.5
vertex -23.5 -54.5 184.5
vertex -23.5 -53.5 183.5
endloop
endfacet
facet normal -0.3 -0.7 0.7
outer loop
vertex -23.5 -61.5 183.5
vertex -20 -60.5 186
vertex -23.5 -60.5 184.5
endloop
endfacet
facet normal -0.7 0 0.7
outer loop
vertex -39.5 -60.5 168.5
vertex -23.5 -60.5 184.5
vertex -23.5 -54.5 184.5
endloop
endfacet
facet normal -0.4 0 0.9
outer loop
vertex -23.5 -60.5 184.5
vertex -20 -54.5 186
vertex -23.5 -54.5 184.5
endloop
endfacet
facet normal -0.3 0.7 0.7
outer loop
vertex -23.5 -53.5 183.5
vertex -23.5 -54.5 184.5
vertex -20 -54.5 186
endloop
endfacet
facet normal -0.3 -0.7 0.7
outer loop
vertex -23.5 -61.5 183.5
vertex -20 -61.5 185
vertex -20 -60.5 186
endloop
endfacet
facet normal -0.4 0 0.9
outer loop
vertex -23.5 -60.5 184.5
vertex -20 -60.5 186
vertex -20 -54.5 186
endloop
endfacet
facet normal -0.3 0.7 0.7
outer loop
vertex -23.5 -53.5 183.5
vertex -20 -54.5 186
vertex -20 -53.5 185
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex -20.5 -61.5 181
vertex -20.5 -60.5 180
vertex 20.5 -60.5 180
endloop
endfacet
facet normal -0 -1 0
outer loop
vertex -23.5 -61.5 183.5
vertex -20.5 -61.5 181
vertex 23.5 -61.5 183.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -20.5 -60.5 180
vertex -20.5 -54.5 180
vertex 20.5 -54.5 180
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex -20.5 -54.5 180
vertex -20.5 -53.5 181
vertex 20.5 -53.5 181
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex -23.5 -53.5 183.5
vertex 23.5 -53.5 183.5
vertex -20.5 -53.5 181
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex -23.5 -61.5 183.5
vertex 23.5 -61.5 183.5
vertex -20 -61.5 185
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex -20 -61.5 185
vertex 20 -61.5 185
vertex -20 -60.5 186
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -23.5 -53.5 183.5
vertex -20 -53.5 185
vertex 23.5 -53.5 183.5
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -20 -60.5 186
vertex 20 -54.5 186
vertex -20 -54.5 186
endloop
endfacet
facet normal 0 0.7 0.7
outer loop
vertex -20 -53.5 185
vertex -20 -54.5 186
vertex 20 -53.5 185
endloop
endfacet
facet normal 0.7 -0.7 -0.3
outer loop
vertex 40 -61.5 158
vertex 41 -60.5 158
vertex 41 -60.5 158
endloop
endfacet
facet normal -0 1 0
outer loop
vertex 36 -53.5 158
vertex 40 -53.5 158
vertex 40 -53.5 158
endloop
endfacet
facet normal 0.7 0.7 -0.3
outer loop
vertex 40 -53.5 158
vertex 40 -53.5 158
vertex 41 -54.5 158
endloop
endfacet
facet normal 0.9 0 -0.4
outer loop
vertex 41 -60.5 158
vertex 41 -54.5 158
vertex 41 -60.5 158
endloop
endfacet
facet normal 0.9 0 -0.4
outer loop
vertex 41 -60.5 158
vertex 41 -54.5 158
vertex 41 -54.5 158
endloop
endfacet
facet normal 0.7 0.7 -0.3
outer loop
vertex 40 -53.5 158
vertex 41 -54.5 158
vertex 41 -54.5 158
endloop
endfacet
facet normal -0.7 -0.7 0
outer loop
vertex 36 -61.5 158
vertex 36 -61.5 165.5
vertex 35 -60.5 158
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 36 -61.5 158
vertex 40 -61.5 158
vertex 36 -61.5 165.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 35 -60.5 158
vertex 35 -60.5 165.5
vertex 35 -54.5 158
endloop
endfacet
facet normal -0.7 0.7 0
outer loop
vertex 35 -54.5 158
vertex 35 -54.5 165.5
vertex 36 -53.5 158
endloop
endfacet
facet normal -0 1 0
outer loop
vertex 36 -53.5 158
vertex 36 -53.5 165.5
vertex 40 -53.5 158
endloop
endfacet
facet normal 0.7 -0.7 -0
outer loop
vertex 40 -61.5 158
vertex 41 -60.5 158
vertex 41 -60.5 165
endloop
endfacet
facet normal 0.7 -0.7 -0
outer loop
vertex 40 -61.5 158
vertex 41 -60.5 165
vertex 40 -61.5 165
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 41 -60.5 158
vertex 41 -54.5 158
vertex 41 -54.5 165
endloop
endfacet
facet normal 0.7 0.7 0
outer loop
vertex 40 -53.5 158
vertex 41 -54.5 165
vertex 41 -54.5 158
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex 41 -60.5 158
vertex 41 -54.5 165
vertex 41 -60.5 165
endloop
endfacet
facet normal 0.7 0.7 0
outer loop
vertex 40 -53.5 158
vertex 40 -53.5 165
vertex 41 -54.5 165
endloop
endfacet
facet normal -0.6 -0.6 -0.6
outer loop
vertex 36 -61.5 165.5
vertex 20.5 -60.5 180
vertex 35 -60.5 165.5
endloop
endfacet
facet normal -0.7 0 -0.7
outer loop
vertex 35 -60.5 165.5
vertex 20.5 -54.5 180
vertex 35 -54.5 165.5
endloop
endfacet
facet normal -0.7 -0.7 0
outer loop
vertex 35 -60.5 158
vertex 36 -61.5 165.5
vertex 35 -60.5 165.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 35 -54.5 158
vertex 35 -60.5 165.5
vertex 35 -54.5 165.5
endloop
endfacet
facet normal -0.7 0.7 0
outer loop
vertex 36 -53.5 158
vertex 35 -54.5 165.5
vertex 36 -53.5 165.5
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 40 -61.5 158
vertex 40 -61.5 165
vertex 36 -61.5 165.5
endloop
endfacet
facet normal 0 -1 -0
outer loop
vertex 36 -61.5 165.5
vertex 40 -61.5 165
vertex 38.5 -61.5 168.5
endloop
endfacet
facet normal 0.7 -0.7 0.3
outer loop
vertex 40 -61.5 165
vertex 41 -60.5 165
vertex 38.5 -61.5 168.5
endloop
endfacet
facet normal 0 1 0
outer loop
vertex 40 -53.5 158
vertex 36 -53.5 165.5
vertex 40 -53.5 165
endloop
endfacet
facet normal 0.9 -0 0.4
outer loop
vertex 41 -60.5 165
vertex 41 -54.5 165
vertex 39.5 -60.5 168.5
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 36 -53.5 165.5
vertex 38.5 -53.5 168.5
vertex 40 -53.5 165
endloop
endfacet
facet normal 0.7 0.7 0.3
outer loop
vertex 40 -53.5 165
vertex 38.5 -53.5 168.5
vertex 41 -54.5 165
endloop
endfacet
facet normal 0.7 -0.7 0.3
outer loop
vertex 41 -60.5 165
vertex 39.5 -60.5 168.5
vertex 38.5 -61.5 168.5
endloop
endfacet
facet normal 0.9 0 0.4
outer loop
vertex 41 -54.5 165
vertex 39.5 -54.5 168.5
vertex 39.5 -60.5 168.5
endloop
endfacet
facet normal 0.7 0.7 0.3
outer loop
vertex 41 -54.5 165
vertex 38.5 -53.5 168.5
vertex 39.5 -54.5 168.5
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex -20.5 -61.5 181
vertex 20.5 -60.5 180
vertex 20.5 -61.5 181
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -20.5 -61.5 181
vertex 20.5 -61.5 181
vertex 23.5 -61.5 183.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -20.5 -60.5 180
vertex 20.5 -54.5 180
vertex 20.5 -60.5 180
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex -20.5 -54.5 180
vertex 20.5 -53.5 181
vertex 20.5 -54.5 180
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -20.5 -53.5 181
vertex 23.5 -53.5 183.5
vertex 20.5 -53.5 181
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -20 -61.5 185
vertex 23.5 -61.5 183.5
vertex 20 -61.5 185
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex -20 -60.5 186
vertex 20 -61.5 185
vertex 20 -60.5 186
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -20 -60.5 186
vertex 20 -60.5 186
vertex 20 -54.5 186
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -20 -53.5 185
vertex 20 -53.5 185
vertex 23.5 -53.5 183.5
endloop
endfacet
facet normal -0 0.7 0.7
outer loop
vertex -20 -54.5 186
vertex 20 -54.5 186
vertex 20 -53.5 185
endloop
endfacet
facet normal 0.3 -0.7 0.7
outer loop
vertex 20 -61.5 185
vertex 23.5 -61.5 183.5
vertex 20 -60.5 186
endloop
endfacet
facet normal 0.4 0 0.9
outer loop
vertex 20 -60.5 186
vertex 23.5 -54.5 184.5
vertex 20 -54.5 186
endloop
endfacet
facet normal 0.3 0.7 0.7
outer loop
vertex 20 -53.5 185
vertex 20 -54.5 186
vertex 23.5 -53.5 183.5
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 36 -61.5 165.5
vertex 38.5 -61.5 168.5
vertex 20.5 -61.5 181
endloop
endfacet
facet normal -0.6 0.6 -0.6
outer loop
vertex 35 -54.5 165.5
vertex 20.5 -53.5 181
vertex 36 -53.5 165.5
endloop
endfacet
facet normal -0 1 -0
outer loop
vertex 36 -53.5 165.5
vertex 20.5 -53.5 181
vertex 38.5 -53.5 168.5
endloop
endfacet
facet normal -0.6 -0.6 -0.6
outer loop
vertex 36 -61.5 165.5
vertex 20.5 -61.5 181
vertex 20.5 -60.5 180
endloop
endfacet
facet normal -0.7 0 -0.7
outer loop
vertex 35 -60.5 165.5
vertex 20.5 -60.5 180
vertex 20.5 -54.5 180
endloop
endfacet
facet normal -0.6 0.6 -0.6
outer loop
vertex 35 -54.5 165.5
vertex 20.5 -54.5 180
vertex 20.5 -53.5 181
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 38.5 -61.5 168.5
vertex 26 -61.5 181
vertex 20.5 -61.5 181
endloop
endfacet
facet normal 0.6 -0.6 0.6
outer loop
vertex 38.5 -61.5 168.5
vertex 27 -60.5 181
vertex 26 -61.5 181
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 38.5 -53.5 168.5
vertex 20.5 -53.5 181
vertex 26 -53.5 181
endloop
endfacet
facet normal 0.7 -0 0.7
outer loop
vertex 39.5 -60.5 168.5
vertex 23.5 -54.5 184.5
vertex 27 -60.5 181
endloop
endfacet
facet normal 0.7 0 0.7
outer loop
vertex 39.5 -60.5 168.5
vertex 27 -55 181
vertex 23.5 -54.5 184.5
endloop
endfacet
facet normal 0.6 -0.6 0.6
outer loop
vertex 39.5 -60.5 168.5
vertex 27 -60.5 181
vertex 27 -60.5 181
endloop
endfacet
facet normal 0.6 0.6 0.6
outer loop
vertex 38.5 -53.5 168.5
vertex 26 -53.5 181
vertex 27 -54.5 181
endloop
endfacet
facet normal 0.7 0 0.7
outer loop
vertex 39.5 -54.5 168.5
vertex 27 -54.5 181
vertex 27 -55 181
endloop
endfacet
facet normal 0.6 0.6 0.6
outer loop
vertex 39.5 -54.5 168.5
vertex 27 -54.5 181
vertex 27 -54.5 181
endloop
endfacet
facet normal 0.6 -0.6 0.6
outer loop
vertex 38.5 -61.5 168.5
vertex 39.5 -60.5 168.5
vertex 27 -60.5 181
endloop
endfacet
facet normal 0.6 0.6 0.6
outer loop
vertex 38.5 -53.5 168.5
vertex 27 -54.5 181
vertex 39.5 -54.5 168.5
endloop
endfacet
facet normal 0.7 -0 0.7
outer loop
vertex 39.5 -60.5 168.5
vertex 39.5 -54.5 168.5
vertex 27 -55 181
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 20.5 -61.5 181
vertex 26 -61.5 181
vertex 23.5 -61.5 183.5
endloop
endfacet
facet normal 0.6 -0.6 0.6
outer loop
vertex 26 -61.5 181
vertex 26 -61 181.5
vertex 23.5 -61.5 183.5
endloop
endfacet
facet normal 0.6 -0.6 0.6
outer loop
vertex 26 -61.5 181
vertex 27 -60.5 181
vertex 26 -61 181.5
endloop
endfacet
facet normal -0 1 0
outer loop
vertex 20.5 -53.5 181
vertex 23.5 -53.5 183.5
vertex 26 -53.5 181
endloop
endfacet
facet normal 0.6 -0.6 0.6
outer loop
vertex 26 -61 181.5
vertex 27 -60.5 181
vertex 27 -60.5 181
endloop
endfacet
facet normal 0.6 0.6 0.6
outer loop
vertex 26 -53.5 181
vertex 23.5 -53.5 183.5
vertex 26 -54 181.5
endloop
endfacet
facet normal 0.6 0.6 0.6
outer loop
vertex 26 -54 181.5
vertex 27 -54.5 181
vertex 27 -54.5 181
endloop
endfacet
facet normal 0.6 0.6 0.6
outer loop
vertex 26 -53.5 181
vertex 26 -54 181.5
vertex 27 -54.5 181
endloop
endfacet
facet normal 0.6 -0.6 0.6
outer loop
vertex 26 -61 181.5
vertex 23.5 -60.5 184.5
vertex 23.5 -61.5 183.5
endloop
endfacet
facet normal 0.3 -0.7 0.7
outer loop
vertex 20 -60.5 186
vertex 23.5 -61.5 183.5
vertex 23.5 -60.5 184.5
endloop
endfacet
facet normal 0.6 -0.6 0.6
outer loop
vertex 26 -61 181.5
vertex 27 -60.5 181
vertex 23.5 -60.5 184.5
endloop
endfacet
facet normal 0.7 -0 0.7
outer loop
vertex 23.5 -54.5 184.5
vertex 23.5 -60.5 184.5
vertex 27 -60.5 181
endloop
endfacet
facet normal 0.6 0.6 0.6
outer loop
vertex 26 -54 181.5
vertex 23.5 -54.5 184.5
vertex 27 -54.5 181
endloop
endfacet
facet normal 0.7 -0 0.7
outer loop
vertex 27 -55 181
vertex 27 -54.5 181
vertex 23.5 -54.5 184.5
endloop
endfacet
facet normal 0.6 0.6 0.6
outer loop
vertex 26 -54 181.5
vertex 23.5 -53.5 183.5
vertex 23.5 -54.5 184.5
endloop
endfacet
facet normal 0.4 -0 0.9
outer loop
vertex 20 -60.5 186
vertex 23.5 -60.5 184.5
vertex 23.5 -54.5 184.5
endloop
endfacet
facet normal 0.3 0.7 0.7
outer loop
vertex 20 -54.5 186
vertex 23.5 -54.5 184.5
vertex 23.5 -53.5 183.5
endloop
endfacet
facet normal -0.7 -0.7 -0.3
outer loop
vertex -41 54.5 158
vertex -41 54.5 158
vertex -40 53.5 158
endloop
endfacet
facet normal -0.9 -0 -0.4
outer loop
vertex -41 54.5 158
vertex -41 60.5 158
vertex -41 54.5 158
endloop
endfacet
facet normal -0.9 0 -0.4
outer loop
vertex -41 54.5 158
vertex -41 60.5 158
vertex -41 60.5 158
endloop
endfacet
facet normal -0.7 -0.7 -0.3
outer loop
vertex -41 54.5 158
vertex -40 53.5 158
vertex -40 53.5 158
endloop
endfacet
facet normal -0.7 0.7 -0.3
outer loop
vertex -41 60.5 158
vertex -40 61.5 158
vertex -41 60.5 158
endloop
endfacet
facet normal -0.7 -0.7 -0
outer loop
vertex -41 54.5 158
vertex -40 53.5 158
vertex -41 54.5 165
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -41 54.5 158
vertex -41 60.5 165
vertex -41 60.5 158
endloop
endfacet
facet normal -0 -1 0
outer loop
vertex -40 53.5 158
vertex -36 53.5 165.5
vertex -40 53.5 158
endloop
endfacet
facet normal -0.7 -0.7 0
outer loop
vertex -40 53.5 158
vertex -40 53.5 165
vertex -41 54.5 165
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex -41 54.5 158
vertex -41 54.5 165
vertex -41 60.5 165
endloop
endfacet
facet normal -0.7 0.7 -0
outer loop
vertex -41 60.5 158
vertex -40 61.5 165
vertex -40 61.5 158
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex -40 61.5 158
vertex -40 61.5 165
vertex -36 61.5 158
endloop
endfacet
facet normal -0.7 0.7 -0
outer loop
vertex -41 60.5 158
vertex -41 60.5 165
vertex -40 61.5 165
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -40 53.5 158
vertex -36 53.5 158
vertex -36 53.5 165.5
endloop
endfacet
facet normal 0.7 -0.7 0
outer loop
vertex -36 53.5 158
vertex -35 54.5 158
vertex -35 54.5 165.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -35 54.5 158
vertex -35 60.5 158
vertex -35 60.5 165.5
endloop
endfacet
facet normal 0.7 0.7 -0
outer loop
vertex -35 60.5 158
vertex -36 61.5 158
vertex -36 61.5 165.5
endloop
endfacet
facet normal -0 -1 0
outer loop
vertex -40 53.5 158
vertex -36 53.5 165.5
vertex -40 53.5 165
endloop
endfacet
facet normal -0.7 -0.7 0.3
outer loop
vertex -41 54.5 165
vertex -40 53.5 165
vertex -38.5 53.5 168.5
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex -40 53.5 165
vertex -36 53.5 165.5
vertex -38.5 53.5 168.5
endloop
endfacet
facet normal -0.9 -0 0.4
outer loop
vertex -41 54.5 165
vertex -39.5 60.5 168.5
vertex -41 60.5 165
endloop
endfacet
facet normal -0.7 0.7 0.3
outer loop
vertex -41 60.5 165
vertex -39.5 60.5 168.5
vertex -40 61.5 165
endloop
endfacet
facet normal 0.7 -0.7 0
outer loop
vertex -36 53.5 158
vertex -35 54.5 165.5
vertex -36 53.5 165.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -35 54.5 158
vertex -35 60.5 165.5
vertex -35 54.5 165.5
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -36 61.5 158
vertex -40 61.5 165
vertex -36 61.5 165.5
endloop
endfacet
facet normal 0.7 0.7 0
outer loop
vertex -35 60.5 158
vertex -36 61.5 165.5
vertex -35 60.5 165.5
endloop
endfacet
facet normal -0.7 -0.7 0.3
outer loop
vertex -41 54.5 165
vertex -38.5 53.5 168.5
vertex -39.5 54.5 168.5
endloop
endfacet
facet normal -0.9 0 0.4
outer loop
vertex -41 54.5 165
vertex -39.5 54.5 168.5
vertex -39.5 60.5 168.5
endloop
endfacet
facet normal -0.7 0.7 0.3
outer loop
vertex -40 61.5 165
vertex -39.5 60.5 168.5
vertex -38.5 61.5 168.5
endloop
endfacet
facet normal 0.6 -0.6 -0.6
outer loop
vertex -36 53.5 165.5
vertex -35 54.5 165.5
vertex -20.5 54.5 180
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex -35 54.5 165.5
vertex -35 60.5 165.5
vertex -20.5 54.5 180
endloop
endfacet
facet normal 0.6 0.6 -0.6
outer loop
vertex -35 60.5 165.5
vertex -36 61.5 165.5
vertex -20.5 60.5 180
endloop
endfacet
facet normal -0.6 -0.6 0.6
outer loop
vertex -39.5 54.5 168.5
vertex -38.5 53.5 168.5
vertex -23.5 54.5 184.5
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -40 61.5 165
vertex -23.5 61.5 183.5
vertex -36 61.5 165.5
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -40 61.5 165
vertex -38.5 61.5 168.5
vertex -23.5 61.5 183.5
endloop
endfacet
facet normal -0.6 0.6 0.6
outer loop
vertex -39.5 60.5 168.5
vertex -23.5 61.5 183.5
vertex -38.5 61.5 168.5
endloop
endfacet
facet normal -0 -1 0
outer loop
vertex -36 53.5 165.5
vertex -20.5 53.5 181
vertex -38.5 53.5 168.5
endloop
endfacet
facet normal -0.6 -0.6 0.6
outer loop
vertex -38.5 53.5 168.5
vertex -23.5 53.5 183.5
vertex -23.5 54.5 184.5
endloop
endfacet
facet normal 0 -1 -0
outer loop
vertex -38.5 53.5 168.5
vertex -20.5 53.5 181
vertex -23.5 53.5 183.5
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -36 61.5 165.5
vertex -23.5 61.5 183.5
vertex -20.5 61.5 181
endloop
endfacet
facet normal 0.6 -0.6 -0.6
outer loop
vertex -36 53.5 165.5
vertex -20.5 54.5 180
vertex -20.5 53.5 181
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex -35 60.5 165.5
vertex -20.5 60.5 180
vertex -20.5 54.5 180
endloop
endfacet
facet normal 0.6 0.6 -0.6
outer loop
vertex -36 61.5 165.5
vertex -20.5 61.5 181
vertex -20.5 60.5 180
endloop
endfacet
facet normal -0.7 0 0.7
outer loop
vertex -39.5 60.5 168.5
vertex -39.5 54.5 168.5
vertex -23.5 60.5 184.5
endloop
endfacet
facet normal -0.6 0.6 0.6
outer loop
vertex -39.5 60.5 168.5
vertex -23.5 60.5 184.5
vertex -23.5 61.5 183.5
endloop
endfacet
facet normal -0.7 -0 0.7
outer loop
vertex -39.5 54.5 168.5
vertex -23.5 54.5 184.5
vertex -23.5 60.5 184.5
endloop
endfacet
facet normal -0.3 -0.7 0.7
outer loop
vertex -23.5 53.5 183.5
vertex -20 54.5 186
vertex -23.5 54.5 184.5
endloop
endfacet
facet normal -0.4 -0 0.9
outer loop
vertex -23.5 54.5 184.5
vertex -20 60.5 186
vertex -23.5 60.5 184.5
endloop
endfacet
facet normal -0.3 0.7 0.7
outer loop
vertex -23.5 60.5 184.5
vertex -20 60.5 186
vertex -23.5 61.5 183.5
endloop
endfacet
facet normal -0.3 -0.7 0.7
outer loop
vertex -23.5 53.5 183.5
vertex -20 53.5 185
vertex -20 54.5 186
endloop
endfacet
facet normal -0.4 0 0.9
outer loop
vertex -23.5 54.5 184.5
vertex -20 54.5 186
vertex -20 60.5 186
endloop
endfacet
facet normal -0.3 0.7 0.7
outer loop
vertex -23.5 61.5 183.5
vertex -20 60.5 186
vertex -20 61.5 185
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -20.5 54.5 180
vertex -20.5 60.5 180
vertex 20.5 60.5 180
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex -20.5 54.5 180
vertex 20.5 54.5 180
vertex -20.5 53.5 181
endloop
endfacet
facet normal 0 -1 -0
outer loop
vertex -23.5 53.5 183.5
vertex -20.5 53.5 181
vertex 23.5 53.5 183.5
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex -20.5 60.5 180
vertex -20.5 61.5 181
vertex 20.5 61.5 181
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -23.5 61.5 183.5
vertex 23.5 61.5 183.5
vertex -20.5 61.5 181
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -23.5 53.5 183.5
vertex 23.5 53.5 183.5
vertex -20 53.5 185
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex -20 53.5 185
vertex 20 53.5 185
vertex -20 54.5 186
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -20 54.5 186
vertex 20 60.5 186
vertex -20 60.5 186
endloop
endfacet
facet normal -0 1 -0
outer loop
vertex -23.5 61.5 183.5
vertex -20 61.5 185
vertex 23.5 61.5 183.5
endloop
endfacet
facet normal 0 0.7 0.7
outer loop
vertex -20 60.5 186
vertex 20 61.5 185
vertex -20 61.5 185
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 36 53.5 158
vertex 40 53.5 158
vertex 40 53.5 158
endloop
endfacet
facet normal 0.7 -0.7 -0.3
outer loop
vertex 40 53.5 158
vertex 41 54.5 158
vertex 40 53.5 158
endloop
endfacet
facet normal 0.7 -0.7 -0.3
outer loop
vertex 40 53.5 158
vertex 41 54.5 158
vertex 41 54.5 158
endloop
endfacet
facet normal 0.9 0 -0.4
outer loop
vertex 41 54.5 158
vertex 41 60.5 158
vertex 41 54.5 158
endloop
endfacet
facet normal 0.9 0 -0.4
outer loop
vertex 41 54.5 158
vertex 41 60.5 158
vertex 41 60.5 158
endloop
endfacet
facet normal 0.7 0.7 -0.3
outer loop
vertex 41 60.5 158
vertex 40 61.5 158
vertex 41 60.5 158
endloop
endfacet
facet normal -0.7 -0.7 0
outer loop
vertex 36 53.5 158
vertex 36 53.5 165.5
vertex 35 54.5 158
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 36 53.5 158
vertex 40 53.5 158
vertex 36 53.5 165.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 35 54.5 158
vertex 35 54.5 165.5
vertex 35 60.5 158
endloop
endfacet
facet normal -0.7 0.7 0
outer loop
vertex 35 60.5 158
vertex 35 60.5 165.5
vertex 36 61.5 158
endloop
endfacet
facet normal -0 1 0
outer loop
vertex 36 61.5 158
vertex 36 61.5 165.5
vertex 40 61.5 158
endloop
endfacet
facet normal 0.7 -0.7 0
outer loop
vertex 40 53.5 158
vertex 41 54.5 158
vertex 41 54.5 165
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex 41 54.5 158
vertex 41 60.5 158
vertex 41 60.5 165
endloop
endfacet
facet normal 0.7 -0.7 -0
outer loop
vertex 40 53.5 158
vertex 41 54.5 165
vertex 40 53.5 165
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex 41 54.5 158
vertex 41 60.5 165
vertex 41 54.5 165
endloop
endfacet
facet normal 0.7 0.7 -0
outer loop
vertex 41 60.5 158
vertex 40 61.5 158
vertex 41 60.5 165
endloop
endfacet
facet normal 0.7 0.7 -0
outer loop
vertex 40 61.5 158
vertex 40 61.5 165
vertex 41 60.5 165
endloop
endfacet
facet normal -0.6 -0.6 -0.6
outer loop
vertex 36 53.5 165.5
vertex 20.5 54.5 180
vertex 35 54.5 165.5
endloop
endfacet
facet normal -0.7 0 -0.7
outer loop
vertex 35 54.5 165.5
vertex 20.5 60.5 180
vertex 35 60.5 165.5
endloop
endfacet
facet normal -0.7 -0.7 0
outer loop
vertex 35 54.5 158
vertex 36 53.5 165.5
vertex 35 54.5 165.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 35 60.5 158
vertex 35 54.5 165.5
vertex 35 60.5 165.5
endloop
endfacet
facet normal -0.7 0.7 0
outer loop
vertex 36 61.5 158
vertex 35 60.5 165.5
vertex 36 61.5 165.5
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 40 53.5 158
vertex 40 53.5 165
vertex 36 53.5 165.5
endloop
endfacet
facet normal 0 -1 -0
outer loop
vertex 36 53.5 165.5
vertex 40 53.5 165
vertex 38.5 53.5 168.5
endloop
endfacet
facet normal 0.7 -0.7 0.3
outer loop
vertex 40 53.5 165
vertex 41 54.5 165
vertex 38.5 53.5 168.5
endloop
endfacet
facet normal 0.9 0 0.4
outer loop
vertex 41 54.5 165
vertex 41 60.5 165
vertex 39.5 54.5 168.5
endloop
endfacet
facet normal -0 1 -0
outer loop
vertex 40 61.5 158
vertex 36 61.5 165.5
vertex 40 61.5 165
endloop
endfacet
facet normal -0 1 0
outer loop
vertex 36 61.5 165.5
vertex 38.5 61.5 168.5
vertex 40 61.5 165
endloop
endfacet
facet normal 0.7 0.7 0.3
outer loop
vertex 41 60.5 165
vertex 40 61.5 165
vertex 38.5 61.5 168.5
endloop
endfacet
facet normal 0.7 -0.7 0.3
outer loop
vertex 41 54.5 165
vertex 39.5 54.5 168.5
vertex 38.5 53.5 168.5
endloop
endfacet
facet normal 0.9 0 0.4
outer loop
vertex 41 60.5 165
vertex 39.5 60.5 168.5
vertex 39.5 54.5 168.5
endloop
endfacet
facet normal 0.7 0.7 0.3
outer loop
vertex 41 60.5 165
vertex 38.5 61.5 168.5
vertex 39.5 60.5 168.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -20.5 54.5 180
vertex 20.5 60.5 180
vertex 20.5 54.5 180
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex -20.5 53.5 181
vertex 20.5 54.5 180
vertex 20.5 53.5 181
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -20.5 53.5 181
vertex 20.5 53.5 181
vertex 23.5 53.5 183.5
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex -20.5 60.5 180
vertex 20.5 61.5 181
vertex 20.5 60.5 180
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -20.5 61.5 181
vertex 23.5 61.5 183.5
vertex 20.5 61.5 181
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -20 53.5 185
vertex 23.5 53.5 183.5
vertex 20 53.5 185
endloop
endfacet
facet normal 0 -0.7 0.7
outer loop
vertex -20 54.5 186
vertex 20 53.5 185
vertex 20 54.5 186
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -20 54.5 186
vertex 20 54.5 186
vertex 20 60.5 186
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -20 61.5 185
vertex 20 61.5 185
vertex 23.5 61.5 183.5
endloop
endfacet
facet normal -0 0.7 0.7
outer loop
vertex -20 60.5 186
vertex 20 60.5 186
vertex 20 61.5 185
endloop
endfacet
facet normal 0.3 -0.7 0.7
outer loop
vertex 20 53.5 185
vertex 23.5 53.5 183.5
vertex 20 54.5 186
endloop
endfacet
facet normal 0.4 0 0.9
outer loop
vertex 20 54.5 186
vertex 23.5 60.5 184.5
vertex 20 60.5 186
endloop
endfacet
facet normal 0.3 0.7 0.7
outer loop
vertex 20 60.5 186
vertex 23.5 61.5 183.5
vertex 20 61.5 185
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 36 53.5 165.5
vertex 38.5 53.5 168.5
vertex 20.5 53.5 181
endloop
endfacet
facet normal -0.6 0.6 -0.6
outer loop
vertex 35 60.5 165.5
vertex 20.5 61.5 181
vertex 36 61.5 165.5
endloop
endfacet
facet normal -0 1 -0
outer loop
vertex 36 61.5 165.5
vertex 20.5 61.5 181
vertex 38.5 61.5 168.5
endloop
endfacet
facet normal -0.6 -0.6 -0.6
outer loop
vertex 36 53.5 165.5
vertex 20.5 53.5 181
vertex 20.5 54.5 180
endloop
endfacet
facet normal -0.7 0 -0.7
outer loop
vertex 35 54.5 165.5
vertex 20.5 54.5 180
vertex 20.5 60.5 180
endloop
endfacet
facet normal -0.6 0.6 -0.6
outer loop
vertex 35 60.5 165.5
vertex 20.5 60.5 180
vertex 20.5 61.5 181
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 38.5 53.5 168.5
vertex 26 53.5 181
vertex 20.5 53.5 181
endloop
endfacet
facet normal 0.6 -0.6 0.6
outer loop
vertex 38.5 53.5 168.5
vertex 27 54.5 181
vertex 26 53.5 181
endloop
endfacet
facet normal 0.7 -0 0.7
outer loop
vertex 39.5 54.5 168.5
vertex 23.5 60.5 184.5
vertex 27 54.5 181
endloop
endfacet
facet normal 0.6 -0.6 0.6
outer loop
vertex 39.5 54.5 168.5
vertex 27 54.5 181
vertex 27 54.5 181
endloop
endfacet
facet normal 0.7 0 0.7
outer loop
vertex 39.5 54.5 168.5
vertex 27 60 181
vertex 23.5 60.5 184.5
endloop
endfacet
facet normal 0.6 0.6 0.6
outer loop
vertex 39.5 60.5 168.5
vertex 27 60.5 181
vertex 27 60.5 181
endloop
endfacet
facet normal 0.7 0 0.7
outer loop
vertex 39.5 60.5 168.5
vertex 27 60.5 181
vertex 27 60 181
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 38.5 61.5 168.5
vertex 20.5 61.5 181
vertex 26 61.5 181
endloop
endfacet
facet normal 0.6 0.6 0.6
outer loop
vertex 38.5 61.5 168.5
vertex 26 61.5 181
vertex 27 60.5 181
endloop
endfacet
facet normal 0.6 -0.6 0.6
outer loop
vertex 38.5 53.5 168.5
vertex 39.5 54.5 168.5
vertex 27 54.5 181
endloop
endfacet
facet normal 0.7 -0 0.7
outer loop
vertex 39.5 54.5 168.5
vertex 39.5 60.5 168.5
vertex 27 60 181
endloop
endfacet
facet normal 0.6 0.6 0.6
outer loop
vertex 39.5 60.5 168.5
vertex 38.5 61.5 168.5
vertex 27 60.5 181
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 20.5 53.5 181
vertex 26 53.5 181
vertex 23.5 53.5 183.5
endloop
endfacet
facet normal 0.6 -0.6 0.6
outer loop
vertex 26 53.5 181
vertex 26 54 181.5
vertex 23.5 53.5 183.5
endloop
endfacet
facet normal 0.6 -0.6 0.6
outer loop
vertex 26 53.5 181
vertex 27 54.5 181
vertex 26 54 181.5
endloop
endfacet
facet normal 0.6 -0.6 0.6
outer loop
vertex 26 54 181.5
vertex 27 54.5 181
vertex 27 54.5 181
endloop
endfacet
facet normal 0.6 0.6 0.6
outer loop
vertex 26 61 181.5
vertex 27 60.5 181
vertex 27 60.5 181
endloop
endfacet
facet normal -0 1 0
outer loop
vertex 20.5 61.5 181
vertex 23.5 61.5 183.5
vertex 26 61.5 181
endloop
endfacet
facet normal 0.6 0.6 0.6
outer loop
vertex 26 61 181.5
vertex 26 61.5 181
vertex 23.5 61.5 183.5
endloop
endfacet
facet normal 0.6 0.6 0.6
outer loop
vertex 26 61 181.5
vertex 27 60.5 181
vertex 26 61.5 181
endloop
endfacet
facet normal 0.6 -0.6 0.6
outer loop
vertex 26 54 181.5
vertex 27 54.5 181
vertex 23.5 54.5 184.5
endloop
endfacet
facet normal 0.7 -0 0.7
outer loop
vertex 23.5 60.5 184.5
vertex 23.5 54.5 184.5
vertex 27 54.5 181
endloop
endfacet
facet normal 0.6 -0.6 0.6
outer loop
vertex 26 54 181.5
vertex 23.5 54.5 184.5
vertex 23.5 53.5 183.5
endloop
endfacet
facet normal 0.6 0.6 0.6
outer loop
vertex 26 61 181.5
vertex 23.5 60.5 184.5
vertex 27 60.5 181
endloop
endfacet
facet normal 0.7 -0 0.7
outer loop
vertex 27 60 181
vertex 27 60.5 181
vertex 23.5 60.5 184.5
endloop
endfacet
facet normal 0.3 -0.7 0.7
outer loop
vertex 20 54.5 186
vertex 23.5 53.5 183.5
vertex 23.5 54.5 184.5
endloop
endfacet
facet normal 0.4 -0 0.9
outer loop
vertex 20 54.5 186
vertex 23.5 54.5 184.5
vertex 23.5 60.5 184.5
endloop
endfacet
facet normal 0.6 0.6 0.6
outer loop
vertex 26 61 181.5
vertex 23.5 61.5 183.5
vertex 23.5 60.5 184.5
endloop
endfacet
facet normal 0.3 0.7 0.7
outer loop
vertex 20 60.5 186
vertex 23.5 60.5 184.5
vertex 23.5 61.5 183.5
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex -38.5 -47 158
vertex -38 -48.5 155
vertex -38.5 -47 155
endloop
endfacet
facet normal 0.9 -0.4 -0
outer loop
vertex -38 -45.5 158
vertex -38.5 -47 155
vertex -38 -46 155
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex -38.5 -47 158
vertex -38 -48 158
vertex -38 -48.5 155
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -38 -45.5 158
vertex -38.5 -47 158
vertex -38.5 -47 155
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -38 -45.5 158
vertex -38 -46 155
vertex -37 -45.5 155
endloop
endfacet
facet normal 0 1 0.1
outer loop
vertex -37 -48.5 158
vertex -25 -48.5 155
vertex -38 -48.5 155
endloop
endfacet
facet normal 0.4 0.9 -0
outer loop
vertex -38 -48 158
vertex -37 -48.5 158
vertex -38 -48.5 155
endloop
endfacet
facet normal 0 -1 -0.1
outer loop
vertex -25 -45.5 158
vertex -38 -45.5 158
vertex -37 -45.5 155
endloop
endfacet
facet normal -0 -1 0.1
outer loop
vertex -37 -45.5 155
vertex -24 -45.5 155
vertex -25 -45.5 158
endloop
endfacet
facet normal -0 1 -0.1
outer loop
vertex -37 -48.5 158
vertex -24 -48.5 158
vertex -25 -48.5 155
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -23.5 -48 155
vertex -25 -48.5 155
vertex -24 -48.5 158
endloop
endfacet
facet normal -0.9 0.4 -0
outer loop
vertex -23 -47 155
vertex -23.5 -48 155
vertex -24 -48.5 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex -24 -45.5 155
vertex -23 -47 155
vertex -23 -47 158
endloop
endfacet
facet normal -0.4 -0.9 -0
outer loop
vertex -24 -45.5 155
vertex -23.5 -46 158
vertex -25 -45.5 158
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -23 -47 155
vertex -24 -48.5 158
vertex -23 -47 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex -24 -45.5 155
vertex -23 -47 158
vertex -23.5 -46 158
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex -38.5 47 158
vertex -38 46 155
vertex -38.5 47 155
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -38 48 158
vertex -38.5 47 155
vertex -38 48 155
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -38 48 158
vertex -38.5 47 158
vertex -38.5 47 155
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex -38.5 47 158
vertex -38 46 158
vertex -38 46 155
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex -38 46 158
vertex -37 45.5 155
vertex -38 46 155
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -37 48.5 158
vertex -38 48 155
vertex -37 48.5 155
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -37 45.5 158
vertex -25 45.5 155
vertex -37 45.5 155
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex -38 46 158
vertex -37 45.5 158
vertex -37 45.5 155
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -37 48.5 158
vertex -38 48 158
vertex -38 48 155
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex -25 48.5 158
vertex -37 48.5 158
vertex -37 48.5 155
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -37 48.5 155
vertex -25 48.5 155
vertex -25 48.5 158
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex -25 45.5 155
vertex -37 45.5 158
vertex -25 45.5 158
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -23.5 46 155
vertex -25 45.5 155
vertex -25 45.5 158
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -23 47 155
vertex -23.5 46 155
vertex -23.5 46 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex -23.5 48 155
vertex -23 47 155
vertex -23 47 158
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex -25 48.5 155
vertex -23.5 48 155
vertex -23.5 48 158
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex -25 48.5 155
vertex -23.5 48 158
vertex -25 48.5 158
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -23.5 46 155
vertex -25 45.5 158
vertex -23.5 46 158
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -23 47 155
vertex -23.5 46 158
vertex -23 47 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex -23.5 48 155
vertex -23 47 158
vertex -23.5 48 158
endloop
endfacet
facet normal 0.4 0.9 -0
outer loop
vertex 25 -48.5 155
vertex 23.5 -48 155
vertex 23.5 -48 158
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex 23.5 -48 155
vertex 23 -47 155
vertex 23 -47 158
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 23 -47 155
vertex 23.5 -46 155
vertex 23.5 -46 158
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 23.5 -46 155
vertex 25 -45.5 155
vertex 25 -45.5 158
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex 23.5 -48 155
vertex 23 -47 158
vertex 23.5 -48 158
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 23 -47 155
vertex 23.5 -46 158
vertex 23 -47 158
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 23.5 -46 155
vertex 25 -45.5 158
vertex 23.5 -46 158
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 25 -48.5 155
vertex 23.5 -48 158
vertex 25 -48.5 158
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 37 -48.5 155
vertex 25 -48.5 155
vertex 25 -48.5 158
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 25 -45.5 155
vertex 37 -45.5 158
vertex 25 -45.5 158
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 25 -45.5 155
vertex 37 -45.5 155
vertex 37 -45.5 158
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 38 -48 155
vertex 37 -48.5 155
vertex 37 -48.5 158
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 37 -45.5 155
vertex 38 -46 155
vertex 38 -46 158
endloop
endfacet
facet normal -0 1 0
outer loop
vertex 25 -48.5 158
vertex 37 -48.5 158
vertex 37 -48.5 155
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 38 -48 155
vertex 37 -48.5 158
vertex 38 -48 158
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 37 -45.5 155
vertex 38 -46 158
vertex 37 -45.5 158
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 38.5 -47 155
vertex 38 -48 155
vertex 38 -48 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex 38 -46 155
vertex 38.5 -47 155
vertex 38.5 -47 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex 38 -46 155
vertex 38.5 -47 158
vertex 38 -46 158
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 38.5 -47 155
vertex 38 -48 158
vertex 38.5 -47 158
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex 23.5 46 155
vertex 23 47 155
vertex 23 47 158
endloop
endfacet
facet normal 0.4 0.9 -0
outer loop
vertex 25 45.5 155
vertex 23.5 46 155
vertex 23.5 46 158
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 23 47 155
vertex 23.5 48 155
vertex 23.5 48 158
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 23.5 48 155
vertex 25 48.5 155
vertex 25 48.5 158
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex 23.5 46 155
vertex 23 47 158
vertex 23.5 46 158
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 23 47 155
vertex 23.5 48 158
vertex 23 47 158
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 23.5 48 155
vertex 25 48.5 158
vertex 23.5 48 158
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 25 45.5 155
vertex 23.5 46 158
vertex 25 45.5 158
endloop
endfacet
facet normal 0 1 -0
outer loop
vertex 37 45.5 155
vertex 25 45.5 155
vertex 25 45.5 158
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 25 48.5 155
vertex 37 48.5 155
vertex 25 48.5 158
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 38 46 155
vertex 37 45.5 155
vertex 37 45.5 158
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 37 48.5 155
vertex 38 48 155
vertex 38 48 158
endloop
endfacet
facet normal -0 1 0
outer loop
vertex 25 45.5 158
vertex 37 45.5 158
vertex 37 45.5 155
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex 37 48.5 158
vertex 25 48.5 158
vertex 37 48.5 155
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 38 46 155
vertex 37 45.5 158
vertex 38 46 158
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 37 48.5 155
vertex 38 48 158
vertex 37 48.5 158
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 38.5 47 155
vertex 38 46 155
vertex 38 46 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex 38 48 155
vertex 38.5 47 155
vertex 38.5 47 158
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 38.5 47 155
vertex 38 46 158
vertex 38.5 47 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex 38 48 155
vertex 38.5 47 158
vertex 38 48 158
endloop
endfacet
facet normal 0.5 0.9 0
outer loop
vertex -16.5 -51.5 155
vertex -18 -51 155
vertex -17.5 -51 158
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -15.5 -51 155
vertex -16.5 -51.5 155
vertex -16.5 -51.5 158
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex -18 -51 155
vertex -18 -50 158
vertex -17.5 -51 158
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex -16.5 -51.5 155
vertex -17.5 -51 158
vertex -16.5 -51.5 158
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -15.5 -51 155
vertex -16.5 -51.5 158
vertex -15.5 -51 158
endloop
endfacet
facet normal -0.9 0.4 -0
outer loop
vertex -15.5 -51 155
vertex -15.5 -51 158
vertex -15 -50 158
endloop
endfacet
facet normal 1 0 0.1
outer loop
vertex -18 50 155
vertex -18 -50 158
vertex -18 -51 155
endloop
endfacet
facet normal -1 0 0.1
outer loop
vertex -15 50 155
vertex -15.5 -51 155
vertex -15 -50 158
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -18 50 155
vertex -18 30 158
vertex -18 -50 158
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -15 -50 158
vertex -15 50 158
vertex -15 50 155
endloop
endfacet
facet normal 1 -0 -0.1
outer loop
vertex -18 30 158
vertex -18 50 155
vertex -18 51 158
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -18 50 155
vertex -17.5 51 155
vertex -18 51 158
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -17.5 51 155
vertex -16.5 51.5 155
vertex -16.5 51.5 158
endloop
endfacet
facet normal 0.5 -0.9 -0
outer loop
vertex -17.5 51 155
vertex -16.5 51.5 158
vertex -18 51 158
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex -16.5 51.5 155
vertex -15.5 51 158
vertex -16.5 51.5 158
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex -16.5 51.5 155
vertex -15.5 51 155
vertex -15.5 51 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex -15.5 51 155
vertex -15 50 155
vertex -15 50 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex -15.5 51 155
vertex -15 50 158
vertex -15.5 51 158
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex -12 -51 155
vertex -12.5 -50 155
vertex -12 -51 158
endloop
endfacet
facet normal 0.4 0.9 -0
outer loop
vertex -11 -51.5 155
vertex -12 -51 155
vertex -12 -51 158
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex -11 -51.5 155
vertex -12 -51 158
vertex -11 -51.5 158
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -10 -51 155
vertex -11 -51.5 155
vertex -11 -51.5 158
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -10 -51 155
vertex -11 -51.5 158
vertex -10 -51 158
endloop
endfacet
facet normal -0.9 0.4 -0
outer loop
vertex -10 -51 155
vertex -10 -51 158
vertex -9.5 -50 158
endloop
endfacet
facet normal 1 0 -0.1
outer loop
vertex -12.5 50 158
vertex -12 -51 158
vertex -12.5 -50 155
endloop
endfacet
facet normal -1 0 0.1
outer loop
vertex -9.5 50 155
vertex -10 -51 155
vertex -9.5 -50 158
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -12.5 -50 155
vertex -12.5 50 155
vertex -12.5 50 158
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -9.5 -50 158
vertex -9.5 50 158
vertex -9.5 50 155
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -12.5 50 155
vertex -12 51 155
vertex -12 51 158
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -12 51 155
vertex -11 51.5 155
vertex -11 51.5 158
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -12.5 50 155
vertex -12 51 158
vertex -12.5 50 158
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -12 51 155
vertex -11 51.5 158
vertex -12 51 158
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex -11 51.5 155
vertex -10 51 155
vertex -10 51 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex -10 51 155
vertex -9.5 50 155
vertex -9.5 50 158
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex -11 51.5 155
vertex -10 51 158
vertex -11 51.5 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex -10 51 155
vertex -9.5 50 158
vertex -10 51 158
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex -6.5 -51 155
vertex -7 -50 155
vertex -6.5 -51 158
endloop
endfacet
facet normal 0.4 0.9 -0
outer loop
vertex -5.5 -51.5 155
vertex -6.5 -51 155
vertex -6.5 -51 158
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex -5.5 -51.5 155
vertex -6.5 -51 158
vertex -5.5 -51.5 158
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -4.5 -51 155
vertex -5.5 -51.5 155
vertex -5.5 -51.5 158
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -4.5 -51 155
vertex -5.5 -51.5 158
vertex -4.5 -51 158
endloop
endfacet
facet normal -0.9 0.4 -0
outer loop
vertex -4.5 -51 155
vertex -4.5 -51 158
vertex -4 -50 158
endloop
endfacet
facet normal 1 0 -0.1
outer loop
vertex -7 50 158
vertex -6.5 -51 158
vertex -7 -50 155
endloop
endfacet
facet normal -1 0 0.1
outer loop
vertex -4 50 155
vertex -4.5 -51 155
vertex -4 -50 158
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -7 -50 155
vertex -7 50 155
vertex -7 50 158
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -4 -50 158
vertex -4 50 158
vertex -4 50 155
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -7 50 155
vertex -6.5 51 155
vertex -6.5 51 158
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -6.5 51 155
vertex -5.5 51.5 155
vertex -5.5 51.5 158
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -7 50 155
vertex -6.5 51 158
vertex -7 50 158
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -6.5 51 155
vertex -5.5 51.5 158
vertex -6.5 51 158
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex -5.5 51.5 155
vertex -4.5 51 155
vertex -4.5 51 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex -4.5 51 155
vertex -4 50 155
vertex -4 50 158
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex -5.5 51.5 155
vertex -4.5 51 158
vertex -5.5 51.5 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex -4.5 51 155
vertex -4 50 158
vertex -4.5 51 158
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex -1 -51 155
vertex -1.5 -50 155
vertex -1.5 -50 158
endloop
endfacet
facet normal 0.4 0.9 -0
outer loop
vertex -1 -51 155
vertex -1 -51 158
vertex 0 -51.5 155
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex -1 -51 155
vertex -1.5 -50 158
vertex -1 -51 158
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 0 -51.5 155
vertex -1 -51 158
vertex 0 -51.5 158
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -1.5 50 158
vertex -1.5 -50 158
vertex -1.5 -50 155
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -1.5 -50 155
vertex -1.5 50 155
vertex -1.5 50 158
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -1.5 50 155
vertex -1 51 155
vertex -1 51 158
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -1 51 155
vertex 0 51.5 155
vertex 0 51.5 158
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -1.5 50 155
vertex -1 51 158
vertex -1.5 50 158
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -1 51 155
vertex 0 51.5 158
vertex -1 51 158
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 0 -51.5 155
vertex 0 -51.5 158
vertex 1 -51 155
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 1.5 -50 155
vertex 1 -51 155
vertex 1 -51 158
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 1 -51 155
vertex 0 -51.5 158
vertex 1 -51 158
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 1.5 -50 155
vertex 1 -51 158
vertex 1.5 -50 158
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 1.5 50 155
vertex 1.5 -50 155
vertex 1.5 -50 158
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 1.5 -50 158
vertex 1.5 50 158
vertex 1.5 50 155
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 0 51.5 155
vertex 1 51 155
vertex 1 51 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex 1 51 155
vertex 1.5 50 155
vertex 1.5 50 158
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 0 51.5 155
vertex 1 51 158
vertex 0 51.5 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex 1 51 155
vertex 1.5 50 158
vertex 1 51 158
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex 4.5 -51 155
vertex 4 -50 155
vertex 4 -50 158
endloop
endfacet
facet normal 0.4 0.9 -0
outer loop
vertex 5.5 -51.5 155
vertex 4.5 -51 155
vertex 4.5 -51 158
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex 4.5 -51 155
vertex 4 -50 158
vertex 4.5 -51 158
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 5.5 -51.5 155
vertex 4.5 -51 158
vertex 5.5 -51.5 158
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 6.5 -51 155
vertex 5.5 -51.5 155
vertex 5.5 -51.5 158
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 7 -50 155
vertex 6.5 -51 155
vertex 6.5 -51 158
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 6.5 -51 155
vertex 5.5 -51.5 158
vertex 6.5 -51 158
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 7 -50 155
vertex 6.5 -51 158
vertex 7 -50 158
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 4 50 158
vertex 4 -50 158
vertex 4 -50 155
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 7 50 155
vertex 7 -50 155
vertex 7 -50 158
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 4 -50 155
vertex 4 50 155
vertex 4 50 158
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 7 -50 158
vertex 7 50 158
vertex 7 50 155
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 4 50 155
vertex 4.5 51 155
vertex 4.5 51 158
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 4.5 51 155
vertex 5.5 51.5 155
vertex 5.5 51.5 158
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 4 50 155
vertex 4.5 51 158
vertex 4 50 158
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 4.5 51 155
vertex 5.5 51.5 158
vertex 4.5 51 158
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 5.5 51.5 155
vertex 6.5 51 155
vertex 6.5 51 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex 6.5 51 155
vertex 7 50 155
vertex 7 50 158
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 5.5 51.5 155
vertex 6.5 51 158
vertex 5.5 51.5 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex 6.5 51 155
vertex 7 50 158
vertex 6.5 51 158
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex 10 -51 155
vertex 9.5 -50 155
vertex 9.5 -50 158
endloop
endfacet
facet normal 0.4 0.9 -0
outer loop
vertex 11 -51.5 155
vertex 10 -51 155
vertex 10 -51 158
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex 10 -51 155
vertex 9.5 -50 158
vertex 10 -51 158
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 11 -51.5 155
vertex 10 -51 158
vertex 11 -51.5 158
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 12 -51 155
vertex 11 -51.5 155
vertex 11 -51.5 158
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 12.5 -50 155
vertex 12 -51 155
vertex 12 -51 158
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 12 -51 155
vertex 11 -51.5 158
vertex 12 -51 158
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 12.5 -50 155
vertex 12 -51 158
vertex 12.5 -50 158
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 9.5 50 158
vertex 9.5 -50 158
vertex 9.5 -50 155
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 12.5 50 155
vertex 12.5 -50 155
vertex 12.5 -50 158
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 9.5 -50 155
vertex 9.5 50 155
vertex 9.5 50 158
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 12.5 -50 158
vertex 12.5 50 158
vertex 12.5 50 155
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 9.5 50 155
vertex 10 51 155
vertex 10 51 158
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 10 51 155
vertex 11 51.5 155
vertex 11 51.5 158
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 9.5 50 155
vertex 10 51 158
vertex 9.5 50 158
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 10 51 155
vertex 11 51.5 158
vertex 10 51 158
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 11 51.5 155
vertex 12 51 155
vertex 12 51 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex 12 51 155
vertex 12.5 50 155
vertex 12.5 50 158
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 11 51.5 155
vertex 12 51 158
vertex 11 51.5 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex 12 51 155
vertex 12.5 50 158
vertex 12 51 158
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex 15.5 -51 155
vertex 15 -50 155
vertex 15 -50 158
endloop
endfacet
facet normal 0.4 0.9 -0
outer loop
vertex 16.5 -51.5 155
vertex 15.5 -51 155
vertex 15.5 -51 158
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex 15.5 -51 155
vertex 15 -50 158
vertex 15.5 -51 158
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 17.5 -51 155
vertex 16.5 -51.5 155
vertex 16.5 -51.5 158
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 18 -50 155
vertex 17.5 -51 155
vertex 18 -51 158
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 16.5 -51.5 155
vertex 15.5 -51 158
vertex 16.5 -51.5 158
endloop
endfacet
facet normal -0.5 0.9 -0
outer loop
vertex 17.5 -51 155
vertex 16.5 -51.5 158
vertex 18 -51 158
endloop
endfacet
facet normal -1 0 -0.1
outer loop
vertex 18 -50 155
vertex 18 -51 158
vertex 18 -30 158
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 15 50 158
vertex 15 -50 158
vertex 15 -50 155
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 18 -50 155
vertex 18 -30 158
vertex 18 32 155
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 15 -50 155
vertex 15 50 155
vertex 15 50 158
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex 18 -30 158
vertex 18 50 155
vertex 18 32 155
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 18 -30 158
vertex 18 50 158
vertex 18 50 155
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 15 50 155
vertex 15.5 51 155
vertex 15.5 51 158
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 15 50 155
vertex 15.5 51 158
vertex 15 50 158
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 15.5 51 155
vertex 16.5 51.5 158
vertex 15.5 51 158
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 15.5 51 155
vertex 16.5 51.5 155
vertex 16.5 51.5 158
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 16.5 51.5 155
vertex 17.5 51 155
vertex 17.5 51 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex 17.5 51 155
vertex 18 50 155
vertex 18 50 158
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 16.5 51.5 155
vertex 17.5 51 158
vertex 16.5 51.5 158
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex 17.5 51 155
vertex 18 50 158
vertex 17.5 51 158
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -42 -68.5 13
vertex -42 -65.5 13
vertex -43 -65.5 13
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -42 -68.5 13
vertex -39 -69.5 13
vertex -42 -65.5 13
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex -42 -68.5 13
vertex -43 -65.5 13
vertex -42 -68.5 11
endloop
endfacet
facet normal -0.4 -0.9 -0
outer loop
vertex -42 -68.5 13
vertex -42 -68.5 11
vertex -39 -69.5 13
endloop
endfacet
facet normal -0.9 -0.4 -0
outer loop
vertex -43 -65.5 13
vertex -43 -65.5 11
vertex -42 -68.5 11
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex -39 -69.5 13
vertex -42 -68.5 11
vertex -39 -69.5 11
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -39 -69.5 13
vertex -38 -48.5 13
vertex -38.5 -47 13
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -39 -69.5 13
vertex -25 -48.5 13
vertex -38 -48.5 13
endloop
endfacet
facet normal -0.7 -0.3 -0.7
outer loop
vertex -42 -68.5 11
vertex -43 -65.5 11
vertex -41 -67.5 10
endloop
endfacet
facet normal -0.3 -0.7 -0.7
outer loop
vertex -42 -68.5 11
vertex -41 -67.5 10
vertex -39 -69.5 11
endloop
endfacet
facet normal -0.7 -0.3 -0.7
outer loop
vertex -43 -65.5 11
vertex -42 -65.5 10
vertex -41 -67.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -41 -67.5 10
vertex -42 -65.5 10
vertex -39 -68.5 10
endloop
endfacet
facet normal -0.3 -0.7 -0.7
outer loop
vertex -39 -69.5 11
vertex -41 -67.5 10
vertex -39 -68.5 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -42 -65.5 10
vertex -38 -65 10
vertex -39 -68.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -42 -65.5 10
vertex -39 -62 10
vertex -38 -65 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -42 -65.5 10
vertex -38 -59 10
vertex -39 -62 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -42 -65.5 10
vertex -37 -48.5 10
vertex -38 -59 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -42 -65.5 10
vertex -38.5 -47 10
vertex -38 -48 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -42 -65.5 10
vertex -38 -48 10
vertex -37 -48.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -39 -68.5 10
vertex -38 -65 10
vertex -35 -66 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -38 -59 10
vertex -37 -48.5 10
vertex -35 -58 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -35 -58 10
vertex -37 -48.5 10
vertex -32 -59 10
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -39 -69.5 13
vertex -17.5 -51 13
vertex -25 -48.5 13
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -39 -69.5 13
vertex -16.5 -51.5 13
vertex -17.5 -51 13
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -32 -59 10
vertex -24 -48.5 10
vertex -17.5 -51 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -32 -59 10
vertex -17.5 -51 10
vertex -16.5 -51.5 10
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -23.5 -48 13
vertex -25 -48.5 13
vertex -17.5 -51 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -23 -47 13
vertex -23.5 -48 13
vertex -18 -50 13
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -24 -45.5 13
vertex -23 -47 13
vertex -18 -50 13
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -32 -59 10
vertex -37 -48.5 10
vertex -24 -48.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -24 -48.5 10
vertex -23 -47 10
vertex -18 -50 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -23 -47 10
vertex -23.5 -46 10
vertex -18 -50 10
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -42 -65.5 13
vertex -39 -69.5 13
vertex -42 68.5 13
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -43 -65.5 13
vertex -42 -65.5 13
vertex -43 65.5 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -39 -69.5 13
vertex -38.5 -47 13
vertex -37 45.5 13
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex -43 -65.5 13
vertex -43 65.5 11
vertex -43 -65.5 11
endloop
endfacet
facet normal -0.7 0 -0.7
outer loop
vertex -43 -65.5 11
vertex -43 65.5 11
vertex -42 -65.5 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -42 -65.5 10
vertex -37 45.5 10
vertex -38.5 -47 10
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -38.5 -47 13
vertex -38 -46 13
vertex -37 45.5 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -37 45.5 10
vertex -38 -45.5 10
vertex -38.5 -47 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex -25 -45.5 10
vertex -38 -45.5 10
vertex -18 30 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -23.5 -46 10
vertex -25 -45.5 10
vertex -18 30 10
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -38 -46 13
vertex -37 -45.5 13
vertex -18 50 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -37 -45.5 13
vertex -24 -45.5 13
vertex -18 50 13
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -39 -69.5 13
vertex -39 -69.5 11
vertex 39 -69.5 11
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -32 -59 10
vertex -16.5 -51.5 10
vertex -11 -51.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -32 -59 10
vertex -11 -51.5 10
vertex -5.5 -51.5 10
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex -39 -69.5 11
vertex -39 -68.5 10
vertex 39 -69.5 11
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -39 -68.5 10
vertex -35 -66 10
vertex 41 -67.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -35 -66 10
vertex -32 -65 10
vertex 32 -65 10
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -17.5 -51 13
vertex -18 -50 13
vertex -23.5 -48 13
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -15.5 -51 13
vertex -12 -51 13
vertex -12.5 -50 13
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -11 -51.5 13
vertex -12 -51 13
vertex -15.5 -51 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -18 -50 10
vertex -17.5 -51 10
vertex -24 -48.5 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -16.5 -51.5 10
vertex -15.5 -51 10
vertex -12 -51 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -15.5 -51 10
vertex -15 -50 10
vertex -12 -51 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -16.5 -51.5 10
vertex -12 -51 10
vertex -11 -51.5 10
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -39 -69.5 13
vertex 42 -68.5 13
vertex -16.5 -51.5 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -32 -65 10
vertex -31 -62 10
vertex 31 -62 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -31 -62 10
vertex -32 -59 10
vertex 32 -59 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -32 -59 10
vertex -5.5 -51.5 10
vertex 32 -59 10
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -10 -51 13
vertex -11 -51.5 13
vertex -5.5 -51.5 13
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -10 -51 13
vertex -6.5 -51 13
vertex -7 -50 13
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -10 -51 13
vertex -5.5 -51.5 13
vertex -6.5 -51 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -4.5 -51 13
vertex -5.5 -51.5 13
vertex 0 -51.5 13
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -4.5 -51 13
vertex -1 -51 13
vertex -1.5 -50 13
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -4.5 -51 13
vertex 0 -51.5 13
vertex -1 -51 13
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -11 -51.5 10
vertex -10 -51 10
vertex -6.5 -51 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -10 -51 10
vertex -9.5 -50 10
vertex -6.5 -51 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -11 -51.5 10
vertex -6.5 -51 10
vertex -5.5 -51.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -5.5 -51.5 10
vertex -4.5 -51 10
vertex -1 -51 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -4.5 -51 10
vertex -4 -50 10
vertex -1 -51 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -5.5 -51.5 10
vertex -1 -51 10
vertex 0 -51.5 10
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -18 30 10
vertex -18 -50 10
vertex -23.5 -46 10
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -18 50 13
vertex -24 -45.5 13
vertex -18 -50 13
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -15 50 13
vertex -15.5 -51 13
vertex -12.5 -50 13
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -12.5 50 10
vertex -12 -51 10
vertex -15 -50 10
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -9.5 50 13
vertex -10 -51 13
vertex -7 -50 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -4 50 13
vertex -4.5 -51 13
vertex -1.5 -50 13
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -7 50 10
vertex -6.5 -51 10
vertex -9.5 -50 10
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -1.5 50 10
vertex -1 -51 10
vertex -4 -50 10
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -39 -69.5 13
vertex -38 46 13
vertex -38.5 47 13
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -39 -69.5 13
vertex -37 45.5 13
vertex -38 46 13
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -39 -69.5 13
vertex -38.5 47 13
vertex -42 68.5 13
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -38 -46 13
vertex -25 45.5 13
vertex -37 45.5 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -42 -65.5 10
vertex -38 46 10
vertex -37 45.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -42 -65.5 10
vertex -38.5 47 10
vertex -38 46 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -42 -65.5 10
vertex -39 62 10
vertex -38.5 47 10
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -43 -65.5 13
vertex -43 65.5 13
vertex -43 65.5 11
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -42 -65.5 13
vertex -42 68.5 13
vertex -43 65.5 13
endloop
endfacet
facet normal -0.7 0 -0.7
outer loop
vertex -42 -65.5 10
vertex -43 65.5 11
vertex -42 65.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -42 -65.5 10
vertex -41 67.5 10
vertex -39 62 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -42 -65.5 10
vertex -42 65.5 10
vertex -41 67.5 10
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -38 -46 13
vertex -23.5 46 13
vertex -25 45.5 13
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -38 -46 13
vertex -18 50 13
vertex -23.5 46 13
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -37 45.5 10
vertex -18 30 10
vertex -38 -45.5 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -39 62 10
vertex -38 48.5 10
vertex -38.5 47 10
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -42 68.5 13
vertex -38.5 47 13
vertex -38 48 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -42 68.5 13
vertex -38 48 13
vertex -37 48.5 13
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -43 65.5 13
vertex -42 68.5 13
vertex -43 65.5 11
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -42 68.5 13
vertex -39 69.5 13
vertex -42 68.5 11
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -42 68.5 13
vertex -42 68.5 11
vertex -43 65.5 11
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -39 69.5 13
vertex -39 69.5 11
vertex -42 68.5 11
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex -42 68.5 13
vertex -37 48.5 13
vertex -24 48.5 13
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex -38 59 10
vertex -38 48.5 10
vertex -39 62 10
endloop
endfacet
facet normal -0.7 0.3 -0.7
outer loop
vertex -43 65.5 11
vertex -42 68.5 11
vertex -41 67.5 10
endloop
endfacet
facet normal -0.3 0.7 -0.7
outer loop
vertex -42 68.5 11
vertex -39 69.5 11
vertex -41 67.5 10
endloop
endfacet
facet normal -0.7 0.3 -0.7
outer loop
vertex -43 65.5 11
vertex -41 67.5 10
vertex -42 65.5 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -41 67.5 10
vertex -38 65 10
vertex -39 62 10
endloop
endfacet
facet normal -0.3 0.7 -0.7
outer loop
vertex -39 69.5 11
vertex -39 68.5 10
vertex -41 67.5 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -41 67.5 10
vertex -35 66 10
vertex -38 65 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -38 59 10
vertex -35 58 10
vertex -38 48.5 10
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -23 47 13
vertex -23.5 46 13
vertex -18 50 13
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -24 48.5 13
vertex -23 47 13
vertex -18 50 13
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -35 58 10
vertex -25 48.5 10
vertex -38 48.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -37 45.5 10
vertex -24 45.5 10
vertex -18 30 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -24 45.5 10
vertex -23 47 10
vertex -18 51 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -23 47 10
vertex -23.5 48 10
vertex -18 51 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -23.5 48 10
vertex -25 48.5 10
vertex -18 51 10
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -42 68.5 13
vertex -24 48.5 13
vertex -18 50 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -42 68.5 13
vertex -18 50 13
vertex -17.5 51 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -42 68.5 13
vertex -17.5 51 13
vertex -16.5 51.5 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -35 58 10
vertex -32 59 10
vertex -25 48.5 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -32 59 10
vertex -18 51 10
vertex -25 48.5 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -32 59 10
vertex -16.5 51.5 10
vertex -18 51 10
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -12.5 -50 13
vertex -12 51 13
vertex -15 50 13
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex -12.5 50 10
vertex -15 -50 10
vertex -15.5 51 10
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -7 -50 13
vertex -6.5 51 13
vertex -9.5 50 13
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -1.5 -50 13
vertex -1 51 13
vertex -4 50 13
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex -9.5 -50 10
vertex -10 51 10
vertex -7 50 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex -4 -50 10
vertex -4.5 51 10
vertex -1.5 50 10
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -15.5 51 13
vertex -15 50 13
vertex -12 51 13
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -12 51 13
vertex -11 51.5 13
vertex -15.5 51 13
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex -18 30 10
vertex -24 45.5 10
vertex -18 51 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -15.5 51 10
vertex -16.5 51.5 10
vertex -11 51.5 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex -15.5 51 10
vertex -12 51 10
vertex -12.5 50 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex -15.5 51 10
vertex -11 51.5 10
vertex -12 51 10
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -42 68.5 13
vertex 39 69.5 13
vertex -39 69.5 13
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -39 69.5 13
vertex 39 69.5 11
vertex -39 69.5 11
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -32 59 10
vertex -11 51.5 10
vertex -16.5 51.5 10
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -32 59 10
vertex -5.5 51.5 10
vertex -11 51.5 10
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -41 67.5 10
vertex 32 65 10
vertex -35 66 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -41 67.5 10
vertex -39 68.5 10
vertex 39 68.5 10
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -35 66 10
vertex 32 65 10
vertex -32 65 10
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex -39 69.5 11
vertex 39 68.5 10
vertex -39 68.5 10
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -11 51.5 13
vertex -10 51 13
vertex -6.5 51 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -10 51 13
vertex -9.5 50 13
vertex -6.5 51 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -11 51.5 13
vertex -6.5 51 13
vertex -5.5 51.5 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -5.5 51.5 13
vertex -4.5 51 13
vertex -1 51 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -4.5 51 13
vertex -4 50 13
vertex -1 51 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -5.5 51.5 13
vertex -1 51 13
vertex 0 51.5 13
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -10 51 10
vertex -11 51.5 10
vertex -5.5 51.5 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex -10 51 10
vertex -6.5 51 10
vertex -7 50 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex -10 51 10
vertex -5.5 51.5 10
vertex -6.5 51 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -4.5 51 10
vertex -5.5 51.5 10
vertex 0 51.5 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex -4.5 51 10
vertex -1 51 10
vertex -1.5 50 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex -4.5 51 10
vertex 0 51.5 10
vertex -1 51 10
endloop
endfacet
facet normal -0 0 1
outer loop
vertex -42 68.5 13
vertex -16.5 51.5 13
vertex 39 69.5 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -32 59 10
vertex -31 62 10
vertex 31 62 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -31 62 10
vertex -32 65 10
vertex 32 65 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -32 59 10
vertex 32 59 10
vertex -5.5 51.5 10
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 42 -68.5 13
vertex -15.5 -51 13
vertex -16.5 -51.5 13
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex 42 -68.5 13
vertex -11 -51.5 13
vertex -15.5 -51 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 42 -68.5 13
vertex -5.5 -51.5 13
vertex -11 -51.5 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -35 -66 10
vertex 32 -65 10
vertex 35 -66 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -32 -65 10
vertex 31 -62 10
vertex 32 -65 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -31 -62 10
vertex 32 -59 10
vertex 31 -62 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 32 -59 10
vertex -5.5 -51.5 10
vertex 0 -51.5 10
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 0 -51.5 13
vertex 5.5 -51.5 13
vertex 1 -51 13
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex 1 -51 13
vertex 4.5 -51 13
vertex 4 -50 13
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex 1 -51 13
vertex 5.5 -51.5 13
vertex 4.5 -51 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 6.5 -51 13
vertex 5.5 -51.5 13
vertex 11 -51.5 13
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex 6.5 -51 13
vertex 10 -51 13
vertex 9.5 -50 13
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex 6.5 -51 13
vertex 11 -51.5 13
vertex 10 -51 13
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 0 -51.5 10
vertex 1 -51 10
vertex 4.5 -51 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 1 -51 10
vertex 1.5 -50 10
vertex 4.5 -51 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 0 -51.5 10
vertex 4.5 -51 10
vertex 5.5 -51.5 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 5.5 -51.5 10
vertex 6.5 -51 10
vertex 10 -51 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 6.5 -51 10
vertex 7 -50 10
vertex 10 -51 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 5.5 -51.5 10
vertex 10 -51 10
vertex 11 -51.5 10
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -39 -69.5 13
vertex 39 -69.5 11
vertex 39 -69.5 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -39 -69.5 13
vertex 39 -69.5 13
vertex 42 -68.5 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 42 -68.5 13
vertex 0 -51.5 13
vertex -5.5 -51.5 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 42 -68.5 13
vertex 5.5 -51.5 13
vertex 0 -51.5 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 42 -68.5 13
vertex 11 -51.5 13
vertex 5.5 -51.5 13
endloop
endfacet
facet normal 0 -0.7 -0.7
outer loop
vertex -39 -68.5 10
vertex 39 -68.5 10
vertex 39 -69.5 11
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -39 -68.5 10
vertex 41 -67.5 10
vertex 39 -68.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -35 -66 10
vertex 35 -66 10
vertex 41 -67.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 32 -59 10
vertex 0 -51.5 10
vertex 5.5 -51.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 32 -59 10
vertex 5.5 -51.5 10
vertex 11 -51.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 32 -59 10
vertex 11 -51.5 10
vertex 16.5 -51.5 10
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 12 -51 13
vertex 11 -51.5 13
vertex 16.5 -51.5 13
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex 12 -51 13
vertex 15.5 -51 13
vertex 15 -50 13
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex 12 -51 13
vertex 16.5 -51.5 13
vertex 15.5 -51 13
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 11 -51.5 10
vertex 12 -51 10
vertex 15.5 -51 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 12 -51 10
vertex 12.5 -50 10
vertex 15.5 -51 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 11 -51.5 10
vertex 15.5 -51 10
vertex 16.5 -51.5 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 18 -51 10
vertex 18 -30 10
vertex 24 -45.5 10
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 1.5 50 13
vertex 1 -51 13
vertex 4 -50 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 7 50 13
vertex 6.5 -51 13
vertex 9.5 -50 13
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 4 50 10
vertex 4.5 -51 10
vertex 1.5 -50 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 9.5 50 10
vertex 10 -51 10
vertex 7 -50 10
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 18 -51 13
vertex 23 -47 13
vertex 18 32 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 12.5 50 13
vertex 12 -51 13
vertex 15 -50 13
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 15 50 10
vertex 15.5 -51 10
vertex 12.5 -50 10
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 42 -68.5 13
vertex 16.5 -51.5 13
vertex 11 -51.5 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 42 -68.5 13
vertex 18 -51 13
vertex 16.5 -51.5 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 42 -68.5 13
vertex 24 -48.5 13
vertex 18 -51 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 32 -59 10
vertex 16.5 -51.5 10
vertex 18 -51 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 32 -59 10
vertex 18 -51 10
vertex 25 -48.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 32 -59 10
vertex 25 -48.5 10
vertex 35 -58 10
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 24 -48.5 13
vertex 23 -47 13
vertex 18 -51 13
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 23.5 -48 10
vertex 25 -48.5 10
vertex 18 -51 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 23 -47 10
vertex 23.5 -48 10
vertex 18 -51 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 24 -45.5 10
vertex 23 -47 10
vertex 18 -51 10
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 37 -45.5 10
vertex 24 -45.5 10
vertex 18 -30 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 35 -58 10
vertex 25 -48.5 10
vertex 38 -48.5 10
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex 42 -68.5 13
vertex 37 -48.5 13
vertex 24 -48.5 13
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 39 -69.5 13
vertex 39 -69.5 11
vertex 42 -68.5 13
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 42 -68.5 13
vertex 42 -68.5 11
vertex 43 -65.5 13
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 42 -68.5 13
vertex 39 -69.5 11
vertex 42 -68.5 11
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 43 -65.5 13
vertex 42 -68.5 11
vertex 43 -65.5 11
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 42 -68.5 13
vertex 38 -48 13
vertex 37 -48.5 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 42 -68.5 13
vertex 38.5 -47 13
vertex 38 -48 13
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 35 -58 10
vertex 38 -48.5 10
vertex 38 -59 10
endloop
endfacet
facet normal 0.3 -0.7 -0.7
outer loop
vertex 39 -69.5 11
vertex 41 -67.5 10
vertex 42 -68.5 11
endloop
endfacet
facet normal 0.7 -0.3 -0.7
outer loop
vertex 42 -68.5 11
vertex 41 -67.5 10
vertex 43 -65.5 11
endloop
endfacet
facet normal 0.3 -0.7 -0.7
outer loop
vertex 39 -69.5 11
vertex 39 -68.5 10
vertex 41 -67.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 35 -66 10
vertex 38 -65 10
vertex 41 -67.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 38 -65 10
vertex 39 -62 10
vertex 41 -67.5 10
endloop
endfacet
facet normal 0.7 -0.3 -0.7
outer loop
vertex 43 -65.5 11
vertex 41 -67.5 10
vertex 42 -65.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 39 -62 10
vertex 38 -59 10
vertex 38 -48.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 39 -62 10
vertex 38 -48.5 10
vertex 38.5 -47 10
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 23 -47 13
vertex 23.5 -46 13
vertex 18 32 13
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 23.5 -46 13
vertex 25 -45.5 13
vertex 18 32 13
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 25 -45.5 13
vertex 37 -45.5 13
vertex 18 32 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 18 -30 10
vertex 25 45.5 10
vertex 37 -45.5 10
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 42 -68.5 13
vertex 38 46 13
vertex 38.5 -47 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 42 -68.5 13
vertex 43 -65.5 13
vertex 43 65.5 13
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex 43 -65.5 13
vertex 43 -65.5 11
vertex 43 65.5 11
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 41 -67.5 10
vertex 42 65.5 10
vertex 42 -65.5 10
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex 43 -65.5 11
vertex 42 -65.5 10
vertex 42 65.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 39 -62 10
vertex 41 67.5 10
vertex 41 -67.5 10
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 37 -45.5 13
vertex 38 -46 13
vertex 38 46 13
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex 38 -46 13
vertex 38.5 -47 13
vertex 38 46 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 39 -62 10
vertex 38.5 -47 10
vertex 41 67.5 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 41 67.5 10
vertex 38 -46 10
vertex 37 -45.5 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 41 67.5 10
vertex 38.5 -47 10
vertex 38 -46 10
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 4 -50 13
vertex 4.5 51 13
vertex 1.5 50 13
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 9.5 -50 13
vertex 10 51 13
vertex 7 50 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 1.5 -50 10
vertex 1 51 10
vertex 4 50 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 9.5 50 10
vertex 7 -50 10
vertex 6.5 51 10
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 15 -50 13
vertex 15.5 51 13
vertex 12.5 50 13
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 15 50 10
vertex 12.5 -50 10
vertex 12 51 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 18 -30 10
vertex 17.5 51 10
vertex 23.5 46 10
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 0 51.5 13
vertex 1 51 13
vertex 4.5 51 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 1 51 13
vertex 1.5 50 13
vertex 4.5 51 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 0 51.5 13
vertex 4.5 51 13
vertex 5.5 51.5 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 5.5 51.5 13
vertex 6.5 51 13
vertex 10 51 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 6.5 51 13
vertex 7 50 13
vertex 10 51 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 5.5 51.5 13
vertex 10 51 13
vertex 11 51.5 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 1 51 10
vertex 0 51.5 10
vertex 5.5 51.5 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 1 51 10
vertex 4.5 51 10
vertex 4 50 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 1 51 10
vertex 5.5 51.5 10
vertex 4.5 51 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 6.5 51 10
vertex 5.5 51.5 10
vertex 11 51.5 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 6.5 51 10
vertex 10 51 10
vertex 9.5 50 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 6.5 51 10
vertex 11 51.5 10
vertex 10 51 10
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 39 69.5 13
vertex -16.5 51.5 13
vertex -15.5 51 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 39 69.5 13
vertex -15.5 51 13
vertex -11 51.5 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 39 69.5 13
vertex -11 51.5 13
vertex -5.5 51.5 13
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 32 59 10
vertex 0 51.5 10
vertex -5.5 51.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -32 59 10
vertex 31 62 10
vertex 32 59 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -31 62 10
vertex 32 65 10
vertex 31 62 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -41 67.5 10
vertex 35 66 10
vertex 32 65 10
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 11 51.5 13
vertex 12 51 13
vertex 15.5 51 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 12 51 13
vertex 12.5 50 13
vertex 15.5 51 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 11 51.5 13
vertex 15.5 51 13
vertex 16.5 51.5 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 18 32 13
vertex 24 45.5 13
vertex 18 50 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 17.5 51 13
vertex 18 50 13
vertex 23.5 48 13
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 12 51 10
vertex 11 51.5 10
vertex 16.5 51.5 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 12 51 10
vertex 15.5 51 10
vertex 15 50 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 12 51 10
vertex 16.5 51.5 10
vertex 15.5 51 10
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 39 69.5 13
vertex -5.5 51.5 13
vertex 0 51.5 13
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 39 69.5 13
vertex 0 51.5 13
vertex 5.5 51.5 13
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -39 69.5 13
vertex 39 69.5 13
vertex 39 69.5 11
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 39 69.5 13
vertex 5.5 51.5 13
vertex 11 51.5 13
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 32 59 10
vertex 5.5 51.5 10
vertex 0 51.5 10
endloop
endfacet
facet normal 0 0.7 -0.7
outer loop
vertex -39 69.5 11
vertex 39 69.5 11
vertex 39 68.5 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex -41 67.5 10
vertex 41 67.5 10
vertex 35 66 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -41 67.5 10
vertex 39 68.5 10
vertex 41 67.5 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 32 59 10
vertex 11 51.5 10
vertex 5.5 51.5 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 32 59 10
vertex 16.5 51.5 10
vertex 11 51.5 10
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 37 -45.5 13
vertex 37 45.5 13
vertex 18 32 13
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 18 -30 10
vertex 23.5 46 10
vertex 25 45.5 10
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 37 -45.5 13
vertex 38 46 13
vertex 37 45.5 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 42 -68.5 13
vertex 38.5 47 13
vertex 38 46 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 42 -68.5 13
vertex 39 69.5 13
vertex 38.5 47 13
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 25 45.5 10
vertex 38 45.5 10
vertex 37 -45.5 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 37 -45.5 10
vertex 38 45.5 10
vertex 38.5 47 10
endloop
endfacet
facet normal 1 -0 0
outer loop
vertex 43 -65.5 13
vertex 43 65.5 11
vertex 43 65.5 13
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 42 -68.5 13
vertex 43 65.5 13
vertex 39 69.5 13
endloop
endfacet
facet normal 0.7 0 -0.7
outer loop
vertex 43 -65.5 11
vertex 42 65.5 10
vertex 43 65.5 11
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 41 67.5 10
vertex 37 -45.5 10
vertex 38.5 47 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 41 -67.5 10
vertex 41 67.5 10
vertex 42 65.5 10
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 37 45.5 13
vertex 24 45.5 13
vertex 18 32 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 24 45.5 13
vertex 23 47 13
vertex 18 50 13
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 23 47 13
vertex 23.5 48 13
vertex 18 50 13
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex 23.5 48 13
vertex 25 48.5 13
vertex 17.5 51 13
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 23 47 10
vertex 23.5 46 10
vertex 17.5 51 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 23.5 48 10
vertex 23 47 10
vertex 17.5 51 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 25 48.5 10
vertex 23.5 48 10
vertex 17.5 51 10
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 32 59 10
vertex 37 48.5 10
vertex 25 48.5 10
endloop
endfacet
facet normal -0 0 1
outer loop
vertex 39 69.5 13
vertex 11 51.5 13
vertex 16.5 51.5 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 39 69.5 13
vertex 16.5 51.5 13
vertex 17.5 51 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 39 69.5 13
vertex 17.5 51 13
vertex 25 48.5 13
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 32 59 10
vertex 17.5 51 10
vertex 16.5 51.5 10
endloop
endfacet
facet normal -0 0 -1
outer loop
vertex 32 59 10
vertex 25 48.5 10
vertex 17.5 51 10
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 35 58 10
vertex 38 48 10
vertex 37 48.5 10
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex 38 59 10
vertex 38.5 47 10
vertex 38 48 10
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 39 69.5 13
vertex 25 48.5 13
vertex 38 48.5 13
endloop
endfacet
facet normal 0 0 1
outer loop
vertex 39 69.5 13
vertex 38 48.5 13
vertex 38.5 47 13
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 39 69.5 13
vertex 42 68.5 13
vertex 39 69.5 11
endloop
endfacet
facet normal -0 -0 1
outer loop
vertex 39 69.5 13
vertex 43 65.5 13
vertex 42 68.5 13
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex 43 65.5 13
vertex 43 65.5 11
vertex 42 68.5 13
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 42 68.5 13
vertex 42 68.5 11
vertex 39 69.5 11
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex 42 68.5 13
vertex 43 65.5 11
vertex 42 68.5 11
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 32 59 10
vertex 35 58 10
vertex 37 48.5 10
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 35 58 10
vertex 38 59 10
vertex 38 48 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 38 59 10
vertex 39 62 10
vertex 38.5 47 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 39 62 10
vertex 41 67.5 10
vertex 38.5 47 10
endloop
endfacet
facet normal 0.3 0.7 -0.7
outer loop
vertex 39 69.5 11
vertex 42 68.5 11
vertex 41 67.5 10
endloop
endfacet
facet normal 0.7 0.3 -0.7
outer loop
vertex 43 65.5 11
vertex 41 67.5 10
vertex 42 68.5 11
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 38 65 10
vertex 41 67.5 10
vertex 39 62 10
endloop
endfacet
facet normal 0.3 0.7 -0.7
outer loop
vertex 39 69.5 11
vertex 41 67.5 10
vertex 39 68.5 10
endloop
endfacet
facet normal 0 -0 -1
outer loop
vertex 35 66 10
vertex 41 67.5 10
vertex 38 65 10
endloop
endfacet
facet normal 0.7 0.3 -0.7
outer loop
vertex 43 65.5 11
vertex 42 65.5 10
vertex 41 67.5 10
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex -39 -62 10
vertex -38 -65 6
vertex -38 -65 10
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -39 -62 10
vertex -38 -59 10
vertex -39 -62 6
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex -38 -65 10
vertex -35 -66 6
vertex -35 -66 10
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -35 -66 10
vertex -32 -65 6
vertex -32 -65 10
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -38 -59 10
vertex -35 -58 10
vertex -38 -59 6
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex -35 -58 10
vertex -32 -59 10
vertex -35 -58 6
endloop
endfacet
facet normal -0.9 -0.4 -0
outer loop
vertex -39 -62 10
vertex -39 -62 6
vertex -38 -65 6
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -38 -59 10
vertex -38 -59 6
vertex -39 -62 6
endloop
endfacet
facet normal -0.4 -0.9 -0
outer loop
vertex -38 -65 10
vertex -38 -65 6
vertex -35 -66 6
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -35 -66 10
vertex -35 -66 6
vertex -32 -65 6
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -35 -58 10
vertex -35 -58 6
vertex -38 -59 6
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex -32 -59 10
vertex -32 -59 6
vertex -35 -58 6
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -32 -65 10
vertex -31 -62 6
vertex -31 -62 10
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex -31 -62 10
vertex -32 -59 6
vertex -32 -59 10
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -32 -65 10
vertex -32 -65 6
vertex -31 -62 6
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex -31 -62 10
vertex -31 -62 6
vertex -32 -59 6
endloop
endfacet
facet normal -0.7 -0.3 0.7
outer loop
vertex -39 -62 6
vertex -43 -62 2
vertex -38 -65 6
endloop
endfacet
facet normal -0.7 -0.3 0.7
outer loop
vertex -38 -65 6
vertex -43 -62 2
vertex -40.5 -67.5 2
endloop
endfacet
facet normal -0.3 -0.7 0.7
outer loop
vertex -38 -65 6
vertex -40.5 -67.5 2
vertex -35 -70 2
endloop
endfacet
facet normal -0.7 0.3 0.7
outer loop
vertex -39 -62 6
vertex -38 -59 6
vertex -43 -62 2
endloop
endfacet
facet normal -0.7 0.3 0.7
outer loop
vertex -38 -59 6
vertex -40.5 -56.5 2
vertex -43 -62 2
endloop
endfacet
facet normal -0.3 0.7 0.7
outer loop
vertex -38 -59 6
vertex -35 -54 2
vertex -40.5 -56.5 2
endloop
endfacet
facet normal -0.3 -0.7 0.7
outer loop
vertex -38 -65 6
vertex -35 -70 2
vertex -35 -66 6
endloop
endfacet
facet normal 0.3 -0.7 0.7
outer loop
vertex -35 -66 6
vertex -35 -70 2
vertex -32 -65 6
endloop
endfacet
facet normal -0.3 0.7 0.7
outer loop
vertex -38 -59 6
vertex -35 -58 6
vertex -35 -54 2
endloop
endfacet
facet normal 0.3 0.7 0.7
outer loop
vertex -35 -58 6
vertex -32 -59 6
vertex -35 -54 2
endloop
endfacet
facet normal 0.7 -0.3 0.7
outer loop
vertex -32 -65 6
vertex -27 -62 2
vertex -31 -62 6
endloop
endfacet
facet normal 0.3 -0.7 0.7
outer loop
vertex -32 -65 6
vertex -35 -70 2
vertex -29.5 -67.5 2
endloop
endfacet
facet normal 0.7 -0.3 0.7
outer loop
vertex -32 -65 6
vertex -29.5 -67.5 2
vertex -27 -62 2
endloop
endfacet
facet normal 0.7 0.3 0.7
outer loop
vertex -31 -62 6
vertex -27 -62 2
vertex -32 -59 6
endloop
endfacet
facet normal 0.3 0.7 0.7
outer loop
vertex -32 -59 6
vertex -29.5 -56.5 2
vertex -35 -54 2
endloop
endfacet
facet normal 0.7 0.3 0.7
outer loop
vertex -32 -59 6
vertex -27 -62 2
vertex -29.5 -56.5 2
endloop
endfacet
facet normal -0.9 -0.4 -0
outer loop
vertex -40.5 -67.5 2
vertex -43 -62 2
vertex -43 -62 0
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex -40.5 -67.5 2
vertex -43 -62 0
vertex -40.5 -67.5 0
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -40.5 -67.5 0
vertex -43 -62 0
vertex -40.5 -56.5 0
endloop
endfacet
facet normal -0.4 -0.9 -0
outer loop
vertex -40.5 -67.5 2
vertex -40.5 -67.5 0
vertex -35 -70 0
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -40.5 -67.5 0
vertex -40.5 -56.5 0
vertex -35 -70 0
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -43 -62 2
vertex -40.5 -56.5 2
vertex -40.5 -56.5 0
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -40.5 -56.5 2
vertex -35 -54 2
vertex -40.5 -56.5 0
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -43 -62 2
vertex -40.5 -56.5 0
vertex -43 -62 0
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex -40.5 -67.5 2
vertex -35 -70 0
vertex -35 -70 2
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -35 -70 2
vertex -35 -70 0
vertex -29.5 -67.5 0
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -35 -70 0
vertex -35 -54 0
vertex -29.5 -67.5 0
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex -35 -54 2
vertex -29.5 -56.5 2
vertex -35 -54 0
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -40.5 -56.5 0
vertex -35 -54 0
vertex -35 -70 0
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -35 -54 2
vertex -35 -54 0
vertex -40.5 -56.5 0
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -35 -70 2
vertex -29.5 -67.5 0
vertex -29.5 -67.5 2
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -29.5 -67.5 2
vertex -29.5 -67.5 0
vertex -27 -62 2
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -27 -62 2
vertex -29.5 -67.5 0
vertex -27 -62 0
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -29.5 -67.5 0
vertex -29.5 -56.5 0
vertex -27 -62 0
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex -27 -62 2
vertex -27 -62 0
vertex -29.5 -56.5 2
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -35 -54 0
vertex -29.5 -56.5 0
vertex -29.5 -67.5 0
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex -35 -54 0
vertex -29.5 -56.5 2
vertex -29.5 -56.5 0
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex -29.5 -56.5 2
vertex -27 -62 0
vertex -29.5 -56.5 0
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex -38 59 10
vertex -39 62 10
vertex -38 59 6
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -39 62 10
vertex -38 65 10
vertex -39 62 6
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex -38 59 10
vertex -35 58 6
vertex -35 58 10
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -35 58 10
vertex -32 59 6
vertex -32 59 10
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -38 65 10
vertex -35 66 10
vertex -38 65 6
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex -35 66 10
vertex -32 65 10
vertex -35 66 6
endloop
endfacet
facet normal -0.9 -0.4 -0
outer loop
vertex -39 62 10
vertex -39 62 6
vertex -38 59 6
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -38 65 10
vertex -38 65 6
vertex -39 62 6
endloop
endfacet
facet normal -0.4 -0.9 -0
outer loop
vertex -38 59 10
vertex -38 59 6
vertex -35 58 6
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -35 58 10
vertex -35 58 6
vertex -32 59 6
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -35 66 10
vertex -35 66 6
vertex -38 65 6
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex -32 65 10
vertex -32 65 6
vertex -35 66 6
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -32 59 10
vertex -31 62 6
vertex -31 62 10
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex -31 62 10
vertex -32 65 6
vertex -32 65 10
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -32 59 10
vertex -32 59 6
vertex -31 62 6
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex -31 62 10
vertex -31 62 6
vertex -32 65 6
endloop
endfacet
facet normal -0.7 -0.3 0.7
outer loop
vertex -38 59 6
vertex -39 62 6
vertex -43 62 2
endloop
endfacet
facet normal -0.7 -0.3 0.7
outer loop
vertex -38 59 6
vertex -43 62 2
vertex -40.5 56.5 2
endloop
endfacet
facet normal -0.3 -0.7 0.7
outer loop
vertex -38 59 6
vertex -40.5 56.5 2
vertex -35 54 2
endloop
endfacet
facet normal -0.7 0.3 0.7
outer loop
vertex -39 62 6
vertex -38 65 6
vertex -43 62 2
endloop
endfacet
facet normal -0.7 0.3 0.7
outer loop
vertex -38 65 6
vertex -40.5 67.5 2
vertex -43 62 2
endloop
endfacet
facet normal -0.3 0.7 0.7
outer loop
vertex -38 65 6
vertex -35 70 2
vertex -40.5 67.5 2
endloop
endfacet
facet normal -0.3 -0.7 0.7
outer loop
vertex -38 59 6
vertex -35 54 2
vertex -35 58 6
endloop
endfacet
facet normal 0.3 -0.7 0.7
outer loop
vertex -35 58 6
vertex -35 54 2
vertex -32 59 6
endloop
endfacet
facet normal -0.3 0.7 0.7
outer loop
vertex -38 65 6
vertex -35 66 6
vertex -35 70 2
endloop
endfacet
facet normal 0.3 0.7 0.7
outer loop
vertex -35 66 6
vertex -32 65 6
vertex -35 70 2
endloop
endfacet
facet normal 0.7 -0.3 0.7
outer loop
vertex -32 59 6
vertex -27 62 2
vertex -31 62 6
endloop
endfacet
facet normal 0.3 -0.7 0.7
outer loop
vertex -32 59 6
vertex -35 54 2
vertex -29.5 56.5 2
endloop
endfacet
facet normal 0.7 -0.3 0.7
outer loop
vertex -32 59 6
vertex -29.5 56.5 2
vertex -27 62 2
endloop
endfacet
facet normal 0.7 0.3 0.7
outer loop
vertex -31 62 6
vertex -27 62 2
vertex -32 65 6
endloop
endfacet
facet normal 0.3 0.7 0.7
outer loop
vertex -32 65 6
vertex -29.5 67.5 2
vertex -35 70 2
endloop
endfacet
facet normal 0.7 0.3 0.7
outer loop
vertex -32 65 6
vertex -27 62 2
vertex -29.5 67.5 2
endloop
endfacet
facet normal -0.9 -0.4 -0
outer loop
vertex -40.5 56.5 2
vertex -43 62 2
vertex -43 62 0
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex -40.5 56.5 2
vertex -43 62 0
vertex -40.5 56.5 0
endloop
endfacet
facet normal -0.4 -0.9 -0
outer loop
vertex -40.5 56.5 2
vertex -40.5 56.5 0
vertex -35 54 0
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -40.5 56.5 0
vertex -40.5 67.5 0
vertex -35 54 0
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -43 62 2
vertex -40.5 67.5 2
vertex -40.5 67.5 0
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -40.5 67.5 2
vertex -35 70 2
vertex -40.5 67.5 0
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -43 62 2
vertex -40.5 67.5 0
vertex -43 62 0
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -40.5 56.5 0
vertex -43 62 0
vertex -40.5 67.5 0
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex -40.5 56.5 2
vertex -35 54 0
vertex -35 54 2
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -35 54 2
vertex -35 54 0
vertex -29.5 56.5 0
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -35 54 0
vertex -35 70 0
vertex -29.5 56.5 0
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex -35 70 2
vertex -29.5 67.5 2
vertex -35 70 0
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -40.5 67.5 0
vertex -35 70 0
vertex -35 54 0
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -35 70 2
vertex -35 70 0
vertex -40.5 67.5 0
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -35 54 2
vertex -29.5 56.5 0
vertex -29.5 56.5 2
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -29.5 56.5 2
vertex -29.5 56.5 0
vertex -27 62 2
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -27 62 2
vertex -29.5 56.5 0
vertex -27 62 0
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex -27 62 2
vertex -27 62 0
vertex -29.5 67.5 2
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -35 70 0
vertex -29.5 67.5 0
vertex -29.5 56.5 0
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex -35 70 0
vertex -29.5 67.5 2
vertex -29.5 67.5 0
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -29.5 56.5 0
vertex -29.5 67.5 0
vertex -27 62 0
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex -29.5 67.5 2
vertex -27 62 0
vertex -29.5 67.5 0
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex 32 -65 10
vertex 31 -62 10
vertex 32 -65 6
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 31 -62 10
vertex 32 -59 10
vertex 31 -62 6
endloop
endfacet
facet normal -0.9 -0.4 -0
outer loop
vertex 31 -62 10
vertex 31 -62 6
vertex 32 -65 6
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 32 -59 10
vertex 32 -59 6
vertex 31 -62 6
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 32 -65 10
vertex 35 -66 6
vertex 35 -66 10
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 35 -66 10
vertex 38 -65 6
vertex 38 -65 10
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 32 -59 10
vertex 35 -58 10
vertex 32 -59 6
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 35 -58 10
vertex 38 -59 10
vertex 35 -58 6
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 38 -65 10
vertex 39 -62 6
vertex 39 -62 10
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex 39 -62 10
vertex 38 -59 6
vertex 38 -59 10
endloop
endfacet
facet normal -0.4 -0.9 -0
outer loop
vertex 32 -65 10
vertex 32 -65 6
vertex 35 -66 6
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 35 -66 10
vertex 35 -66 6
vertex 38 -65 6
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 35 -58 10
vertex 35 -58 6
vertex 32 -59 6
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 38 -59 10
vertex 38 -59 6
vertex 35 -58 6
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 38 -65 10
vertex 38 -65 6
vertex 39 -62 6
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex 39 -62 10
vertex 39 -62 6
vertex 38 -59 6
endloop
endfacet
facet normal -0.7 -0.3 0.7
outer loop
vertex 32 -65 6
vertex 31 -62 6
vertex 27 -62 2
endloop
endfacet
facet normal -0.7 -0.3 0.7
outer loop
vertex 32 -65 6
vertex 27 -62 2
vertex 29.5 -67.5 2
endloop
endfacet
facet normal -0.3 -0.7 0.7
outer loop
vertex 32 -65 6
vertex 29.5 -67.5 2
vertex 35 -70 2
endloop
endfacet
facet normal -0.7 0.3 0.7
outer loop
vertex 31 -62 6
vertex 32 -59 6
vertex 27 -62 2
endloop
endfacet
facet normal -0.7 0.3 0.7
outer loop
vertex 32 -59 6
vertex 29.5 -56.5 2
vertex 27 -62 2
endloop
endfacet
facet normal -0.3 0.7 0.7
outer loop
vertex 32 -59 6
vertex 35 -54 2
vertex 29.5 -56.5 2
endloop
endfacet
facet normal -0.3 -0.7 0.7
outer loop
vertex 32 -65 6
vertex 35 -70 2
vertex 35 -66 6
endloop
endfacet
facet normal 0.3 -0.7 0.7
outer loop
vertex 35 -66 6
vertex 35 -70 2
vertex 38 -65 6
endloop
endfacet
facet normal -0.3 0.7 0.7
outer loop
vertex 32 -59 6
vertex 35 -58 6
vertex 35 -54 2
endloop
endfacet
facet normal 0.3 0.7 0.7
outer loop
vertex 35 -58 6
vertex 38 -59 6
vertex 35 -54 2
endloop
endfacet
facet normal 0.7 -0.3 0.7
outer loop
vertex 38 -65 6
vertex 43 -62 2
vertex 39 -62 6
endloop
endfacet
facet normal 0.3 -0.7 0.7
outer loop
vertex 38 -65 6
vertex 35 -70 2
vertex 40.5 -67.5 2
endloop
endfacet
facet normal 0.7 -0.3 0.7
outer loop
vertex 38 -65 6
vertex 40.5 -67.5 2
vertex 43 -62 2
endloop
endfacet
facet normal 0.7 0.3 0.7
outer loop
vertex 39 -62 6
vertex 43 -62 2
vertex 38 -59 6
endloop
endfacet
facet normal 0.3 0.7 0.7
outer loop
vertex 38 -59 6
vertex 40.5 -56.5 2
vertex 35 -54 2
endloop
endfacet
facet normal 0.7 0.3 0.7
outer loop
vertex 38 -59 6
vertex 43 -62 2
vertex 40.5 -56.5 2
endloop
endfacet
facet normal -0.9 -0.4 -0
outer loop
vertex 29.5 -67.5 2
vertex 27 -62 2
vertex 27 -62 0
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex 29.5 -67.5 2
vertex 27 -62 0
vertex 29.5 -67.5 0
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 29.5 -67.5 0
vertex 27 -62 0
vertex 29.5 -56.5 0
endloop
endfacet
facet normal -0.4 -0.9 -0
outer loop
vertex 29.5 -67.5 2
vertex 29.5 -67.5 0
vertex 35 -70 0
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 29.5 -67.5 0
vertex 29.5 -56.5 0
vertex 35 -70 0
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 27 -62 2
vertex 29.5 -56.5 2
vertex 29.5 -56.5 0
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 29.5 -56.5 2
vertex 35 -54 2
vertex 29.5 -56.5 0
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 27 -62 2
vertex 29.5 -56.5 0
vertex 27 -62 0
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 29.5 -67.5 2
vertex 35 -70 0
vertex 35 -70 2
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 35 -70 2
vertex 35 -70 0
vertex 40.5 -67.5 0
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 35 -70 0
vertex 35 -54 0
vertex 40.5 -67.5 0
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 35 -54 2
vertex 40.5 -56.5 2
vertex 35 -54 0
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 29.5 -56.5 0
vertex 35 -54 0
vertex 35 -70 0
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 29.5 -56.5 0
vertex 35 -54 2
vertex 35 -54 0
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 35 -70 2
vertex 40.5 -67.5 0
vertex 40.5 -67.5 2
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 40.5 -67.5 2
vertex 40.5 -67.5 0
vertex 43 -62 2
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 43 -62 2
vertex 40.5 -67.5 0
vertex 43 -62 0
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 40.5 -67.5 0
vertex 40.5 -56.5 0
vertex 43 -62 0
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex 43 -62 2
vertex 43 -62 0
vertex 40.5 -56.5 2
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 35 -54 0
vertex 40.5 -56.5 0
vertex 40.5 -67.5 0
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 40.5 -56.5 2
vertex 40.5 -56.5 0
vertex 35 -54 0
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex 40.5 -56.5 2
vertex 43 -62 0
vertex 40.5 -56.5 0
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex 32 59 10
vertex 31 62 10
vertex 32 59 6
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 31 62 10
vertex 32 65 10
vertex 31 62 6
endloop
endfacet
facet normal -0.9 -0.4 -0
outer loop
vertex 31 62 10
vertex 31 62 6
vertex 32 59 6
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 32 65 10
vertex 32 65 6
vertex 31 62 6
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 32 59 10
vertex 35 58 6
vertex 35 58 10
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 35 58 10
vertex 38 59 6
vertex 38 59 10
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 32 65 10
vertex 35 66 10
vertex 32 65 6
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 35 66 10
vertex 38 65 10
vertex 35 66 6
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 38 59 10
vertex 39 62 6
vertex 39 62 10
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex 38 65 10
vertex 39 62 10
vertex 38 65 6
endloop
endfacet
facet normal -0.4 -0.9 -0
outer loop
vertex 32 59 10
vertex 32 59 6
vertex 35 58 6
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 35 58 10
vertex 35 58 6
vertex 38 59 6
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 35 66 10
vertex 35 66 6
vertex 32 65 6
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 38 65 10
vertex 38 65 6
vertex 35 66 6
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 38 59 10
vertex 38 59 6
vertex 39 62 6
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex 39 62 10
vertex 39 62 6
vertex 38 65 6
endloop
endfacet
facet normal -0.7 -0.3 0.7
outer loop
vertex 32 59 6
vertex 31 62 6
vertex 27 62 2
endloop
endfacet
facet normal -0.7 -0.3 0.7
outer loop
vertex 32 59 6
vertex 27 62 2
vertex 29.5 56.5 2
endloop
endfacet
facet normal -0.3 -0.7 0.7
outer loop
vertex 32 59 6
vertex 29.5 56.5 2
vertex 35 54 2
endloop
endfacet
facet normal -0.7 0.3 0.7
outer loop
vertex 31 62 6
vertex 32 65 6
vertex 27 62 2
endloop
endfacet
facet normal -0.7 0.3 0.7
outer loop
vertex 32 65 6
vertex 29.5 67.5 2
vertex 27 62 2
endloop
endfacet
facet normal -0.3 0.7 0.7
outer loop
vertex 32 65 6
vertex 35 70 2
vertex 29.5 67.5 2
endloop
endfacet
facet normal -0.3 -0.7 0.7
outer loop
vertex 32 59 6
vertex 35 54 2
vertex 35 58 6
endloop
endfacet
facet normal 0.3 -0.7 0.7
outer loop
vertex 35 58 6
vertex 35 54 2
vertex 38 59 6
endloop
endfacet
facet normal -0.3 0.7 0.7
outer loop
vertex 32 65 6
vertex 35 66 6
vertex 35 70 2
endloop
endfacet
facet normal 0.3 0.7 0.7
outer loop
vertex 35 66 6
vertex 38 65 6
vertex 35 70 2
endloop
endfacet
facet normal 0.7 -0.3 0.7
outer loop
vertex 38 59 6
vertex 43 62 2
vertex 39 62 6
endloop
endfacet
facet normal 0.3 -0.7 0.7
outer loop
vertex 38 59 6
vertex 35 54 2
vertex 40.5 56.5 2
endloop
endfacet
facet normal 0.7 -0.3 0.7
outer loop
vertex 38 59 6
vertex 40.5 56.5 2
vertex 43 62 2
endloop
endfacet
facet normal 0.7 0.3 0.7
outer loop
vertex 38 65 6
vertex 39 62 6
vertex 43 62 2
endloop
endfacet
facet normal 0.3 0.7 0.7
outer loop
vertex 38 65 6
vertex 40.5 67.5 2
vertex 35 70 2
endloop
endfacet
facet normal 0.7 0.3 0.7
outer loop
vertex 38 65 6
vertex 43 62 2
vertex 40.5 67.5 2
endloop
endfacet
facet normal -0.9 -0.4 -0
outer loop
vertex 29.5 56.5 2
vertex 27 62 2
vertex 27 62 0
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex 29.5 56.5 2
vertex 27 62 0
vertex 29.5 56.5 0
endloop
endfacet
facet normal -0.4 -0.9 -0
outer loop
vertex 29.5 56.5 2
vertex 29.5 56.5 0
vertex 35 54 0
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 29.5 56.5 0
vertex 29.5 67.5 0
vertex 35 54 0
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 27 62 2
vertex 29.5 67.5 2
vertex 29.5 67.5 0
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 29.5 67.5 2
vertex 35 70 2
vertex 29.5 67.5 0
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 27 62 2
vertex 29.5 67.5 0
vertex 27 62 0
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 29.5 56.5 0
vertex 27 62 0
vertex 29.5 67.5 0
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 29.5 56.5 2
vertex 35 54 0
vertex 35 54 2
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 35 54 2
vertex 35 54 0
vertex 40.5 56.5 0
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 35 54 0
vertex 35 70 0
vertex 40.5 56.5 0
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 35 70 2
vertex 40.5 67.5 2
vertex 35 70 0
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 29.5 67.5 0
vertex 35 70 0
vertex 35 54 0
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 29.5 67.5 0
vertex 35 70 2
vertex 35 70 0
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 35 54 2
vertex 40.5 56.5 0
vertex 40.5 56.5 2
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 40.5 56.5 2
vertex 40.5 56.5 0
vertex 43 62 2
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 43 62 2
vertex 40.5 56.5 0
vertex 43 62 0
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex 43 62 2
vertex 43 62 0
vertex 40.5 67.5 2
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 35 70 0
vertex 40.5 67.5 0
vertex 40.5 56.5 0
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 40.5 67.5 2
vertex 40.5 67.5 0
vertex 35 70 0
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex 40.5 56.5 0
vertex 40.5 67.5 0
vertex 43 62 0
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex 40.5 67.5 2
vertex 43 62 0
vertex 40.5 67.5 0
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex -38 -48.5 13
vertex -38.5 -47 10
vertex -38.5 -47 13
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -38.5 -47 13
vertex -38 -45.5 10
vertex -38 -46 13
endloop
endfacet
facet normal 0.4 -0.9 -0
outer loop
vertex -38 -46 13
vertex -38 -45.5 10
vertex -37 -45.5 13
endloop
endfacet
facet normal 0 1 -0.1
outer loop
vertex -25 -48.5 13
vertex -37 -48.5 10
vertex -38 -48.5 13
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -38.5 -47 13
vertex -38.5 -47 10
vertex -38 -45.5 10
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex -38 -48.5 13
vertex -38 -48 10
vertex -38.5 -47 10
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex -38 -48.5 13
vertex -37 -48.5 10
vertex -38 -48 10
endloop
endfacet
facet normal 0 -1 0.1
outer loop
vertex -25 -45.5 10
vertex -37 -45.5 13
vertex -38 -45.5 10
endloop
endfacet
facet normal -0 -1 -0.1
outer loop
vertex -37 -45.5 13
vertex -25 -45.5 10
vertex -24 -45.5 13
endloop
endfacet
facet normal -0.4 0.9 -0
outer loop
vertex -23.5 -48 13
vertex -24 -48.5 10
vertex -25 -48.5 13
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -23 -47 13
vertex -24 -48.5 10
vertex -23.5 -48 13
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex -24 -45.5 13
vertex -23 -47 10
vertex -23 -47 13
endloop
endfacet
facet normal -0 1 0.1
outer loop
vertex -37 -48.5 10
vertex -25 -48.5 13
vertex -24 -48.5 10
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex -23.5 -46 10
vertex -24 -45.5 13
vertex -25 -45.5 10
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -23 -47 13
vertex -23 -47 10
vertex -24 -48.5 10
endloop
endfacet
facet normal -0.9 -0.4 -0
outer loop
vertex -24 -45.5 13
vertex -23.5 -46 10
vertex -23 -47 10
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex -38.5 47 10
vertex -38.5 47 13
vertex -38 46 13
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -38 48.5 10
vertex -38 48 13
vertex -38.5 47 13
endloop
endfacet
facet normal 0.4 0.9 -0
outer loop
vertex -38 46 10
vertex -38 46 13
vertex -37 45.5 13
endloop
endfacet
facet normal 0.4 -0.9 -0
outer loop
vertex -38 48.5 10
vertex -37 48.5 13
vertex -38 48 13
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -37 45.5 10
vertex -37 45.5 13
vertex -25 45.5 13
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -38 48.5 10
vertex -38.5 47 13
vertex -38.5 47 10
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex -38.5 47 10
vertex -38 46 13
vertex -38 46 10
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex -38 46 10
vertex -37 45.5 13
vertex -37 45.5 10
endloop
endfacet
facet normal 0 -1 0.1
outer loop
vertex -25 48.5 10
vertex -37 48.5 13
vertex -38 48.5 10
endloop
endfacet
facet normal -0 -1 -0.1
outer loop
vertex -37 48.5 13
vertex -25 48.5 10
vertex -24 48.5 13
endloop
endfacet
facet normal -0.4 0.9 -0
outer loop
vertex -23.5 46 13
vertex -24 45.5 10
vertex -25 45.5 13
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -23 47 13
vertex -24 45.5 10
vertex -23.5 46 13
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex -24 48.5 13
vertex -23 47 10
vertex -23 47 13
endloop
endfacet
facet normal -0 1 0.1
outer loop
vertex -37 45.5 10
vertex -25 45.5 13
vertex -24 45.5 10
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex -24 48.5 13
vertex -25 48.5 10
vertex -23.5 48 10
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -23 47 13
vertex -23 47 10
vertex -24 45.5 10
endloop
endfacet
facet normal -0.9 -0.4 -0
outer loop
vertex -24 48.5 13
vertex -23.5 48 10
vertex -23 47 10
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex 24 -48.5 13
vertex 23 -47 10
vertex 23 -47 13
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 23 -47 13
vertex 24 -45.5 10
vertex 23.5 -46 13
endloop
endfacet
facet normal 0.4 -0.9 -0
outer loop
vertex 23.5 -46 13
vertex 24 -45.5 10
vertex 25 -45.5 13
endloop
endfacet
facet normal 0 1 -0.1
outer loop
vertex 37 -48.5 13
vertex 25 -48.5 10
vertex 24 -48.5 13
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex 24 -48.5 13
vertex 23.5 -48 10
vertex 23 -47 10
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 23 -47 13
vertex 23 -47 10
vertex 24 -45.5 10
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 24 -48.5 13
vertex 25 -48.5 10
vertex 23.5 -48 10
endloop
endfacet
facet normal 0 -1 0.1
outer loop
vertex 37 -45.5 10
vertex 25 -45.5 13
vertex 24 -45.5 10
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex 25 -45.5 13
vertex 37 -45.5 10
vertex 37 -45.5 13
endloop
endfacet
facet normal -0.4 0.9 -0
outer loop
vertex 38 -48 13
vertex 38 -48.5 10
vertex 37 -48.5 13
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 37 -45.5 13
vertex 38 -46 10
vertex 38 -46 13
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 38.5 -47 13
vertex 38 -48.5 10
vertex 38 -48 13
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex 38 -46 13
vertex 38.5 -47 10
vertex 38.5 -47 13
endloop
endfacet
facet normal -0 1 0.1
outer loop
vertex 25 -48.5 10
vertex 37 -48.5 13
vertex 38 -48.5 10
endloop
endfacet
facet normal -0.4 -0.9 -0
outer loop
vertex 37 -45.5 13
vertex 37 -45.5 10
vertex 38 -46 10
endloop
endfacet
facet normal -0.9 -0.4 -0
outer loop
vertex 38.5 -47 10
vertex 38 -46 13
vertex 38 -46 10
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 38 -48.5 10
vertex 38.5 -47 13
vertex 38.5 -47 10
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex 24 45.5 13
vertex 23 47 10
vertex 23 47 13
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 23 47 13
vertex 23.5 48 10
vertex 23.5 48 13
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 23.5 48 13
vertex 25 48.5 10
vertex 25 48.5 13
endloop
endfacet
facet normal 0 1 -0.1
outer loop
vertex 37 45.5 13
vertex 25 45.5 10
vertex 24 45.5 13
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex 24 45.5 13
vertex 23.5 46 10
vertex 23 47 10
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 23 47 13
vertex 23 47 10
vertex 23.5 48 10
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 23.5 48 13
vertex 23.5 48 10
vertex 25 48.5 10
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 23.5 46 10
vertex 24 45.5 13
vertex 25 45.5 10
endloop
endfacet
facet normal -0 -1 -0
outer loop
vertex 37 48.5 10
vertex 25 48.5 13
vertex 25 48.5 10
endloop
endfacet
facet normal -0 -1 -0.1
outer loop
vertex 25 48.5 13
vertex 37 48.5 10
vertex 38 48.5 13
endloop
endfacet
facet normal -0.4 0.9 -0
outer loop
vertex 38 46 13
vertex 38 45.5 10
vertex 37 45.5 13
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 38.5 47 13
vertex 38 45.5 10
vertex 38 46 13
endloop
endfacet
facet normal -0.9 -0.4 0
outer loop
vertex 38 48.5 13
vertex 38.5 47 10
vertex 38.5 47 13
endloop
endfacet
facet normal -0 1 0.1
outer loop
vertex 25 45.5 10
vertex 37 45.5 13
vertex 38 45.5 10
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 38 48 10
vertex 38 48.5 13
vertex 37 48.5 10
endloop
endfacet
facet normal -0.9 -0.4 -0
outer loop
vertex 38.5 47 10
vertex 38 48.5 13
vertex 38 48 10
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 38.5 47 13
vertex 38.5 47 10
vertex 38 45.5 10
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex -17.5 -51 13
vertex -18 -50 10
vertex -18 -50 13
endloop
endfacet
facet normal 0.4 0.9 -0
outer loop
vertex -16.5 -51.5 13
vertex -17.5 -51 10
vertex -17.5 -51 13
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -15.5 -51 13
vertex -16.5 -51.5 10
vertex -16.5 -51.5 13
endloop
endfacet
facet normal 0.9 0.4 0
outer loop
vertex -17.5 -51 13
vertex -17.5 -51 10
vertex -18 -50 10
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex -16.5 -51.5 13
vertex -16.5 -51.5 10
vertex -17.5 -51 10
endloop
endfacet
facet normal -0.4 0.9 -0
outer loop
vertex -15.5 -51 13
vertex -15.5 -51 10
vertex -16.5 -51.5 10
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -15.5 -51 13
vertex -15 -50 10
vertex -15.5 -51 10
endloop
endfacet
facet normal 1 0 0
outer loop
vertex -18 30 10
vertex -18 -50 13
vertex -18 -50 10
endloop
endfacet
facet normal -1 0 -0.1
outer loop
vertex -15 50 13
vertex -15 -50 10
vertex -15.5 -51 13
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex -18 30 10
vertex -18 50 13
vertex -18 -50 13
endloop
endfacet
facet normal -1 -0 0.1
outer loop
vertex -15 -50 10
vertex -15 50 13
vertex -15.5 51 10
endloop
endfacet
facet normal 0.9 -0.4 -0
outer loop
vertex -18 50 13
vertex -18 51 10
vertex -17.5 51 13
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -17.5 51 13
vertex -16.5 51.5 10
vertex -16.5 51.5 13
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex -16.5 51.5 13
vertex -15.5 51 10
vertex -15.5 51 13
endloop
endfacet
facet normal -0.9 -0.4 -0
outer loop
vertex -15.5 51 13
vertex -15.5 51 10
vertex -15 50 13
endloop
endfacet
facet normal 1 -0 0.1
outer loop
vertex -18 30 10
vertex -18 51 10
vertex -18 50 13
endloop
endfacet
facet normal 0.5 -0.9 0
outer loop
vertex -17.5 51 13
vertex -18 51 10
vertex -16.5 51.5 10
endloop
endfacet
facet normal -0.4 -0.9 -0
outer loop
vertex -16.5 51.5 13
vertex -16.5 51.5 10
vertex -15.5 51 10
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex -12 -51 13
vertex -12 -51 10
vertex -12.5 -50 13
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex -11 -51.5 13
vertex -12 -51 10
vertex -12 -51 13
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex -11 -51.5 13
vertex -11 -51.5 10
vertex -12 -51 10
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -10 -51 13
vertex -11 -51.5 10
vertex -11 -51.5 13
endloop
endfacet
facet normal -0.4 0.9 -0
outer loop
vertex -10 -51 13
vertex -10 -51 10
vertex -11 -51.5 10
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -10 -51 13
vertex -9.5 -50 10
vertex -10 -51 10
endloop
endfacet
facet normal 1 0 0.1
outer loop
vertex -12.5 50 10
vertex -12.5 -50 13
vertex -12 -51 10
endloop
endfacet
facet normal -1 0 -0.1
outer loop
vertex -9.5 50 13
vertex -9.5 -50 10
vertex -10 -51 13
endloop
endfacet
facet normal 1 -0 -0.1
outer loop
vertex -12.5 -50 13
vertex -12.5 50 10
vertex -12 51 13
endloop
endfacet
facet normal -1 -0 0.1
outer loop
vertex -9.5 -50 10
vertex -9.5 50 13
vertex -10 51 10
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -12 51 13
vertex -11 51.5 10
vertex -11 51.5 13
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -12 51 13
vertex -12.5 50 10
vertex -12 51 10
endloop
endfacet
facet normal 0.4 -0.9 -0
outer loop
vertex -12 51 13
vertex -12 51 10
vertex -11 51.5 10
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex -11 51.5 13
vertex -10 51 10
vertex -10 51 13
endloop
endfacet
facet normal -0.9 -0.4 -0
outer loop
vertex -10 51 13
vertex -10 51 10
vertex -9.5 50 13
endloop
endfacet
facet normal -0.4 -0.9 -0
outer loop
vertex -11 51.5 13
vertex -11 51.5 10
vertex -10 51 10
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex -6.5 -51 13
vertex -6.5 -51 10
vertex -7 -50 13
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex -5.5 -51.5 13
vertex -6.5 -51 10
vertex -6.5 -51 13
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex -4.5 -51 13
vertex -5.5 -51.5 10
vertex -5.5 -51.5 13
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex -5.5 -51.5 13
vertex -5.5 -51.5 10
vertex -6.5 -51 10
endloop
endfacet
facet normal -0.4 0.9 -0
outer loop
vertex -4.5 -51 13
vertex -4.5 -51 10
vertex -5.5 -51.5 10
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex -4.5 -51 13
vertex -4 -50 10
vertex -4.5 -51 10
endloop
endfacet
facet normal -1 0 -0.1
outer loop
vertex -4 50 13
vertex -4 -50 10
vertex -4.5 -51 13
endloop
endfacet
facet normal 1 0 0.1
outer loop
vertex -7 50 10
vertex -7 -50 13
vertex -6.5 -51 10
endloop
endfacet
facet normal 1 -0 -0.1
outer loop
vertex -7 -50 13
vertex -7 50 10
vertex -6.5 51 13
endloop
endfacet
facet normal -1 -0 0.1
outer loop
vertex -4 -50 10
vertex -4 50 13
vertex -4.5 51 10
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -6.5 51 13
vertex -5.5 51.5 10
vertex -5.5 51.5 13
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex -5.5 51.5 13
vertex -4.5 51 10
vertex -4.5 51 13
endloop
endfacet
facet normal -0.9 -0.4 -0
outer loop
vertex -4.5 51 13
vertex -4.5 51 10
vertex -4 50 13
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -6.5 51 13
vertex -7 50 10
vertex -6.5 51 10
endloop
endfacet
facet normal 0.4 -0.9 -0
outer loop
vertex -6.5 51 13
vertex -6.5 51 10
vertex -5.5 51.5 10
endloop
endfacet
facet normal -0.4 -0.9 -0
outer loop
vertex -5.5 51.5 13
vertex -5.5 51.5 10
vertex -4.5 51 10
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex -1 -51 13
vertex -1 -51 10
vertex -1.5 -50 13
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex -1 -51 13
vertex 0 -51.5 13
vertex -1 -51 10
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 0 -51.5 13
vertex 0 -51.5 10
vertex -1 -51 10
endloop
endfacet
facet normal 1 0 0.1
outer loop
vertex -1.5 50 10
vertex -1.5 -50 13
vertex -1 -51 10
endloop
endfacet
facet normal 1 -0 -0.1
outer loop
vertex -1.5 -50 13
vertex -1.5 50 10
vertex -1 51 13
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex -1 51 13
vertex 0 51.5 10
vertex 0 51.5 13
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex -1 51 13
vertex -1.5 50 10
vertex -1 51 10
endloop
endfacet
facet normal 0.4 -0.9 -0
outer loop
vertex -1 51 13
vertex -1 51 10
vertex 0 51.5 10
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 0 -51.5 13
vertex 1 -51 13
vertex 0 -51.5 10
endloop
endfacet
facet normal -0.4 0.9 -0
outer loop
vertex 1 -51 13
vertex 1 -51 10
vertex 0 -51.5 10
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 1 -51 13
vertex 1.5 -50 10
vertex 1 -51 10
endloop
endfacet
facet normal -1 0 -0.1
outer loop
vertex 1.5 50 13
vertex 1.5 -50 10
vertex 1 -51 13
endloop
endfacet
facet normal -1 -0 0.1
outer loop
vertex 1.5 -50 10
vertex 1.5 50 13
vertex 1 51 10
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 0 51.5 13
vertex 1 51 10
vertex 1 51 13
endloop
endfacet
facet normal -0.9 -0.4 -0
outer loop
vertex 1 51 13
vertex 1 51 10
vertex 1.5 50 13
endloop
endfacet
facet normal -0.4 -0.9 -0
outer loop
vertex 0 51.5 13
vertex 0 51.5 10
vertex 1 51 10
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex 4.5 -51 13
vertex 4.5 -51 10
vertex 4 -50 13
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 5.5 -51.5 13
vertex 4.5 -51 10
vertex 4.5 -51 13
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 6.5 -51 13
vertex 5.5 -51.5 10
vertex 5.5 -51.5 13
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 5.5 -51.5 13
vertex 5.5 -51.5 10
vertex 4.5 -51 10
endloop
endfacet
facet normal -0.4 0.9 -0
outer loop
vertex 6.5 -51 13
vertex 6.5 -51 10
vertex 5.5 -51.5 10
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 6.5 -51 13
vertex 7 -50 10
vertex 6.5 -51 10
endloop
endfacet
facet normal -1 0 -0.1
outer loop
vertex 7 50 13
vertex 7 -50 10
vertex 6.5 -51 13
endloop
endfacet
facet normal 1 0 0.1
outer loop
vertex 4 50 10
vertex 4 -50 13
vertex 4.5 -51 10
endloop
endfacet
facet normal 1 -0 -0.1
outer loop
vertex 4 -50 13
vertex 4 50 10
vertex 4.5 51 13
endloop
endfacet
facet normal -1 -0 0.1
outer loop
vertex 7 -50 10
vertex 7 50 13
vertex 6.5 51 10
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 4.5 51 13
vertex 5.5 51.5 10
vertex 5.5 51.5 13
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 5.5 51.5 13
vertex 6.5 51 10
vertex 6.5 51 13
endloop
endfacet
facet normal -0.9 -0.4 -0
outer loop
vertex 6.5 51 13
vertex 6.5 51 10
vertex 7 50 13
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 4.5 51 13
vertex 4 50 10
vertex 4.5 51 10
endloop
endfacet
facet normal 0.4 -0.9 -0
outer loop
vertex 4.5 51 13
vertex 4.5 51 10
vertex 5.5 51.5 10
endloop
endfacet
facet normal -0.4 -0.9 -0
outer loop
vertex 5.5 51.5 13
vertex 5.5 51.5 10
vertex 6.5 51 10
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex 10 -51 13
vertex 10 -51 10
vertex 9.5 -50 13
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 11 -51.5 13
vertex 10 -51 10
vertex 10 -51 13
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 11 -51.5 13
vertex 11 -51.5 10
vertex 10 -51 10
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 12 -51 13
vertex 11 -51.5 10
vertex 11 -51.5 13
endloop
endfacet
facet normal -0.4 0.9 -0
outer loop
vertex 12 -51 13
vertex 12 -51 10
vertex 11 -51.5 10
endloop
endfacet
facet normal -0.9 0.4 0
outer loop
vertex 12 -51 13
vertex 12.5 -50 10
vertex 12 -51 10
endloop
endfacet
facet normal 1 0 0.1
outer loop
vertex 9.5 50 10
vertex 9.5 -50 13
vertex 10 -51 10
endloop
endfacet
facet normal -1 0 -0.1
outer loop
vertex 12.5 50 13
vertex 12.5 -50 10
vertex 12 -51 13
endloop
endfacet
facet normal 1 -0 -0.1
outer loop
vertex 9.5 -50 13
vertex 9.5 50 10
vertex 10 51 13
endloop
endfacet
facet normal -1 -0 0.1
outer loop
vertex 12.5 -50 10
vertex 12.5 50 13
vertex 12 51 10
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 10 51 13
vertex 11 51.5 10
vertex 11 51.5 13
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 10 51 13
vertex 9.5 50 10
vertex 10 51 10
endloop
endfacet
facet normal 0.4 -0.9 -0
outer loop
vertex 10 51 13
vertex 10 51 10
vertex 11 51.5 10
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 11 51.5 13
vertex 12 51 10
vertex 12 51 13
endloop
endfacet
facet normal -0.9 -0.4 -0
outer loop
vertex 12 51 13
vertex 12 51 10
vertex 12.5 50 13
endloop
endfacet
facet normal -0.4 -0.9 -0
outer loop
vertex 11 51.5 13
vertex 11 51.5 10
vertex 12 51 10
endloop
endfacet
facet normal 0.9 0.4 -0
outer loop
vertex 15.5 -51 13
vertex 15.5 -51 10
vertex 15 -50 13
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 16.5 -51.5 13
vertex 15.5 -51 10
vertex 15.5 -51 13
endloop
endfacet
facet normal -0.4 0.9 0
outer loop
vertex 18 -51 13
vertex 16.5 -51.5 10
vertex 16.5 -51.5 13
endloop
endfacet
facet normal 0.4 0.9 0
outer loop
vertex 16.5 -51.5 13
vertex 16.5 -51.5 10
vertex 15.5 -51 10
endloop
endfacet
facet normal -0.5 0.9 0
outer loop
vertex 18 -51 13
vertex 18 -51 10
vertex 16.5 -51.5 10
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 18 -51 13
vertex 18 -30 10
vertex 18 -51 10
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex 18 -51 13
vertex 18 32 13
vertex 18 -30 10
endloop
endfacet
facet normal 1 0 0.1
outer loop
vertex 15 50 10
vertex 15 -50 13
vertex 15.5 -51 10
endloop
endfacet
facet normal 1 -0 -0.1
outer loop
vertex 15 -50 13
vertex 15 50 10
vertex 15.5 51 13
endloop
endfacet
facet normal -1 0 0
outer loop
vertex 18 -30 10
vertex 18 32 13
vertex 18 50 13
endloop
endfacet
facet normal -1 -0 0.1
outer loop
vertex 18 -30 10
vertex 18 50 13
vertex 17.5 51 10
endloop
endfacet
facet normal 0.4 -0.9 0
outer loop
vertex 15.5 51 13
vertex 16.5 51.5 10
vertex 16.5 51.5 13
endloop
endfacet
facet normal -0.4 -0.9 0
outer loop
vertex 16.5 51.5 13
vertex 17.5 51 10
vertex 17.5 51 13
endloop
endfacet
facet normal -0.9 -0.4 -0
outer loop
vertex 17.5 51 13
vertex 17.5 51 10
vertex 18 50 13
endloop
endfacet
facet normal 0.9 -0.4 0
outer loop
vertex 15.5 51 13
vertex 15 50 10
vertex 15.5 51 10
endloop
endfacet
facet normal 0.4 -0.9 -0
outer loop
vertex 15.5 51 13
vertex 15.5 51 10
vertex 16.5 51.5 10
endloop
endfacet
facet normal -0.4 -0.9 -0
outer loop
vertex 16.5 51.5 13
vertex 16.5 51.5 10
vertex 17.5 51 10
endloop
endfacet
facet normal -0 -0.4 -0.9
outer loop
vertex -22 -60.5 21.5
vertex 22 -64.5 23
vertex -22 -64.5 23
endloop
endfacet
facet normal 0 -0.4 -0.9
outer loop
vertex -22 -60.5 21.5
vertex 22 -60.5 21.5
vertex 22 -64.5 23
endloop
endfacet
facet normal -0 -0 -1
outer loop
vertex -22 60.5 21.5
vertex 22 -60.5 21.5
vertex -22 -60.5 21.5
endloop
endfacet
facet normal 0 0 -1
outer loop
vertex -22 60.5 21.5
vertex 22 60.5 21.5
vertex 22 -60.5 21.5
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex -22 64.5 23
vertex 22 60.5 21.5
vertex -22 60.5 21.5
endloop
endfacet
facet normal 0 0.4 -0.9
outer loop
vertex -22 64.5 23
vertex 22 64.5 23
vertex 22 60.5 21.5
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex -22 66 27
vertex 22 64.5 23
vertex -22 64.5 23
endloop
endfacet
facet normal 0 0.9 -0.4
outer loop
vertex -22 66 27
vertex 22 66 27
vertex 22 64.5 23
endloop
endfacet
facet normal 0 1 0
outer loop
vertex -22 66 141
vertex 22 66 27
vertex -22 66 27
endloop
endfacet
facet normal -0 1 0
outer loop
vertex -22 66 141
vertex 22 66 141
vertex 22 66 27
endloop
endfacet
facet normal 0 0.9 0.4
outer loop
vertex -22 64.5 145
vertex 22 66 141
vertex -22 66 141
endloop
endfacet
facet normal -0 0.9 0.4
outer loop
vertex -22 64.5 145
vertex 22 64.5 145
vertex 22 66 141
endloop
endfacet
facet normal 0 0.4 0.9
outer loop
vertex -22 60.5 146.5
vertex 22 64.5 145
vertex -22 64.5 145
endloop
endfacet
facet normal -0 0.4 0.9
outer loop
vertex -22 60.5 146.5
vertex 22 60.5 146.5
vertex 22 64.5 145
endloop
endfacet
facet normal 0 -0 1
outer loop
vertex -22 -60.5 146.5
vertex 22 60.5 146.5
vertex -22 60.5 146.5
endloop
endfacet
facet normal 0 0 1
outer loop
vertex -22 -60.5 146.5
vertex 22 -60.5 146.5
vertex 22 60.5 146.5
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex -22 -64.5 145
vertex 22 -60.5 146.5
vertex -22 -60.5 146.5
endloop
endfacet
facet normal 0 -0.4 0.9
outer loop
vertex -22 -64.5 145
vertex 22 -64.5 145
vertex 22 -60.5 146.5
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex -22 -66 141
vertex 22 -64.5 145
vertex -22 -64.5 145
endloop
endfacet
facet normal 0 -0.9 0.4
outer loop
vertex -22 -66 141
vertex 22 -66 141
vertex 22 -64.5 145
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -22 -66 27
vertex 22 -66 141
vertex -22 -66 141
endloop
endfacet
facet normal 0 -1 0
outer loop
vertex -22 -66 27
vertex 22 -66 27
vertex 22 -66 141
endloop
endfacet
facet normal -0 -0.9 -0.4
outer loop
vertex -22 -64.5 23
vertex 22 -66 27
vertex -22 -66 27
endloop
endfacet
facet normal 0 -0.9 -0.4
outer loop
vertex -22 -64.5 23
vertex 22 -64.5 23
vertex 22 -66 27
endloop
endfacet
facet normal 1 -0 -0
outer loop
vertex 22 -64.5 23
vertex 22 -60.5 21.5
vertex 22 -66 27
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 22 -60.5 21.5
vertex 22 -66 141
vertex 22 -66 27
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 22 -60.5 21.5
vertex 22 60.5 21.5
vertex 22 -66 141
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 22 60.5 21.5
vertex 22 -64.5 145
vertex 22 -66 141
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 22 60.5 21.5
vertex 22 64.5 23
vertex 22 -64.5 145
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 22 64.5 23
vertex 22 -60.5 146.5
vertex 22 -64.5 145
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 22 64.5 23
vertex 22 66 27
vertex 22 -60.5 146.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 22 66 27
vertex 22 60.5 146.5
vertex 22 -60.5 146.5
endloop
endfacet
facet normal 1 0 -0
outer loop
vertex 22 66 27
vertex 22 66 141
vertex 22 60.5 146.5
endloop
endfacet
facet normal 1 0 0
outer loop
vertex 22 66 141
vertex 22 64.5 145
vertex 22 60.5 146.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex -22 -66 27
vertex -22 -60.5 21.5
vertex -22 -64.5 23
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -22 -66 27
vertex -22 -66 141
vertex -22 -60.5 21.5
endloop
endfacet
facet normal -1 -0 -0
outer loop
vertex -22 -66 141
vertex -22 60.5 21.5
vertex -22 -60.5 21.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -22 -66 141
vertex -22 -64.5 145
vertex -22 60.5 21.5
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -22 -64.5 145
vertex -22 64.5 23
vertex -22 60.5 21.5
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -22 -64.5 145
vertex -22 -60.5 146.5
vertex -22 64.5 23
endloop
endfacet
facet normal -1 0 -0
outer loop
vertex -22 -60.5 146.5
vertex -22 66 27
vertex -22 64.5 23
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -22 -60.5 146.5
vertex -22 60.5 146.5
vertex -22 66 27
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -22 60.5 146.5
vertex -22 66 141
vertex -22 66 27
endloop
endfacet
facet normal -1 0 0
outer loop
vertex -22 60.5 146.5
vertex -22 64.5 145
vertex -22 66 141
endloop
endfacet
endsolid K11_DUAL_FAN_CASE_PREVIEW
```
<!-- model:end -->

## Öne çıkanlar

- **Kapalı, derli toplu görünüm.** Ortası kapaklı radyal kanatlı fan ızgaraları, üst kapakla tek parça ince taşıma tutamakları, kaide ayaklar ve yüzeyle aynı hizada siyah havşa başlı vidalar.
- **Portlar açık.** Yuvalar K11'i yalnızca dört köşesinden kavrar. Ön ve arka portların hiçbirinin önü kapanmaz, K11'in arkadan sıcak hava çıkışı da açık kalır.
- **Metal diş.** Kapak vidaları, yuvalardaki altıgen ceplere itilen M3 somunlara (ya da pirinç inserte) vidalanır; kasayı istediğin kadar açıp kapatabilirsin.
- **Ölçü almak yok.** K11'in kapakları sökülmüş gövde kalınlığı hiçbir yerde yayımlanmamış. Kapaklardaki vida kanalları kızaklı olduğu için 32–56 mm arası her kalınlığa oturur.
- **Her 120 mm fan olur.** Standart 120 × 120 × 25 mm fanlar değişiklik yapmadan oturur; vida delik aralığı her zaman 105 mm. 15 mm ince fanlar için SCAD dosyasında tek bir ayar var.
- **USB'den güç, lehim yok.** 12 V fan, USB 5 V→12 V yükseltici fan kablosuyla çalışır. 5 V USB fan doğrudan takılır.
- **Az filament.** Fan yuvaları içi boş, 2,4 mm duvarlı. Toplam katı hacim yaklaşık 260 cm³.
- **Desteksiz baskı**, 180 × 180 mm tablaya sığar. Katman katman kontrol edildi: tek köprüler tutamak kolunun altındaki 40 mm ve somun ceplerinin üstündeki 3,3 mm.

## Görseller

| Parçalara ayrılmış | Kesit |
|---|---|
| ![Parçalara ayrılmış görünüm](docs/images/exploded.png) | ![Kasanın kesiti](docs/images/section.png) |
| **Fan tarafı** | **Arka: portlar ve kablo delikleri** |
| ![Radyal ızgaralı fan tarafı](docs/images/fan-side.png) | ![Arka görünüm](docs/images/rear.png) |
| **Fan yuvasının içi** | **Baskı yerleşimi** |
| ![İçi boş fan yuvası](docs/images/holder-inside.png) | ![Tüm baskı parçaları](docs/images/print-layout.png) |

## Malzeme listesi

Alternatifler ve örnek mağazalarla tam liste: [docs/bill-of-materials.md](docs/bill-of-materials.md) (İngilizce).

| Malzeme | Adet | Not |
|---|---|---|
| 120 mm fan, 25 mm kalınlık | 2 | Örnek: Noctua NF-F12 PWM (12 V). [PTTAVM'de 1.961 TL](https://www.pttavm.com/noctua-nf-f12-pwm-120mm-1500-300rpm-55cfm-max-22-4db-max-krem-bordo-kasa-fani-p-1437883957). Her standart 120 mm fan olur. |
| USB 5 V→12 V yükseltici fan kablosu | 1–2 | Sadece 12 V fanlar için. USB-A → 4 pin. Açıklamasında "5V→12V" ya da "step-up" yazmalı. Örnek: Akasa AK-CBFA10-60BK. Arama: *USB 12V fan kablosu yükseltici 4 pin*. |
| M3×10 havşa başlı imbus vida, DIN 7991, siyah | 8 | Pul gerekmez. Yedekle 10 tane al. [Tokgözler'de tanesi 1,30 TL](https://www.tokgozler.com/m3x10-din-7991-havsa-basli-imbus-109-kalite-celik-civata-siyah). |
| M3 altıgen somun, DIN 934 | 8 | Fan yuvalarındaki altıgen ceplere itilir. Hırdavatçıda tane ile satılır. Havyan varsa yerine 8 adet M3 pirinç insert ve [`stl/heat-set-insert/`](stl/heat-set-insert/) yuvaları. |
| Fan vidası | 8 | Fanın kutusundan çıkar. |
| PETG filament (tercihen mat siyah) | ~280–340 g | PLA, K11'in arkasından çıkan sıcak havada yumuşayabilir. |
| Alet | | 2 mm alyan, yıldız tornavida |

Fiyatlar Kasım 2026'da bakıldı, değişebilir.

## Baskı

Ayrıntılar: [docs/printing.md](docs/printing.md) (İngilizce).

| Parça | Dosya | Adet | Tablaya yerleşim |
|---|---|---|---|
| Fan yuvası, sağ | [`fan_holder_right.stl`](stl/fan_holder_right.stl) | 1 | Izgaralı yüz tablada |
| Fan yuvası, sol | [`fan_holder_left.stl`](stl/fan_holder_left.stl) | 1 | Izgaralı yüz tablada |
| Üst kapak + tutamaklar | [`top_plate.stl`](stl/top_plate.stl) | 1 | Düz yüz tablada, tutamaklar yukarı |
| Alt kapak | [`bottom_plate.stl`](stl/bottom_plate.stl) | 1 | Düz yüz tablada, ayaklar yukarı |

STL dosyaları zaten doğru yönde; dilimleyicide otomatik yönlendirme yapma. Sağ ve sol yuva birbirinin aynası, birbirinin yerine kullanılamaz. Pirinç insert kullanacaksan yuvaları [`stl/heat-set-insert/`](stl/heat-set-insert/) klasöründen bas; kapaklar ve tutamaklar aynı.

### Temiz yüzey için dilimleyici ayarları

Bambu Studio, OrcaSlicer, PrusaSlicer ve Cura'da çalışır (ayar adları biraz farklı olabilir). 0,4 mm nozul için:

| Ayar | Değer | Neden |
|---|---|---|
| Katman yüksekliği | 0,12–0,16 mm | Yan duvarlarda katman çizgileri incelir. Parçalar kısa olduğu için süre çok uzamaz. |
| İlk katman | 0,2 mm | Sağlam ilk katman. Fan yuvalarında görünen ızgaralı yüz bu katman. |
| Duvar sayısı | 3–4, Arachne duvar üretici | 2,4 mm kabuk tamamen duvar olarak basılır. |
| Üst / alt katman sayısı | 5–6 / 5 | Dolgu deseni yüzeyden belli olmaz. |
| Üst yüzey deseni | Monotonic | Görünen üst yüzeylerde düzgün, paralel çizgiler. |
| Ütüleme (ironing) | Açık, sadece üst yüzeyler | Üst kapağın ve tutamakların üstü pürüzsüz olur. |
| Dikiş (seam) konumu | Arka (Back); varsa "scarf seam" açık | STL'nin arkası kasanın arkası; dikiş izi kabloların olduğu tarafa düşer. |
| Dolgu | %15–20, gyroid | Dolgu sadece vida bloklarında ve ayaklarda var. |
| Destek | Kapalı | Hiçbir parçaya gerekmez. Tek köprüler: tutamak kolunun altında 40 mm, somun ceplerinin üstünde 3,3 mm. Köprü ayarlarını açık bırak (köprü hızı ~25 mm/s, fan %100). |
| Dış duvar hızı | 40–60 mm/s | Yavaş dış duvar, daha temiz ve eşit yüzey. |
| Dış duvar ivmesi | ≤ 3000 mm/s² (Bambu/Orca) | Köşelerde ve kablo deliği çevresinde dalgalanma azalır. |
| Gezinme | "Duvarları geçmekten kaçın" açık; Z-hop 0,4 mm | PETG'de nozul üst yüzeye sürtüp çizik bırakmasın diye. |
| Fil ayağı telafisi | 0,1–0,15 mm | İlk katmandaki ızgara kanatları keskin kalır. |
| Nozul / tabla (PETG) | 235–245 °C / 70–80 °C | Filament etiketindeki değerlere uy. |
| Parça fanı (PETG) | %30–50, köprülerde %100 | Köprüler düzgün çıkar, katmanlar zayıflamaz. |

İpuçları:

- **PETG'yi kurut** (yaklaşık 65 °C'de 4–6 saat). Nemli PETG ip çeker, kabarcık ve damla bırakır.
- **Tabla yüzeyi.** Fan yuvalarının ızgaralı yüzü tablaya basılır, görünümünü tabla belirler. Desenli (textured) PEI tabla izleri saklayan eşit mat bir yüzey verir; düz PEI parlak bir yüzey verir. Baskıdan önce tablayı temizle, PETG'de parmak izi belli olur.
- **Geri çekme (retraction)** ayarını filamentine göre yap; ızgaranın üstünde ip kalmasın (doğrudan beslemede genelde 0,6–1,0 mm, Bowden'da 4–6 mm).
- **Önce tek fan yuvası bas** ve K11'e takıp dene.

## Montaj

Ayrıntılar: [docs/assembly.md](docs/assembly.md) (İngilizce).

1. K11'i kapat ve fişini çek. Şeffaf üst kapağı çevirerek çıkar, üzerindeki RGB fanın kablosunu söküp fanı çıkar, alt kapağı aç. CPU fanı ve soğutucusu yerinde kalır.
2. Her yuvanın içindeki 4 altıgen cebe birer M3 somun it. Sonra fanın fişini ve kablosunu arka duvarın altındaki kablo deliğinden geçir ve fanı 4 vidasıyla ızgaralı yüze vidala; fan artık somunların düşmesini engeller. Fanın üzerindeki ok K11'e baksın.
3. K11'i yan yatır ve her açık yüzüne bir yuva oturt. Yakalar köşeleri kavrar.
4. Üst kapağı (tutamaklar üzerinde) yuvaların üstüne koy. Yuvaları hafifçe K11'e bastır ve 4 üst vidayı 2 mm alyanla somunlara sık. Kasayı ters çevir, alt kapağı da aynı şekilde vidala.
5. Fanları yükseltici kabloyla K11'in arkasındaki USB portlarına tak.

## Hava akışı

Varsayılan düzende iki fan da içeri üfler: ızgaradan serin havayı alıp K11'in iki açık yüzüne basar. Isınan hava K11'in arkasından, üst kapaktaki yarıklardan ve K11'in altındaki hava boşluğunun önünden ve arkasından çıkar.

[Referans proje](https://github.com/orenaksakal/gmktec-k11-noctua-mod) CPU tarafının içeri, RAM/SSD tarafının dışarı üflemesini öneriyor. Geçmek için tek bir fanı ters çevirmen yeterli, böylece ikisini aynı yük altında karşılaştırabilirsin. Canlı görüntüleyicide iki düzen de var.

USB'de hız (PWM) sinyali olmadığı için fanlar tam devir döner: NF-F12 PWM'de 1500 rpm ve 22,4 dB(A). Daha sessiz istersen fanın kutusundan çıkan düşük gürültü adaptörünü (L.N.A.) araya tak. Bkz. [docs/fans-and-power.md](docs/fans-and-power.md).

## Uyumluluk

- **Model:** GMKtec K11. Yan yüz zarfı (126 × 133 mm, 5,95 mm köşe yarıçapı) ve 6 mm yaka, referans projede gerçek bir K11 üzerinde denenmiş değerler. NucBox M7/M7 Pro'nun aynı kasayı kullandığı söyleniyor; K7 doğrulanmadı.
- **Gövde kalınlığı:** Kapaklar sökülmüşken 32–56 mm; kızaklı kanallar bu aralığı karşılıyor.
- **Fan:** 120 × 120 × 25 mm doğrudan; 120 × 120 × 15 mm için `fan_thickness = 15`.
- **Dış ölçü:** 44 mm gövde için 100 × 139 mm taban, tutamaklarla 186 mm yükseklik (tutamaksız 158 mm).

## Özelleştirme

[`cad/k11_dual_fan_case.scad`](cad/k11_dual_fan_case.scad) dosyasını [OpenSCAD](https://openscad.org/) 2024 veya daha yeni bir sürümle aç, *Window → Customizer* panelini kullan.

| Parametre | Varsayılan | Ne yapar |
|---|---|---|
| `view` | `assembly` | Renkli montaj, tek parça ya da baskı yerleşimi |
| `explode` | `0` | Önizlemede parçaları birbirinden ayırır |
| `section_cut` | `false` | Montajı ortadan keser |
| `handles` | `true` | Üst kapakla tek parça iki taşıma tutamağı |
| `fan_thickness` | `25` | İnce fanlar için `15` |
| `screw_anchor` | `nut` | `nut` (altıgen cepte M3 somun), `insert` (pirinç insert) ya da `self_tap` (plastiğe doğrudan vida) |
| `k11_thickness` | `44` | Sadece önizleme; baskı parçaları 32–56 mm'ye uyar |
| `case_color`, `fan_style`, `show_device` | | Önizleme renkleri ve görünürlük |

## Doğrulama

`python tools/build.py check` komutu her parçayı montajdaki yerinde dışa aktarır ve K11 kalınlığı 32, 44 ve 56 mm iken, 25 mm ve 15 mm fanlarla şunları kontrol eder:

- hiçbir baskı parçası K11 gövdesine, fanlara, K11'in ön ve arka portlarının önündeki bölgeye girmiyor;
- baskı parçaları birbirine değiyor ama birbirinin içine girmiyor;
- her kapak vidası kanalından geçip yuvaya giriyor; her M3 somun cebine sığıyor, cebinde dönemiyor, üstünde 3,6 mm plastik var ve vida somunun tamamından geçiyor (insert ve doğrudan vida seçenekleri de kontrol ediliyor); her fan vidası yüzden rahat geçiyor;
- her parça yerine düz bir hareketle, hiçbir yere çarpmadan gidiyor: yuvalar K11'e yandan geçiyor, kapaklar üstten ve alttan iniyor, fanlar yuvalara, somunlar ceplerine giriyor;
- her baskı dosyası desteksiz basılabiliyor (katman katman sarkma analizi);
- her baskı dosyası tek parça, su geçirmez ve 180 mm tablaya sığıyor.

500 kontrolün hepsi geçiyor. Bunlar temsili bir K11 modeline karşı yapılan geometrik kontroller; gerçek bir deneme takmanın yerini tutmaz.

## Repo yapısı

```
cad/       k11_dual_fan_case.scad   parametrik kaynak (tek doğruluk kaynağı)
stl/       baskıya hazır parçalar (heat-set-insert/: pirinç insertli fan yuvaları)
viewer/    index.html               tek dosyalık 3D görüntüleyici (GitHub Pages'te de yayında)
docs/      malzeme listesi, baskı, montaj, fan ve güç, tasarım notları, görseller
tools/     build.py                 stl/, viewer/, docs/images/ ve README önizlemesini yeniden üretir
           check_geometry.py        yukarıdaki kontroller
           viewer.js, viewer_template.html   görüntüleyici kaynağı
```

## Kaynaktan derleme

```sh
python3 -m venv .venv && source .venv/bin/activate
pip install -r tools/requirements.txt
python tools/build.py all        # OpenSCAD 2024+ gerekir; gerekirse OPENSCAD=/yol/openscad
```

## Teşekkür ve kaynaklar

- Gerçek K11'de denenmiş ölçüler ve yan fan fikri: [orenaksakal/gmktec-k11-noctua-mod](https://github.com/orenaksakal/gmktec-k11-noctua-mod). Bu proje o repodan dosya kullanmıyor; yalnızca ölçülmüş yaka ve fan cebi değerlerini kullanıyor.
- K11 ölçüleri, port listesi ve arkadan sıcak hava çıkışı: [Notebookcheck K11 incelemesi](https://www.notebookcheck.net/GMK-NucBox-K11-mini-PC-review-Strong-performance-per-dollar-with-AMD-Zen-4.968377.0.html).
- Görünüm, küçük bilgisayarlar için yapılan kule tipi alüminyum kasalardan esinlendi. Hiçbir marka adı ya da logo kullanılmadı.

Bu bağımsız bir topluluk projesi; GMKtec ya da Noctua'nın resmi aksesuarı değildir. K11'i açmak garantiyi etkileyebilir. Fan açıklıkları ızgaralı, yine de kabloları kanatlardan uzak tut.

## Lisans

Tasarım dosyaları (`cad/`, `stl/`, `docs/`) [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.tr), kodlar (`tools/`, görüntüleyici betiği) MIT lisanslıdır. Bkz. [LICENSE.md](LICENSE.md).
