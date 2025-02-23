```javascript
import Link from 'next/link';

function MyComponent() {
  const router = useRouter(); // Import useRouter

  const handleLinkClick = (href) => (e) => {
    e.preventDefault();
    router.push(href, undefined, { shallow: true }); // Use router.push with shallow: true
  };

  return (
    <div>
      <Link href="/">
        <a onClick={handleLinkClick('/')}>Home</a>
      </Link>
      <Link href="/about">
        <a onClick={handleLinkClick('/about')}>About</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```