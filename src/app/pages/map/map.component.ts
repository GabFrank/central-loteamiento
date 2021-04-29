import { Component, ElementRef, OnInit } from '@angular/core';
import { AngularFirestore, DocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  green = '#2ECC71';
  orange = '#F1C40F';
  red = '#E74C3C';
  blue = '#3498DB';
  nPolygonos = 112;
  fillColorsList: string[] = [];
  selectedData: any;
  testArray: sgvInterface[];
  lotes: Lote[] = [];
  lotesObs: Observable<any> = this.store
    .collection('lotes')
    .valueChanges({ idField: 'id' });

  

  constructor(private store: AngularFirestore) {
    this.testArray = [];
    this.lotesObs.subscribe((data)=>{
      this.lotes = data;
      console.log('hola')
    })
  }

  ngOnInit(): void {}

  sgvData: sgvInterface[] = [
    {
      points:
        '425.557, 201.025, 420.717, 140.057, 444.603, 142.472, 449.44, 203.379, 425.557, 201.025',
      id: 8,
      data: 'Hola soy el primero',
    },
    {
      points:
        '450.399, 203.468, 445.561, 142.573, 470.233, 145.078, 469.529, 145.127, 474.348, 205.829, 450.399, 203.468',
      id: 9,
    },
    {
      points:
        '470.473, 145.096, 494.377, 147.516, 499.212, 208.278, 475.306, 205.93, 470.473, 145.096',
      id: 10,
    },
    {
      points:
        '500.157 208.372 495.332 147.616 519.665 150.084 524.494 210.766 500.157 208.372',
      id: 11,
      data: '',
    },
    {
      points:
        '520.622 150.175 544.632 152.607 549.453 213.225 525.444 210.867 520.622 150.175',
      id: 12,
      data: '',
    },
    {
      points:
        '625.219 220.693 620.414 160.288 644.803 162.756 649.595 223.093 625.219 220.693',
      id: 16,
      data: '',
    },
    {
      points:
        '669.908 165.298 674.35 225.528 650.55 223.184 645.747 162.853 669.908 165.298',
      id: 17,
      data: '',
    },
    {
      points:
        '619.457 160.184 624.258 220.589 600.074 218.211 595.266 157.739 619.457 160.184',
      id: 18,
      data: '',
    },
    {
      points:
        '599.111 218.119 575.095 215.752 570.279 155.209 594.307 157.641 599.111 218.119',
      id: 14,
      data: '',
    },
    {
      points:
        '569.331 155.109 574.145 215.663 550.397 213.324 545.589 152.705 569.331 155.109',
      id: 13,
      data: '',
    },
    {
      points:
        '320.63 129.926 344.734 132.365 349.6 193.547 325.498 191.173 320.63 129.926',
      id: 4,
      data: '',
    },
    {
      points:
        '345.686 132.466 369.844 134.912 374.7 196.021 350.55 193.64 345.686 132.466',
      id: 5,
      data: '',
    },
    {
      points:
        '295.235 127.352 297.619 157.329 238.275 151.933 235.659 121.353 295.235 127.352',
      id: 1,
      data: '',
    },
    {
      points:
        '238.351 152.869 297.656 158.265 297.679 158.06 300.108 188.674 240.684 182.82 238.351 152.869',
      id: 2,
      data: '',
    },
    {
      points:
        '249.028 314.294 310.764 320.257 312.45 344.422 250.74 338.618 249.028 314.294',
      id: 22,
      data: '',
    },
    {
      points:
        '304.819 221.5 328.364 223.9 332.618 284.888 309.085 282.533 304.819 221.5',
      id: 23,
      data: '',
    },
    {
      points:
        '307.285 270.346 245.522 264.377 243.856 240.645 305.63 246.612 307.285 270.346',
      id: 19,
      data: '',
    },
    {
      points:
        '307.347 271.284 308.991 294.885 247.246 288.925 245.586 265.314 307.347 271.284',
      id: 20,
      data: '',
    },
    {
      points:
        '332.674 285.823 336.929 346.728 313.399 344.513 311.661 319.559 311.673 319.41 311.656 319.411 309.144 283.48 332.674 285.823',
      id: 35,
      data: '',
    },
    {
      points:
        '333.636 285.926 358.031 288.354 362.269 349.109 337.886 346.821 333.636 285.926',
      id: 34,
      data: '',
    },
    {
      points:
        '363.214 349.2 358.98 288.455 383.06 290.855 387.296 351.463 363.214 349.2',
      id: 33,
      data: '',
    },
    {
      points:
        '388.246 351.553 384.021 290.945 407.925 293.335 408.733 304.989 408.692 305.361 408.757 305.367 412.133 353.792 388.246 351.553',
      id: 32,
      data: '',
    },
    {
      points:
        '469.587 285.939 407.936 279.975 406.283 256.251 467.903 262.199 469.587 285.939',
      id: 28,
      data: '',
    },
    {
      points:
        '408.006 280.919 469.654 286.874 471.322 310.476 409.647 304.523 408.006 280.919',
      id: 29,
      data: '',
    },
    {
      points:
        '407.856 292.388 383.955 290.01 379.703 229.144 403.605 231.578 407.856 292.388',
      id: 26,
      data: '',
    },
    {
      points:
        '413.09 353.884 411.419 329.892 473.116 335.856 474.81 359.689 413.09 353.884',
      id: 31,
      data: '',
    },
    {
      points:
        '411.389 328.957 411.371 329.193 409.713 305.457 471.391 311.423 473.057 334.91 411.389 328.957',
      id: 30,
      data: '',
    },
    {
      points:
        '467.84 261.264 406.217 255.31 404.567 231.678 466.188 237.968 467.84 261.264',
      id: 27,
      data: '',
    },
    {
      points:
        '378.753 229.043 382.994 289.91 358.913 287.509 354.668 226.587 378.753 229.043',
      id: 25,
      data: '',
    },
    {
      points:
        '357.962 287.419 333.566 284.981 329.311 223.999 353.71 226.483 357.962 287.419',
      id: 24,
      data: '',
    },
    {
      points:
        '303.871 221.403 305.562 245.679 243.788 239.709 242.06 215.099 303.871 221.403',
      id: 18,
      data: '',
    },
    {
      points:
        '308.984 295.812 309.023 295.347 310.695 319.32 248.96 313.36 247.314 289.857 308.984 295.812',
      id: 21,
      data: '',
    },
    {
      points:
        '428.23 574.769 426.58 551.179 488.227 557.13 489.907 580.733 428.23 574.769',
      id: 71,
      data: '',
    },
    {
      points:
        '426.435 562.646 402.535 560.257 398.282 499.398 422.187 501.835 426.435 562.646',
      id: 68,
      data: '',
    },
    {
      points:
        '426.519 550.235 424.857 526.503 486.487 532.457 488.169 556.186 426.519 550.235',
      id: 70,
      data: '',
    },
    {
      points:
        '486.419 531.521 424.798 525.565 423.147 501.935 484.767 508.218 486.419 531.521',
      id: 69,
      data: '',
    },
    {
      points:
        '397.333 499.299 401.575 560.166 377.491 557.763 373.25 496.841 397.333 499.299',
      id: 67,
      data: '',
    },
    {
      points:
        '376.546 557.675 352.148 555.237 347.892 494.259 372.291 496.746 376.546 557.675',
      id: 66,
      data: '',
    },
    {
      points:
        '330.234 589.668 327.725 553.737 351.258 556.083 355.51 616.985 331.979 614.769 330.239 589.815 330.253 589.667 330.234 589.668',
      id: 77,
      data: '',
    },
    {
      points:
        '323.401 491.755 346.946 494.157 351.188 555.146 327.656 552.789 323.401 491.755',
      id: 65,
      data: '',
    },
    {
      points:
        '325.864 540.594 264.102 534.633 262.436 510.903 324.208 516.871 325.864 540.594',
      id: 61,
      data: '',
    },
    {
      points:
        '325.933 541.54 327.572 565.14 265.827 559.171 264.167 535.567 325.933 541.54',
      id: 62,
      data: '',
    },
    {
      points:
        '352.215 556.169 376.612 558.61 380.85 619.365 356.465 617.067 352.215 556.169',
      id: 76,
      data: '',
    },
    {
      points:
        '322.451 491.657 324.141 515.929 262.369 509.959 260.64 485.355 322.451 491.657',
      id: 60,
      data: '',
    },
    {
      points:
        '327.562 566.069 327.604 565.604 329.276 589.579 267.544 583.603 265.885 560.116 327.562 566.069',
      id: 63,
      data: '',
    },
    {
      points:
        '267.61 584.551 329.344 590.513 331.031 614.68 269.322 608.875 267.61 584.551',
      id: 64,
      data: '',
    },
    {
      points:
        '381.797 619.458 377.562 558.699 401.643 561.105 405.866 621.717 381.797 619.458',
      id: 75,
      data: '',
    },
    {
      points:
        '406.824 621.811 402.602 561.202 426.495 563.583 427.316 575.246 427.271 575.616 427.336 575.623 430.714 624.055 406.824 621.811',
      id: 74,
      data: '',
    },
    {
      points:
        '428.296 575.716 458.882 578.669 461.964 626.996 431.673 624.144 428.296 575.716',
      id: 73,
      data: '',
    },
    {
      points:
        '462.909 627.082 459.829 578.758 489.972 581.667 493.392 629.947 462.909 627.082',
      id: 72,
      data: '',
    },
    {
      points:
        '684.012 579.592 745.661 585.547 747.339 609.202 685.662 603.252 684.012 579.592',
      id: 89,
      data: '',
    },
    {
      points:
        '684.457 590.015 660.564 587.635 656.38 527.643 680.284 530.082 684.457 590.015',
      id: 92,
      data: '',
    },
    {
      points:
        '684.37 578.633 682.764 555.521 744.383 561.477 746.017 584.587 684.37 578.633',
      id: 90,
      data: '',
    },
    {
      points:
        '744.739 560.505 683.12 554.559 681.467 530.92 743.091 537.208 744.739 560.505',
      id: 91,
      data: '',
    },
    {
      points:
        '655.467 527.104 659.654 587.101 635.567 584.701 631.382 524.647 655.467 527.104',
      id: 93,
      data: '',
    },
    {
      points:
        '634.661 584.172 610.271 581.731 606.076 521.626 630.475 524.121 634.661 584.172',
      id: 94,
      data: '',
    },
    {
      points:
        '523.542 584.682 521.934 561.786 583.696 567.744 585.287 590.642 523.542 584.682',
      id: 80,
      data: '',
    },
    {
      points:
        '581.637 518.691 605.17 521.09 609.36 581.209 585.827 578.862 581.637 518.691',
      id: 95,
      data: '',
    },
    {
      points:
        '584.05 566.783 522.289 560.812 520.625 537.088 582.396 543.051 584.05 566.783',
      id: 79,
      data: '',
    },
    {
      points:
        '608.346 582.209 612.655 643.983 589.134 641.769 584.811 579.863 608.346 582.209',
      id: 83,
      data: '',
    },
    {
      points:
        '609.259 582.744 633.647 585.172 637.949 646.797 613.569 644.509 609.259 582.744',
      id: 84,
      data: '',
    },
    {
      points:
        '581.077 517.817 582.77 542.085 520.996 536.117 519.266 511.506 581.077 517.817',
      id: 78,
      data: '',
    },
    {
      points:
        '638.851 647.327 634.558 585.712 658.644 588.115 662.931 649.591 638.851 647.327',
      id: 85,
      data: '',
    },
    {
      points:
        '663.833 650.118 659.546 588.636 683.449 591.028 684.293 603.112 684.263 603.356 684.31 603.366 687.724 652.365 663.833 650.118',
      id: 86,
      data: '',
    },
    {
      points:
        '685.106 603.948 715.686 606.9 715.065 606.938 718.167 655.734 688.522 652.95 685.106 603.948',
      id: 87,
      data: '',
    },
    {
      points:
        '719.068 656.376 715.952 607.485 746.73 610.45 750.184 659.299 719.068 656.376',
      id: 16,
      data: '88',
    },
    {
      points:
        '638.835 375.871 634.307 315.189 657.611 317.475 662.129 378.173 638.835 375.871',
      id: 47,
      data: '',
    },
    {
      points:
        '505.56 313.68 503.811 290.803 581.898 297.559 583.654 321.203 505.56 313.68',
      id: 42,
      data: '',
    },

    {
      points:
        '583.78 310.228 608.188 312.618 612.706 373.291 588.309 370.88 583.78 310.228',
      id: 45,
      data: '',
    },
    {
      points:
        '583.713 309.289 579.194 248.626 603.6 251.029 608.117 311.683 583.713 309.289',
      id: 38,
      data: '',
    },

    {
      points:
        '604.548 251.129 629.369 253.563 628.777 253.609 633.291 314.151 609.065 311.772 604.548 251.129',
      id: 39,
      data: '',
    },
    {
      points:
        '629.722 253.597 653.709 255.963 653.029 256.006 657.545 316.53 634.24 314.243 629.722 253.597',
      id: 40,
      data: '',
    },

    {
      points:
        '663.088 378.266 658.568 317.564 681.248 319.797 685.654 380.502 663.088 378.266',
      id: 48,
      data: '',
    },
    {
      points:
        '681.179 318.854 658.502 316.629 653.984 255.985 676.777 258.231 681.179 318.854',
      id: 16,
      data: '41',
    },

    {
      points:
        '613.662 373.383 609.144 312.718 633.36 315.097 637.878 375.778 613.662 373.383',
      id: 46,
      data: '',
    },
    {
      points:
        '370.383 464.347 346.021 462.094 340.363 380.236 364.73 382.6 370.383 464.347',
      id: 53,
      data: '',
    },

    {
      points:
        '365.685 382.692 389.466 384.992 395.108 466.646 371.331 464.438 365.685 382.692',
      id: 54,
      data: '',
    },
    {
      points:
        '345.074 462 321.529 459.827 315.855 377.866 339.416 380.143 345.074 462',
      id: 52,
      data: '',
    },

    {
      points:
        '421.176 469.062 418.922 436.518 480.467 442.394 483.006 474.787 421.176 469.062',
      id: 58,
      data: '',
    },
    {
      points:
        '420.219 468.97 396.065 466.728 390.423 385.092 414.578 387.426 420.219 468.97',
      id: 55,
      data: '',
    },

    {
      points:
        '254.463 371.912 314.907 377.764 316.524 401.237 255.756 395.599 254.463 371.912',
      id: 49,
      data: '',
    },
    {
      points:
        '255.815 396.535 316.591 402.182 318.207 425.562 257.082 419.733 255.815 396.535',
      id: 50,
      data: '',
    },

    {
      points:
        '318.272 426.499 320.568 459.733 258.956 454.03 257.13 420.669 318.272 426.499',
      id: 51,
      data: '',
    },
    {
      points:
        '516.496 477.971 510.764 396.764 688.191 413.602 691.232 448.633 732.54 447.355 735.764 499.667 516.496 477.971',
      id: 59,
      data: '',
    },

    {
      points:
        '879.873 475.063 819.113 476.944 818.554 453.083 879.347 451.202 879.873 475.063',
      id: 102,
      data: '',
    },
    {
      points:
        '780.226 591.863 820.829 590.72 821.707 628.613 782.873 629.815 780.226 591.863',
      id: 100,
      data: '',
    },
    {
      points:
        '819.147 518.977 775.241 520.337 772.929 487.137 818.368 485.729 819.147 518.977',
      id: 97,
      data: '',
    },
    {
      points:
        '819.166 519.904 819.951 553.244 777.632 554.554 775.309 521.262 819.166 519.904',
      id: 98,
      data: '',
    },
    {
      points:
        '819.972 554.167 820.81 589.791 780.169 590.938 777.69 555.476 819.972 554.167',
      id: 99,
      data: '',
    },
    {
      points:
        '822.531 623.137 852.391 622.213 853.739 672.802 823.626 669.937 822.531 623.137',
      id: 109,
      data: '',
    },
    {
      points:
        '822.511 622.21 821.948 598.352 882.521 596.477 883.043 620.336 822.511 622.21',
      id: 108,
      data: '',
    },
    {
      points:
        '882.501 595.551 821.928 597.425 821.397 574.782 882.004 572.906 882.501 595.551',
      id: 107,
      data: '',
    },
    {
      points:
        '821.378 573.853 820.919 554.141 821.004 554.138 820.974 553.211 820.9 553.214 820.819 550.098 881.476 548.22 881.984 571.976 821.378 573.853',
      id: 106,
      data: '',
    },
    {
      points:
        '819.671 500.71 819.133 477.87 879.892 475.99 880.394 498.83 819.671 500.71',
      id: 103,
      data: '',
    },
    {
      points:
        '817.606 453.114 818.347 484.802 772.866 486.209 770.66 454.567 817.606 453.114',
      id: 96,
      data: '',
    },
    {
      points:
        '782.942 630.739 821.731 629.538 822.676 669.854 785.413 666.311 782.942 630.739',
      id: 101,
      data: '',
    },
    {
      points:
        '884.256 675.699 854.685 672.893 853.335 622.184 883.063 621.264 884.256 675.699',
      id: 110,
      data: '',
    },
    {
      points:
        '370.934 134.79 395.092 137.236 399.948 198.345 375.798 195.964 370.934 134.79',
      id: 6,
      data: '',
    },
    {
      points:
        '395.893 137.589 420.051 140.035 424.907 201.144 400.757 198.763 395.893 137.589',
      id: 7,
      data: '',
    },
    {
      points:
        '417.529 411.567 415.858 387.575 477.555 393.539 479.249 417.372 417.529 411.567',
      id: 56,
      data: '',
    },
    {
      points:
        '419.306 435.977 417.635 411.985 479.332 417.949 481.026 441.782 419.306 435.977',
      id: 57,
      data: '',
    },
    {
      points: '500.072 240.813 503.87 289.855 542.535 293.288 539.344 244.67',
      id: 36,
      data: '',
    },
    {
      points:
        '539.989013671875 244.61199951171875 543.2369995117188 293.3190002441406 581.8800048828125 296.9939880371094 578.1489868164062 248.64599609375',
      id: 37,
      data: '',
    },
    {
      points: '505.605 314.343 509.403 363.385 548.068 366.818 544.877 318.2',
      id: 43,
      data: '',
    },
    {
      points: '545.522 318.142 548.77 366.849 587.413 370.524 583.682 322.176',
      id: 44,
      data: '',
    },
    {
      points:
        '820.51 549.624 820.051 529.913 820.136 529.91 820.106 528.983 820.032 528.986 819.95 525.869 880.608 523.991 881.116 547.747 820.51 549.624',
      id: 105,
      data: '',
    },
    {
      points:
        '819.872 525.197 819.413 505.485 819.498 505.482 819.468 504.555 819.394 504.558 819.313 501.442 879.97 499.564 880.478 523.32 819.872 525.197',
      id: 104,
      data: '',
    },
    {
      points:
        '522.967 585.285 553.547 588.237 552.926 588.275 556.028 637.071 526.383 634.287 522.967 585.285',
      id: 81,
      data: '',
    },
    {
      points:
        '556.929 637.713 553.813 588.822 584.591 591.787 588.045 640.636 556.929 637.713',
      id: 82,
      data: '',
    }
  ];

  openGoogleMap() {
    window.open(
      "https://www.google.com/maps/place/24%C2%B003'03.7%22S+54%C2%B018'48.3%22W/@-24.0510278,-54.3156054",
      '_blank'
    );
  }
}

interface sgvInterface {
  points: any;
  id: any;
  data?: any;
}

export class Lote {
  id: any;
  manzana?: string;
  lote?: string;
  points?: string;
  estado?: string;
  precio?: number;
}
