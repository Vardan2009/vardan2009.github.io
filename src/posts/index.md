---
title: Posts

layout: generic
---

# Posts
---

## Latest

<basalt-for collection="posts" as="page" sort="date" sort-reverse>
    <a href="{{ page.basalt-route }}" style="text-decoration: none">
        <div class="blog-item">
            <p class="title">{{ page.title }}</p>
            <p class="info">{{ page.date }}</p>
        </div>
    </a>
</basalt-for>