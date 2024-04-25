const ProfileLink = ({ item }) => {
    const pathName = usePathname();
  
    return (
      <Link
        href={item.path}
        className={`${styles.container} ${
          pathName === item.path && styles.active
        }`}
      >
        <Image src={item.image} alt={item.alt} width={item.width} height={item.height} />
      </Link>
    );
  };