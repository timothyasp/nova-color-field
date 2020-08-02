# Laravel Nova Color Field

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

and so on. You can use any one of: `chrome, compact, grayscale, material, photoshop, sketch, slider, swatches`

## Credits

-   [Timothy Asp](https://github.com/timothyasp)
-   [Don Gilbert](https://github.com/dongilbert)

Built for [QuizGriz - the #1 online trivia and quiz game site](https://grizly.com)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
