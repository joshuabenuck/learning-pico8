# Limitations and Specifications

## Limitations: A Blessing or a Curse?

As you learn about PICO-8 and the limitations it imposes, you may find yourself
wondering why they were put in place when the vast majority of systems running
PICO-8 would have no problems vastly exceeding its seemingly arbitrary
constraints.

The PICO-8 homepage provides part of the answer:
> The harsh limitations of PICO-8 are carefully chosen to be fun to work with,
> to encourage small but expressive designs, and to give cartridges made with
> PICO-8 their own particular look and feel.

Constraints inspire and enable creativity. Every decision PICO-8 takes away
from you is one fewer you have to worry about. All of that energy can then be
turned to working within those constraints to create something amazing.

## Specifications

| *Specification* | *Description* |
|-----------------|---------------|
| Resolution      | 128x128 |
| Palette         | 16 fixed colors |
| Sound           | 4 Channel Synth |
| Language        | Lua |
| Cartridge Size  | 32k (64k with limitations) |
| Sprites         | Up to 256 8x8 sprites |
| Map             | Up to 128x32 cells |
| Tokens          | 8192 |
| Input           | 4 directions, 2 buttons |
| Extended Input  | Mouse, if in devkit mode |

## Palette

PICO-8 uses a fixed color palette. You are restricted to these colors. This
saves you from having to agonize over whether you have found the right shade of
blue for your character or background or other game element. The limited number of choices accelerates your development flow.

The table on this page comes from [lospec](https://lospec.com/palette-list/pico-8). If you are just using the PICO-8 environment, you will never need to know the RGB values for each of these colors. For those looking to expand their use of the palette beyond that, this reference may be useful.

<div><img src="./limitations_palette.png"/></div>

<style>
div.palette {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 0;
  padding: 5px;
  background: color(indent);
  margin: 10px 0 20px;
  width: 325px;
  margin: 0px;
}

.color {
  height: 32px;
   flex: 0 1 auto;
  text-align: center;
  color: white;
  font-size: 10px;
  text-align: center;
  vertical-align:center;
}
</style>
<div class="palette">
  <div class="color" style="background:#000000; color: #ffffff; min-width: 25%; height: 75px; line-height: 75px; font-size: 14px">
    #000000
  </div>
  <div class="color" style="background:#1D2B53; color: #ffffff; min-width: 25%; height: 75px; line-height: 75px; font-size: 14px">
    #1D2B53
  </div>
  <div class="color" style="background:#7E2553; color: #ffffff; min-width: 25%; height: 75px; line-height: 75px; font-size: 14px">
    #7E2553
  </div>
  <div class="color" style="background:#008751; color: #ffffff; min-width: 25%; height: 75px; line-height: 75px; font-size: 14px">
    #008751
  </div>
  <div class="color" style="background:#AB5236; color: #ffffff; min-width: 25%; height: 75px; line-height: 75px; font-size: 14px">
    #AB5236
  </div>
  <div class="color" style="background:#5F574F; color: #ffffff; min-width: 25%; height: 75px; line-height: 75px; font-size: 14px">
    #5F574F
  </div>
  <div class="color" style="background:#C2C3C7; color: #ffffff; min-width: 25%; height: 75px; line-height: 75px; font-size: 14px">
    #C2C3C7
  </div>
  <div class="color" style="background:#FFF1E8; color: #000000; min-width: 25%; height: 75px; line-height: 75px; font-size: 14px">
    #FFF1E8
  </div>
  <div class="color" style="background:#FF004D; color: #ffffff; min-width: 25%; height: 75px; line-height: 75px; font-size: 14px">
    #FF004D
  </div>
  <div class="color" style="background:#FFA300; color: #ffffff; min-width: 25%; height: 75px; line-height: 75px; font-size: 14px">
    #FFA300
  </div>
  <div class="color" style="background:#FFEC27; color: #000000; min-width: 25%; height: 75px; line-height: 75px; font-size: 14px">
    #FFEC27
  </div>
  <div class="color" style="background:#00E436; color: #ffffff; min-width: 25%; height: 75px; line-height: 75px; font-size: 14px">
    #00E436
  </div>
  <div class="color" style="background:#29ADFF; color: #ffffff; min-width: 25%; height: 75px; line-height: 75px; font-size: 14px">
    #29ADFF
  </div>
  <div class="color" style="background:#83769C; color: #ffffff; min-width: 25%; height: 75px; line-height: 75px; font-size: 14px">
    #83769C
  </div>
  <div class="color" style="background:#FF77A8; color: #ffffff; min-width: 25%; height: 75px; line-height: 75px; font-size: 14px">
    #FF77A8
  </div>
  <div class="color" style="background:#FFCCAA; color: #000000; min-width: 25%; height: 75px; line-height: 75px; font-size: 14px">
    #FFCCAA
  </div>
</div>

A secret second palette was added in later versions of PICO-8. Accessing it
isn't all that straight forward and there are some limitations on its use. It
is mentioned here to note its existence, but you may want to wait until you are
comfortable developing carts before seeking out the details.

## Tokens

One of PICO-8's limits is how much code you can use. This limit is a bit hard
to understand for people new to PICO-8.  It's based on something called tokens.
These are basically individual bits of code.  For example, something like
`x=width+7` takes up five tokens, one token for each part (`x`, `=`, `width`,
`+`, and `7`). You are allowed 8192 tokens of code, so you'll be fine until
you're making a fairly large game. You can see the number of tokens you've used
in the bottom-right of the code editor.


