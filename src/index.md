---
title: Welcome

layout: generic
---

# Welcome

---

I'm Vardan, a computer enthusiast, self-taught programmer and game developer from Armenia.

<br>

I've largely taught myself to program using online resources. I began with C# in the Unity game engine, then moved on to web development, low-level programming and C/C++. These days, I'm building a variety of projects just for fun.

<br>

Besides computers I'm also interested in physics, mathematics, drawing and music. I went to a 7-year music school where I learned to play the piano and some music theory.

## Acheviements

- **Finalist** - _Armenian National Informatics Olympiad 2024-2025_
- **Finalist** - _Armenian National English Olympiad 2026_

## Works (<a target="_blank" href="{{ gh-link }}">View more on GitHub</a>)

---

### cyOS

[GitHub](https://github.com/Vardan2009/cyOS)
<br>

cyOS is a 32-bit Operating System built from the ground up, featuring a working
kernel with paging, FAT filesystem support (FAT12/16/32 and exFAT), ATA/IDE disk I/O, PS/2 keyboard
and VGA drivers, and a full syscall interface via `INT 80h`. It supports ELF executables, user
processes, a libc, and an interactive shell (cyShell).

---

### P-8

[GitHub](https://github.com/Vardan2009/p8)
<br>

P-8 is an 8-bit reduced instruction set computer with a custom instruction set, assembler and emulator.
Implemented and simulated in the [Digital Logic Simulator (by hneeman)](https://github.com/hneemann/Digital), it can use up to 2048 bits of runtime RAM and ROM and 4096 bits of program code (16 bits/instruction).

---

### Eiger (EigerC)

[GitHub](https://github.com/eigerproject/eigerc)
<br>

Eiger is a multi-paradigm programming language implemented in C++ as [EigerC](https://github.com/eigerproject/eigerc), with a previous C# implementation available as [EigerCS](https://github.com/eigerproject/eigercs).

---

### Basalt

[GitHub](https://github.com/Vardan2009/basalt) |
[Article](/posts/2026-02-24-basalt)
<br>

Basalt is a simple and lightweight single-binary static site generator written in C++.


## Latest Posts

<basalt-for collection="posts" as="page" sort="date" sort-reverse>
    <a href="{{ page.basalt-route }}" style="text-decoration: none">
        <div class="blog-item">
            <p class="title">{{ page.title }}</p>
            <p class="info">{{ page.date }}</p>
        </div>
    </a>
</basalt-for>
