# Laravel Nova Color Field

Now works with Laravel Nova v4!  

---

If you still are using Nova v1-v3, use v1.0.4 of this field.

Dead simple Laravel Nova Color field. Includes a color picker from the `vue-color` component.

### Details Page 
![details page color input](https://cdn-pro.dprcdn.net/files/acc_465612/jI2x1G)

### Index

![index color](https://cdn-pro.dprcdn.net/files/acc_465612/VnWbt5)

## Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require timothyasp/nova-color-field
```

## Usage

In your resource class, add the following to your `fields` method:

```php
use Timothyasp\Color\Color;

....

Color::make("Field");
```

This will add the color picker to your resource, using vue-color's "slider" component by default.
If you'd like to leverage another vue-color component, you can do so by calling that component's
name as a method after `Color::make()`:

```php
use Timothyasp\Color\Color;

....

Color::make('Field')->compact()
// or
Color::make('Field')->slider()
```

and so on. You can use any one of: `chrome, compact, grayscale, material, photoshop, sketch, slider, swatches, twitter`.


Palette support for adding custom colors to some of the pickers is also available:

```
Color::make('Field')->compact()->palette(['#beaf00', '#DEADAF', '#000']);
```


## Credits

-   [Timothy Asp](https://github.com/timothyasp)
-   [Don Gilbert](https://github.com/dongilbert)
-   [marvinrabe](https://github.com/marvinrrabe)]

Built for [QuizGriz - the #1 online trivia and quiz game site](https://grizly.com)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
